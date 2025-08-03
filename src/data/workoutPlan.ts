import { WeekData, phase1Exercises, phase2Exercises } from '../types/workout';

export const generateWorkoutPlan = (): WeekData[] => {
  const weeks: WeekData[] = [];

  // Phase 1: Weeks 1-4 (Foundation)
  for (let week = 1; week <= 4; week++) {
    weeks.push({
      weekNumber: week,
      phase: 1,
      title: `Week ${week} - Foundation Phase`,
      description: "Building the habit with gentle movements. Focus on form and consistency.",
      days: [
        {
          dateLabel: "Session 1 (Monday)",
          exercises: [...phase1Exercises.map(ex => ({ ...ex, completed: false }))],
          completed: false
        },
        {
          dateLabel: "Session 2 (Wednesday)", 
          exercises: [...phase1Exercises.map(ex => ({ ...ex, completed: false }))],
          completed: false
        },
        {
          dateLabel: "Session 3 (Friday)",
          exercises: [...phase1Exercises.map(ex => ({ ...ex, completed: false }))],
          completed: false
        }
      ],
      completedSessions: 0,
      totalSessions: 3
    });
  }

  // Phase 2: Weeks 5-8 (Progression)
  for (let week = 5; week <= 8; week++) {
    weeks.push({
      weekNumber: week,
      phase: 2,
      title: `Week ${week} - Progression Phase`,
      description: "Stepping up intensity and frequency. You're getting stronger!",
      days: [
        {
          dateLabel: "Session 1 (Monday)",
          exercises: [...phase2Exercises.map(ex => ({ ...ex, completed: false }))],
          completed: false
        },
        {
          dateLabel: "Session 2 (Tuesday)",
          exercises: [...phase2Exercises.map(ex => ({ ...ex, completed: false }))],
          completed: false
        },
        {
          dateLabel: "Session 3 (Thursday)",
          exercises: [...phase2Exercises.map(ex => ({ ...ex, completed: false }))],
          completed: false
        },
        {
          dateLabel: "Session 4 (Friday)",
          exercises: [...phase2Exercises.map(ex => ({ ...ex, completed: false }))],
          completed: false
        }
      ],
      completedSessions: 0,
      totalSessions: 4
    });
  }

  return weeks;
};

export const getTipsForWeek = (week: number): string[] => {
  if (week <= 4) {
    return [
      "🫁 Focus on controlled breathing throughout each movement",
      "🦵 Keep knees tracking over toes during squats",
      "⏸️ Rest if you feel dizzy or overly fatigued",
      "📝 Quality over quantity - perfect form beats more reps",
      "💧 Stay hydrated and listen to your body"
    ];
  } else {
    return [
      "💪 You're stronger now - embrace the progression!",
      "⏱️ Keep rest periods between sets to 60-90 seconds",
      "🔥 Feel free to add 1-2 extra reps if you're feeling strong",
      "🎯 Focus on mind-muscle connection during each exercise",
      "📈 Track your improvements - you've come so far!"
    ];
  }
};