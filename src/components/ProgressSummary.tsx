import { CheckCircle, Target, TrendingUp } from 'lucide-react';
import { WeekData } from '../types/workout';

interface ProgressSummaryProps {
  week: WeekData;
}

export const ProgressSummary = ({ week }: ProgressSummaryProps) => {
  const progressPercentage = (week.completedSessions / week.totalSessions) * 100;
  
  const getSmallWinSuggestion = () => {
    if (week.phase === 1) {
      return [
        "Try holding your wall sit 5 seconds longer",
        "Add 1 extra rep to your wall push-ups",
        "Focus on slower, more controlled movements"
      ];
    } else {
      return [
        "Increase your wall sit to 35-40 seconds",
        "Try 2-3 extra reps when you feel strong",
        "Focus on perfect form with the increased volume"
      ];
    }
  };

  return (
    <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-foreground">{week.title}</h2>
          <p className="text-sm text-muted-foreground">{week.description}</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-primary">
            {week.completedSessions}/{week.totalSessions}
          </div>
          <p className="text-xs text-muted-foreground">Sessions Complete</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-muted-foreground">Week Progress</span>
          <span className="font-medium text-foreground">{Math.round(progressPercentage)}%</span>
        </div>
        <div className="w-full bg-secondary rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-primary to-purple-dark h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Small Wins Section */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Small Wins This Week</span>
        </div>
        <div className="space-y-2">
          {getSmallWinSuggestion().map((suggestion, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <Target className="w-3 h-3 text-muted-foreground" />
              <span className="text-muted-foreground">{suggestion}</span>
            </div>
          ))}
        </div>
      </div>

      {progressPercentage === 100 && (
        <div className="mt-4 p-3 bg-success/10 border border-success/20 rounded-xl">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-success" />
            <span className="text-sm font-medium text-success">Week Complete! 🎉</span>
          </div>
        </div>
      )}
    </div>
  );
};