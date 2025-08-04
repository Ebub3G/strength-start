import { ReactNode } from 'react';
import { Exercise } from '../types/workout';
import { ExerciseRow } from './ExerciseRow';

interface SessionSectionProps {
  title: string;
  icon: ReactNode;
  exercises: Exercise[];
  sessionType: string;
  weekNumber: number;
  dayName: string;
  onUpdateExercise: (session: string, exerciseIndex: number, updates: { actualReps?: string; notes?: string; completed?: boolean }) => void;
  userProgress: any;
}

export const SessionSection = ({ 
  title, 
  icon, 
  exercises, 
  sessionType, 
  weekNumber, 
  dayName, 
  onUpdateExercise, 
  userProgress 
}: SessionSectionProps) => {
  const sessionData = userProgress.weeks[weekNumber.toString()]?.[dayName]?.[sessionType] || {};
  
  return (
    <div className="space-y-3 sm:space-y-4">
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <h4 className="font-medium text-foreground text-sm sm:text-base">{title}</h4>
      </div>
      
      <div className="space-y-2 sm:space-y-3 ml-8 sm:ml-11">
        {exercises.map((exercise, index) => {
          const exerciseProgress = sessionData[exercise.name] || { completed: false, actualReps: '', notes: '' };
          
          return (
            <ExerciseRow
              key={index}
              exercise={{
                ...exercise,
                completed: exerciseProgress.completed,
                actualReps: exerciseProgress.actualReps,
                notes: exerciseProgress.notes
              }}
              onUpdate={(updates) => onUpdateExercise(sessionType, index, updates)}
            />
          );
        })}
      </div>
    </div>
  );
};