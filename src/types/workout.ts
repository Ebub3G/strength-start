export interface Exercise {
  name: string;
  target: string;
  actualReps?: string;
  notes?: string;
  completed: boolean;
}

export interface WorkoutDay {
  dateLabel: string;
  exercises: Exercise[];
  completed: boolean;
}

export interface WeekData {
  weekNumber: number;
  phase: 1 | 2;
  title: string;
  description: string;
  days: WorkoutDay[];
  completedSessions: number;
  totalSessions: number;
}

export interface UserProgress {
  currentWeek: number;
  completedWeeks: number[];
  smallWins: string[];
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

export const phase1Exercises: Exercise[] = [
  { name: "Wall Push-Ups", target: "2 sets × 8-10 reps", completed: false },
  { name: "Half Squats (support if needed)", target: "2 sets × 10 reps", completed: false },
  { name: "Glute Bridges", target: "2 sets × 10 reps", completed: false },
  { name: "Standing March (slow high knees)", target: "2 sets × 30 seconds", completed: false },
  { name: "Wall Sit", target: "2 sets × 15-20 seconds", completed: false },
  { name: "Bird Dogs", target: "2 sets × 8 per side", completed: false },
  { name: "Shoulder Rolls & Stretch", target: "5 minutes cooldown", completed: false }
];

export const phase2Exercises: Exercise[] = [
  { name: "Incline Push-Ups (table)", target: "3 sets × 8-10 reps", completed: false },
  { name: "Chair Squats", target: "3 sets × 10-12 reps", completed: false },
  { name: "Glute Bridges (with 1s pause)", target: "3 sets × 12 reps", completed: false },
  { name: "Step Taps (low step)", target: "3 sets × 20 steps", completed: false },
  { name: "Wall Sit", target: "3 sets × 20-30 seconds", completed: false },
  { name: "Bird Dogs", target: "3 sets × 10 per side", completed: false },
  { name: "Seated Knee Lifts (core)", target: "3 sets × 10 reps", completed: false }
];