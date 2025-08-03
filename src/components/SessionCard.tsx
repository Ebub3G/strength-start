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
    <div className="bg-card rounded-2xl border border-border p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`
            w-10 h-10 rounded-xl flex items-center justify-center
            ${isSessionComplete 
              ? 'bg-success text-success-foreground' 
              : 'bg-secondary text-secondary-foreground'
            }
          `}>
            {isSessionComplete ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              <Calendar className="w-5 h-5" />
            )}
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{day.dateLabel}</h3>
            <p className="text-sm text-muted-foreground">
              {completedExercises}/{totalExercises} exercises completed
            </p>
          </div>
        </div>
        
        {isSessionComplete && (
          <div className="text-success font-medium text-sm">
            Complete! 🎉
          </div>
        )}
      </div>

      <div className="space-y-3">
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