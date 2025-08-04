import { Calendar, CheckCircle, Clock, Sunrise, Sunset } from 'lucide-react';
import { WorkoutDay } from '../types/workout';
import { SessionSection } from './SessionSection';

interface DayCardProps {
  day: WorkoutDay;
  weekNumber: number;
  onUpdateExercise: (session: string, exerciseIndex: number, updates: { actualReps?: string; notes?: string; completed?: boolean }) => void;
  userProgress: any;
}

export const DayCard = ({ day, weekNumber, onUpdateExercise, userProgress }: DayCardProps) => {
  const getSessionProgress = (sessionType: string) => {
    const sessionData = userProgress.weeks[weekNumber.toString()]?.[day.name]?.[sessionType];
    if (!sessionData) return { completed: 0, total: 0 };
    
    const exercises = day[sessionType as keyof WorkoutDay] as any;
    if (!exercises?.exercises) return { completed: 0, total: 0 };
    
    const completed = exercises.exercises.filter((ex: any) => 
      sessionData[ex.name]?.completed
    ).length;
    
    return { completed, total: exercises.exercises.length };
  };

  const getTotalProgress = () => {
    let totalCompleted = 0;
    let totalExercises = 0;
    
    ['morning', 'evening', 'single'].forEach(sessionType => {
      if (day[sessionType as keyof WorkoutDay]) {
        const progress = getSessionProgress(sessionType);
        totalCompleted += progress.completed;
        totalExercises += progress.total;
      }
    });
    
    return { completed: totalCompleted, total: totalExercises };
  };

  const totalProgress = getTotalProgress();
  const isDayComplete = totalProgress.completed === totalProgress.total && totalProgress.total > 0;
  
  return (
    <div className="bg-card rounded-2xl border border-border p-4 sm:p-6 space-y-4 sm:space-y-6 h-fit">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className={`
            w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0
            ${isDayComplete 
              ? 'bg-success text-success-foreground' 
              : 'bg-secondary text-secondary-foreground'
            }
          `}>
            {isDayComplete ? (
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-foreground text-sm sm:text-base">{day.name}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {totalProgress.completed}/{totalProgress.total} exercises completed
            </p>
          </div>
        </div>
        
        {isDayComplete && (
          <div className="text-success font-medium text-xs sm:text-sm whitespace-nowrap">
            Complete! 🎉
          </div>
        )}
      </div>

      <div className="space-y-4 sm:space-y-6">
        {day.morning && (
          <SessionSection
            title="Morning Session"
            icon={<Sunrise className="w-4 h-4 sm:w-5 sm:h-5" />}
            exercises={day.morning.exercises}
            sessionType="morning"
            weekNumber={weekNumber}
            dayName={day.name}
            onUpdateExercise={onUpdateExercise}
            userProgress={userProgress}
          />
        )}
        
        {day.evening && (
          <SessionSection
            title="Evening Session"
            icon={<Sunset className="w-4 h-4 sm:w-5 sm:h-5" />}
            exercises={day.evening.exercises}
            sessionType="evening"
            weekNumber={weekNumber}
            dayName={day.name}
            onUpdateExercise={onUpdateExercise}
            userProgress={userProgress}
          />
        )}
        
        {day.single && (
          <SessionSection
            title="Session"
            icon={<Clock className="w-4 h-4 sm:w-5 sm:h-5" />}
            exercises={day.single.exercises}
            sessionType="single"
            weekNumber={weekNumber}
            dayName={day.name}
            onUpdateExercise={onUpdateExercise}
            userProgress={userProgress}
          />
        )}
      </div>
    </div>
  );
};