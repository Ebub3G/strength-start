import { useState, useEffect } from 'react';
import { Download, RotateCcw } from 'lucide-react';
import { Button } from './ui/button';
import { WeekData, UserProgress, Exercise } from '../types/workout';
import { generateWorkoutPlan } from '../data/workoutPlan';
import { saveWorkoutData, loadWorkoutData, saveUserProgress, loadUserProgress } from '../utils/storage';
import { WeekSelector } from './WeekSelector';
import { ProgressSummary } from './ProgressSummary';
import { SessionCard } from './SessionCard';
import { TipsAccordion } from './TipsAccordion';
import { QuoteBanner } from './QuoteBanner';
import { useToast } from '../hooks/use-toast';

export const WorkoutTracker = () => {
  const [weeks, setWeeks] = useState<WeekData[]>([]);
  const [userProgress, setUserProgress] = useState<UserProgress>({
    currentWeek: 1,
    completedWeeks: [],
    smallWins: [],
    lastActiveDate: new Date().toISOString()
  });
  const { toast } = useToast();

  // Initialize data
  useEffect(() => {
    const savedWeeks = loadWorkoutData();
    const savedProgress = loadUserProgress();

    if (savedWeeks && savedProgress) {
      setWeeks(savedWeeks);
      setUserProgress(savedProgress);
    } else {
      const initialWeeks = generateWorkoutPlan();
      setWeeks(initialWeeks);
      saveWorkoutData(initialWeeks);
      saveUserProgress(userProgress);
    }
  }, []);

  // Auto-save on changes
  useEffect(() => {
    if (weeks.length > 0) {
      saveWorkoutData(weeks);
    }
  }, [weeks]);

  useEffect(() => {
    saveUserProgress(userProgress);
  }, [userProgress]);

  const currentWeek = weeks.find(w => w.weekNumber === userProgress.currentWeek);

  const isWeekUnlocked = (weekNumber: number): boolean => {
    if (weekNumber === 1) return true;
    if (weekNumber <= userProgress.currentWeek) return true;
    
    // Unlock next week if current week is complete
    const prevWeek = weeks.find(w => w.weekNumber === weekNumber - 1);
    return prevWeek ? prevWeek.completedSessions === prevWeek.totalSessions : false;
  };

  const handleWeekChange = (weekNumber: number) => {
    if (isWeekUnlocked(weekNumber)) {
      setUserProgress(prev => ({ ...prev, currentWeek: weekNumber }));
    }
  };

  const handleUpdateExercise = (dayIndex: number, exerciseIndex: number, updates: Partial<Exercise>) => {
    setWeeks(prevWeeks => 
      prevWeeks.map(week => {
        if (week.weekNumber === userProgress.currentWeek) {
          const updatedDays = [...week.days];
          updatedDays[dayIndex] = {
            ...updatedDays[dayIndex],
            exercises: updatedDays[dayIndex].exercises.map((ex, idx) => 
              idx === exerciseIndex ? { ...ex, ...updates } : ex
            )
          };
          
          // Update session completion
          const sessionComplete = updatedDays[dayIndex].exercises.every(ex => ex.completed);
          updatedDays[dayIndex].completed = sessionComplete;
          
          // Update week completion count
          const completedSessions = updatedDays.filter(day => day.completed).length;
          
          const updatedWeek = {
            ...week,
            days: updatedDays,
            completedSessions
          };

          // Check if week is complete
          if (completedSessions === week.totalSessions && !userProgress.completedWeeks.includes(week.weekNumber)) {
            setUserProgress(prev => ({
              ...prev,
              completedWeeks: [...prev.completedWeeks, week.weekNumber],
              smallWins: [...prev.smallWins, `Completed Week ${week.weekNumber}!`]
            }));
            
            toast({
              title: "Week Complete! 🎉",
              description: `Amazing work finishing Week ${week.weekNumber}! You're getting stronger every day.`,
            });
          }

          return updatedWeek;
        }
        return week;
      })
    );
  };

  const handleReset = () => {
    const freshWeeks = generateWorkoutPlan();
    const freshProgress: UserProgress = {
      currentWeek: 1,
      completedWeeks: [],
      smallWins: [],
      lastActiveDate: new Date().toISOString()
    };
    
    setWeeks(freshWeeks);
    setUserProgress(freshProgress);
    saveWorkoutData(freshWeeks);
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
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-foreground">StrengthStart</h1>
              <p className="text-sm text-muted-foreground">8-Week Beginner Workout Tracker</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={handleExport} className="rounded-xl">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button variant="outline" size="sm" onClick={handleReset} className="rounded-xl">
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset
              </Button>
            </div>
          </div>
          
          <WeekSelector
            currentWeek={userProgress.currentWeek}
            totalWeeks={8}
            onWeekChange={handleWeekChange}
            isWeekUnlocked={isWeekUnlocked}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        <QuoteBanner />
        
        <ProgressSummary week={currentWeek} />
        
        <TipsAccordion week={currentWeek.weekNumber} />
        
        {/* Sessions */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-foreground">Workout Sessions</h2>
          <div className="grid gap-6">
            {currentWeek.days.map((day, dayIndex) => (
              <SessionCard
                key={dayIndex}
                day={day}
                onUpdateExercise={(exerciseIndex, updates) => 
                  handleUpdateExercise(dayIndex, exerciseIndex, updates)
                }
              />
            ))}
          </div>
        </div>

        {/* Phase Transition Message */}
        {userProgress.currentWeek === 4 && currentWeek.completedSessions === currentWeek.totalSessions && (
          <div className="bg-gradient-to-r from-purple-soft to-purple-light rounded-2xl p-6 border border-purple-light/50">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-2">🎉 Ready for Phase 2!</h3>
              <p className="text-muted-foreground">
                Congratulations on completing the Foundation Phase! You've built a solid habit and improved your form. 
                Phase 2 will increase frequency to 4 sessions per week with slightly more challenging exercises.
              </p>
            </div>
          </div>
        )}

        {/* Graduation Message */}
        {userProgress.currentWeek === 8 && currentWeek.completedSessions === currentWeek.totalSessions && (
          <div className="bg-gradient-to-r from-purple-soft to-purple-light rounded-2xl p-6 border border-purple-light/50">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-2">🏆 Program Complete!</h3>
              <p className="text-muted-foreground mb-4">
                Amazing work completing the 8-week program! You've built strength, endurance, and most importantly, 
                a consistent exercise habit.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Next Steps:</strong> Consider progressing to a 4-5 day split with bodyweight progressions like 
                regular push-ups, split squats, and longer core holds. You're ready for the next level!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};