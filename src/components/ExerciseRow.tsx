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
      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h4 className={`font-medium ${exercise.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
              {exercise.name}
            </h4>
            <p className="text-sm text-muted-foreground mt-1">
              Target: {exercise.target}
            </p>
            
            {/* Actual Reps/Notes Section */}
            {isEditing ? (
              <div className="mt-3 space-y-2">
                <Input
                  placeholder="Actual reps performed (e.g., 2x8, 2x30s)"
                  value={tempReps}
                  onChange={(e) => setTempReps(e.target.value)}
                  className="rounded-xl"
                />
                <Textarea
                  placeholder="Notes (optional)"
                  value={tempNotes}
                  onChange={(e) => setTempNotes(e.target.value)}
                  className="rounded-xl resize-none"
                  rows={2}
                />
                <div className="flex gap-2">
                  <Button size="sm" onClick={handleSave} className="rounded-xl">
                    Save
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => setIsEditing(false)}
                    className="rounded-xl"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <div className="mt-2 space-y-1">
                {exercise.actualReps && (
                  <p className="text-sm">
                    <span className="text-muted-foreground">Actual: </span>
                    <span className="font-medium text-foreground">{exercise.actualReps}</span>
                  </p>
                )}
                {exercise.notes && (
                  <p className="text-sm text-muted-foreground italic">"{exercise.notes}"</p>
                )}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            {!isEditing && (
              <Button
                size="sm"
                variant="outline"
                onClick={() => setIsEditing(true)}
                className="rounded-xl"
              >
                <Edit3 className="w-3 h-3" />
                <span className="sr-only">Edit exercise</span>
              </Button>
            )}
            
            <Button
              size="sm"
              variant={exercise.completed ? "default" : "outline"}
              onClick={handleToggleComplete}
              className={`rounded-xl ${exercise.completed ? 'bg-success hover:bg-success/90' : ''}`}
            >
              <Check className="w-3 h-3" />
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