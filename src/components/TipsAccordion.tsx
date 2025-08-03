import { useState } from 'react';
import { ChevronDown, Lightbulb } from 'lucide-react';
import { getTipsForWeek } from '../data/workoutPlan';

interface TipsAccordionProps {
  week: number;
}

export const TipsAccordion = ({ week }: TipsAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const tips = getTipsForWeek(week);

  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-3 sm:p-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
            <Lightbulb className="w-3 h-3 sm:w-4 sm:h-4 text-accent-foreground" />
          </div>
          <span className="font-medium text-foreground text-sm sm:text-base truncate">Weekly Tips & Reminders</span>
        </div>
        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="px-3 sm:px-4 pb-3 sm:pb-4 space-y-2 sm:space-y-3">
          <div className="grid gap-2 sm:gap-3">
            {tips.map((tip, index) => (
              <div key={index} className="flex items-start gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-3 sm:mt-4 p-3 bg-destructive/10 border border-destructive/20 rounded-xl">
            <p className="text-xs sm:text-sm text-destructive font-medium leading-relaxed">
              ⚠️ Safety Note: If any movement causes sharp pain, stop immediately. Focus on form over reps.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};