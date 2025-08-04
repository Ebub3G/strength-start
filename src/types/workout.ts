export interface Exercise {
  name: string;
  target: string;
  rest: string;
  actualReps?: string;
  notes?: string;
  completed: boolean;
}

export interface WorkoutSession {
  exercises: Exercise[];
}

export interface WorkoutDay {
  name: string;
  morning?: WorkoutSession;
  evening?: WorkoutSession;
  single?: WorkoutSession;
}

export interface WeekData {
  weekNumber: number;
  phase: 1 | 2;
  title: string;
  description: string;
  days: WorkoutDay[];
}

export interface UserProgress {
  currentWeek: number;
  weeks: {
    [weekNum: string]: {
      [dayName: string]: {
        [session: string]: {
          [exerciseName: string]: {
            completed: boolean;
            actualReps: string;
            notes: string;
          }
        }
      }
    }
  };
  lastActiveDate: string;
}

export const motivationalQuotes = [
  "Progress, not perfection. Every rep counts! 💪",
  "Your body can do it. It's your mind you need to convince.",
  "Small steps lead to big changes. Keep going!",
  "Strength doesn't come from what you can do. It comes from overcoming what you thought you couldn't.",
  "The best workout is the one you actually do.",
  "Your future self will thank you for starting today.",
  "Every champion was once a beginner who refused to give up."
];
