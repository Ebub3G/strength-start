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
        className="w-full p-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <Lightbulb className="w-4 h-4 text-accent-foreground" />
          </div>
          <span className="font-medium text-foreground">Weekly Tips & Reminders</span>
        </div>
        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="px-4 pb-4 space-y-3">
          {tips.map((tip, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
              <p className="text-sm text-muted-foreground leading-relaxed">{tip}</p>
            </div>
          ))}
          
          <div className="mt-4 p-3 bg-destructive/10 border border-destructive/20 rounded-xl">
            <p className="text-sm text-destructive font-medium">
              ⚠️ Safety Note: If any movement causes sharp pain, stop immediately. Focus on form over reps.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};