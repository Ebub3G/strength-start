import { useState, useEffect } from 'react';
import { Download, RotateCcw } from 'lucide-react';
import { Button } from './ui/button';
import { WeekData, UserProgress } from '../types/workout';
import { workoutPlan } from '../data/workoutPlan';
import { saveUserProgress, loadUserProgress } from '../utils/storage';
import { WeekSelector } from './WeekSelector';
import { ProgressSummary } from './ProgressSummary';
import { DayCard } from './DayCard';
import { TipsAccordion } from './TipsAccordion';
import { QuoteBanner } from './QuoteBanner';
import { useToast } from '../hooks/use-toast';

export const WorkoutTracker = () => {
  const [userProgress, setUserProgress] = useState<UserProgress>({
    currentWeek: 1,
    weeks: {},
    lastActiveDate: new Date().toISOString()
  });
  const { toast } = useToast();

  // Initialize data
  useEffect(() => {
    const savedProgress = loadUserProgress();
    if (savedProgress) {
      setUserProgress(savedProgress);
    }
  }, []);

  // Auto-save on changes
  useEffect(() => {
    saveUserProgress(userProgress);
  }, [userProgress]);

  const currentWeek = workoutPlan.find(w => w.weekNumber === userProgress.currentWeek);

  const isWeekUnlocked = (weekNumber: number): boolean => {
    if (weekNumber === 1) return true;
    if (weekNumber <= userProgress.currentWeek) return true;
    
    // Unlock next week if previous week is complete
    const prevWeek = workoutPlan.find(w => w.weekNumber === weekNumber - 1);
    if (!prevWeek) return false;
    
    // Check if all exercises in previous week are completed
    const prevWeekProgress = userProgress.weeks[String(weekNumber - 1)];
    if (!prevWeekProgress) return false;
    
    let totalExercises = 0;
    let completedExercises = 0;
    
    prevWeek.days.forEach(day => {
      ['morning', 'evening', 'single'].forEach(sessionType => {
        const session = day[sessionType as keyof typeof day] as any;
        if (session?.exercises) {
          totalExercises += session.exercises.length;
          session.exercises.forEach((exercise: any) => {
            if (prevWeekProgress[day.name]?.[sessionType]?.[exercise.name]?.completed) {
              completedExercises++;
            }
          });
        }
      });
    });
    
    return completedExercises === totalExercises && totalExercises > 0;
  };

  const handleWeekChange = (weekNumber: number) => {
    if (isWeekUnlocked(weekNumber)) {
      setUserProgress(prev => ({ ...prev, currentWeek: weekNumber }));
    }
  };

  const handleUpdateExercise = (dayIndex: number, session: string, exerciseIndex: number, updates: { actualReps?: string; notes?: string; completed?: boolean }) => {
    if (!currentWeek) return;
    
    const dayName = currentWeek.days[dayIndex].name;
    const sessionData = currentWeek.days[dayIndex][session as keyof typeof currentWeek.days[0]] as any;
    if (!sessionData?.exercises) return;
    
    const exerciseName = sessionData.exercises[exerciseIndex].name;
    
    setUserProgress(prev => {
      const updatedProgress = { ...prev };
      
      if (!updatedProgress.weeks[String(userProgress.currentWeek)]) {
        updatedProgress.weeks[String(userProgress.currentWeek)] = {};
      }
      
      if (!updatedProgress.weeks[String(userProgress.currentWeek)][dayName]) {
        updatedProgress.weeks[String(userProgress.currentWeek)][dayName] = {};
      }
      
      if (!updatedProgress.weeks[String(userProgress.currentWeek)][dayName][session]) {
        updatedProgress.weeks[String(userProgress.currentWeek)][dayName][session] = {};
      }
      
      const existingData = updatedProgress.weeks[String(userProgress.currentWeek)][dayName][session][exerciseName] || {};
      
      updatedProgress.weeks[String(userProgress.currentWeek)][dayName][session][exerciseName] = {
        ...existingData,
        ...updates
      };
      
      updatedProgress.lastActiveDate = new Date().toISOString();
      
      // Check if week is complete
      let totalExercises = 0;
      let completedExercises = 0;
      
      currentWeek.days.forEach(day => {
        ['morning', 'evening', 'single'].forEach(sessionType => {
          const sessionObj = day[sessionType as keyof typeof day] as any;
          if (sessionObj?.exercises) {
            totalExercises += sessionObj.exercises.length;
            sessionObj.exercises.forEach((exercise: any) => {
              if (updatedProgress.weeks[String(userProgress.currentWeek)]?.[day.name]?.[sessionType]?.[exercise.name]?.completed) {
                completedExercises++;
              }
            });
          }
        });
      });
      
      if (completedExercises === totalExercises && totalExercises > 0) {
        const prevWeekProgress = userProgress.weeks[String(userProgress.currentWeek)];
        let prevCompletedCount = 0;
        
        if (prevWeekProgress) {
          currentWeek.days.forEach(day => {
            ['morning', 'evening', 'single'].forEach(sessionType => {
              const sessionObj = day[sessionType as keyof typeof day] as any;
              if (sessionObj?.exercises) {
                sessionObj.exercises.forEach((exercise: any) => {
                  if (prevWeekProgress[day.name]?.[sessionType]?.[exercise.name]?.completed) {
                    prevCompletedCount++;
                  }
                });
              }
            });
          });
        }
        
        if (prevCompletedCount < totalExercises) {
          toast({
            title: "Week Complete! 🎉",
            description: `Amazing work finishing Week ${userProgress.currentWeek}! You're getting stronger every day.`,
          });
        }
      }
      
      return updatedProgress;
    });
  };

  const handleReset = () => {
    const freshProgress: UserProgress = {
      currentWeek: 1,
      weeks: {},
      lastActiveDate: new Date().toISOString()
    };
    
    setUserProgress(freshProgress);
    saveUserProgress(freshProgress);
    
    toast({
      title: "Progress Reset",
      description: "Your workout tracker has been reset to the beginning.",
    });
  };

  const handleExport = () => {
    if (!currentWeek) return;
    
    const exportData = {
      week: currentWeek,
      exportDate: new Date().toLocaleDateString(),
      userProgress
    };
    
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `week-${currentWeek.weekNumber}-summary.json`;
    link.click();
    URL.revokeObjectURL(url);
    
    toast({
      title: "Summary Exported",
      description: `Week ${currentWeek.weekNumber} summary has been downloaded.`,
    });
  };

  if (!currentWeek) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading your workout plan...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-4">
            <div className="flex-1">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">StrengthStart</h1>
              <p className="text-xs sm:text-sm text-muted-foreground">6-Week Progressive Muscle-Building Tracker</p>
            </div>
            <div className="flex gap-2 sm:gap-3">
              <Button variant="outline" size="sm" onClick={handleExport} className="rounded-xl flex-1 sm:flex-none">
                <Download className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:inline">Export</span>
              </Button>
              <Button variant="outline" size="sm" onClick={handleReset} className="rounded-xl flex-1 sm:flex-none">
                <RotateCcw className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:inline">Reset</span>
              </Button>
            </div>
          </div>
          
            <WeekSelector
              currentWeek={userProgress.currentWeek}
              totalWeeks={6}
              onWeekChange={handleWeekChange}
              isWeekUnlocked={isWeekUnlocked}
            />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 space-y-4 sm:space-y-6">
        <QuoteBanner />
        
        <ProgressSummary week={currentWeek} userProgress={userProgress} />
        
        <TipsAccordion week={currentWeek.weekNumber} />
        
        {/* Days */}
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground">Weekly Schedule</h2>
          <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
            {currentWeek.days.map((day, dayIndex) => (
              <DayCard
                key={dayIndex}
                day={day}
                weekNumber={userProgress.currentWeek}
                onUpdateExercise={(session, exerciseIndex, updates) => 
                  handleUpdateExercise(dayIndex, session, exerciseIndex, updates)
                }
                userProgress={userProgress}
              />
            ))}
          </div>
        </div>

        {/* Phase Transition Message */}
        {userProgress.currentWeek === 3 && (() => {
          let totalExercises = 0;
          let completedExercises = 0;
          
          currentWeek?.days.forEach(day => {
            ['morning', 'evening', 'single'].forEach(sessionType => {
              const session = day[sessionType as keyof typeof day] as any;
              if (session?.exercises) {
                totalExercises += session.exercises.length;
                session.exercises.forEach((exercise: any) => {
                  if (userProgress.weeks[String(userProgress.currentWeek)]?.[day.name]?.[sessionType]?.[exercise.name]?.completed) {
                    completedExercises++;
                  }
                });
              }
            });
          });
          
          return completedExercises === totalExercises && totalExercises > 0;
        })() && (
          <div className="bg-gradient-to-r from-purple-soft to-purple-light rounded-2xl p-4 sm:p-6 border border-purple-light/50">
            <div className="text-center">
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">🎉 Ready for Phase 2!</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Congratulations on completing the Foundation Phase! You've built a solid habit and improved your form. 
                Phase 2 will increase intensity with more challenging exercises and finisher sets.
              </p>
            </div>
          </div>
        )}

        {/* Graduation Message */}
        {userProgress.currentWeek === 6 && (() => {
          let totalExercises = 0;
          let completedExercises = 0;
          
          currentWeek?.days.forEach(day => {
            ['morning', 'evening', 'single'].forEach(sessionType => {
              const session = day[sessionType as keyof typeof day] as any;
              if (session?.exercises) {
                totalExercises += session.exercises.length;
                session.exercises.forEach((exercise: any) => {
                  if (userProgress.weeks[String(userProgress.currentWeek)]?.[day.name]?.[sessionType]?.[exercise.name]?.completed) {
                    completedExercises++;
                  }
                });
              }
            });
          });
          
          return completedExercises === totalExercises && totalExercises > 0;
        })() && (
          <div className="bg-gradient-to-r from-purple-soft to-purple-light rounded-2xl p-4 sm:p-6 border border-purple-light/50">
            <div className="text-center">
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">🏆 Program Complete!</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">
                Amazing work completing the 6-week progressive muscle-building program! You've built strength, endurance, and most importantly, 
                a consistent exercise habit with proper form.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                <strong>Next Steps:</strong> Consider progressing to intermediate bodyweight routines with advanced variations like 
                archer push-ups, pistol squats, and weighted exercises. You're ready for the next level!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};