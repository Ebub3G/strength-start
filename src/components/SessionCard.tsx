import { Calendar, CheckCircle } from 'lucide-react';
import { WorkoutDay } from '../types/workout';
import { ExerciseRow } from './ExerciseRow';

interface SessionCardProps {
  day: WorkoutDay;
  onUpdateExercise: (exerciseIndex: number, updates: Partial<import('../types/workout').Exercise>) => void;
}

export const SessionCard = ({ day, onUpdateExercise }: SessionCardProps) => {
  const completedExercises = day.exercises.filter(ex => ex.completed).length;
  const totalExercises = day.exercises.length;
  const isSessionComplete = completedExercises === totalExercises;
  
  return (
    <div className="bg-card rounded-2xl border border-border p-4 sm:p-6 space-y-3 sm:space-y-4 h-fit">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className={`
            w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center flex-shrink-0
            ${isSessionComplete 
              ? 'bg-success text-success-foreground' 
              : 'bg-secondary text-secondary-foreground'
            }
          `}>
            {isSessionComplete ? (
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            ) : (
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
            )}
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-foreground text-sm sm:text-base truncate">{day.dateLabel}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {completedExercises}/{totalExercises} exercises completed
            </p>
          </div>
        </div>
        
        {isSessionComplete && (
          <div className="text-success font-medium text-xs sm:text-sm whitespace-nowrap">
            Complete! 🎉
          </div>
        )}
      </div>

      <div className="space-y-2 sm:space-y-3">
        {day.exercises.map((exercise, index) => (
          <ExerciseRow
            key={index}
            exercise={exercise}
            onUpdate={(updates) => onUpdateExercise(index, updates)}
          />
        ))}
      </div>
    </div>
  );
};