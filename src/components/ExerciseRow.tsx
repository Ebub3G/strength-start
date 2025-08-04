import { useState } from 'react';
import { Check, Edit3 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Exercise } from '../types/workout';

interface ExerciseRowProps {
  exercise: Exercise;
  onUpdate: (updates: Partial<Exercise>) => void;
}

export const ExerciseRow = ({ exercise, onUpdate }: ExerciseRowProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempReps, setTempReps] = useState(exercise.actualReps || '');
  const [tempNotes, setTempNotes] = useState(exercise.notes || '');

  const handleSave = () => {
    onUpdate({
      actualReps: tempReps,
      notes: tempNotes
    });
    setIsEditing(false);
  };

  const handleToggleComplete = () => {
    onUpdate({ completed: !exercise.completed });
  };

  return (
    <div className={`
      rounded-2xl border transition-all duration-200
      ${exercise.completed 
        ? 'bg-success/5 border-success/20' 
        : 'bg-card border-border hover:border-primary/30'
      }
    `}>
      <div className="p-3 sm:p-4">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
          <div className="flex-1 min-w-0">
            <h4 className={`font-medium text-sm sm:text-base ${exercise.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
              {exercise.name}
            </h4>
            <div className="text-xs sm:text-sm text-muted-foreground mt-1 space-y-1">
              <p>Target: {exercise.target}</p>
              <p>Rest: {exercise.rest}</p>
            </div>
            
            {/* Actual Reps/Notes Section */}
            {isEditing ? (
              <div className="mt-3 space-y-2">
                <Input
                  placeholder="Actual reps performed (e.g., 2x8, 2x30s)"
                  value={tempReps}
                  onChange={(e) => setTempReps(e.target.value)}
                  className="rounded-xl text-sm"
                />
                <Textarea
                  placeholder="Notes (optional)"
                  value={tempNotes}
                  onChange={(e) => setTempNotes(e.target.value)}
                  className="rounded-xl resize-none text-sm"
                  rows={2}
                />
                <div className="flex gap-2">
                  <Button size="sm" onClick={handleSave} className="rounded-xl flex-1 sm:flex-none">
                    Save
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => setIsEditing(false)}
                    className="rounded-xl flex-1 sm:flex-none"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <div className="mt-2 space-y-1">
                {exercise.actualReps && (
                  <p className="text-xs sm:text-sm">
                    <span className="text-muted-foreground">Actual: </span>
                    <span className="font-medium text-foreground">{exercise.actualReps}</span>
                  </p>
                )}
                {exercise.notes && (
                  <p className="text-xs sm:text-sm text-muted-foreground italic break-words">"{exercise.notes}"</p>
                )}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 sm:gap-3 self-start sm:self-center">
            {!isEditing && (
              <Button
                size="sm"
                variant="outline"
                onClick={() => setIsEditing(true)}
                className="rounded-xl p-2"
              >
                <Edit3 className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="sr-only">Edit exercise</span>
              </Button>
            )}
            
            <Button
              size="sm"
              variant={exercise.completed ? "default" : "outline"}
              onClick={handleToggleComplete}
              className={`rounded-xl p-2 ${exercise.completed ? 'bg-success hover:bg-success/90' : ''}`}
            >
              <Check className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="sr-only">
                {exercise.completed ? 'Mark incomplete' : 'Mark complete'}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};