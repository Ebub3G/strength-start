import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

interface WeekSelectorProps {
  currentWeek: number;
  totalWeeks: number;
  onWeekChange: (week: number) => void;
  isWeekUnlocked: (week: number) => boolean;
}

export const WeekSelector = ({ currentWeek, totalWeeks, onWeekChange, isWeekUnlocked }: WeekSelectorProps) => {
  const canGoBack = currentWeek > 1;
  const canGoForward = currentWeek < totalWeeks && isWeekUnlocked(currentWeek + 1);

  return (
    <div className="flex items-center justify-between bg-card rounded-2xl p-4 border border-border shadow-sm">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onWeekChange(currentWeek - 1)}
        disabled={!canGoBack}
        className="rounded-xl"
      >
        <ChevronLeft className="w-4 h-4" />
        <span className="sr-only">Previous week</span>
      </Button>

      <div className="flex items-center gap-2">
        {Array.from({ length: totalWeeks }, (_, i) => i + 1).map((week) => (
          <button
            key={week}
            onClick={() => isWeekUnlocked(week) && onWeekChange(week)}
            disabled={!isWeekUnlocked(week)}
            className={`
              w-10 h-10 rounded-xl font-semibold text-sm transition-all duration-200
              ${week === currentWeek 
                ? 'bg-primary text-primary-foreground shadow-md scale-110' 
                : isWeekUnlocked(week)
                  ? 'bg-secondary text-secondary-foreground hover:bg-accent hover:scale-105'
                  : 'bg-muted text-muted-foreground cursor-not-allowed opacity-50'
              }
            `}
            aria-label={`Week ${week}${!isWeekUnlocked(week) ? ' (locked)' : ''}`}
          >
            {week}
          </button>
        ))}
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={() => onWeekChange(currentWeek + 1)}
        disabled={!canGoForward}
        className="rounded-xl"
      >
        <ChevronRight className="w-4 h-4" />
        <span className="sr-only">Next week</span>
      </Button>
    </div>
  );
};