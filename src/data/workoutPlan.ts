import { WeekData } from '../types/workout';

export const workoutPlan: WeekData[] = [
  // WEEK 1
  {
    weekNumber: 1,
    phase: 1,
    title: "Week 1 - Foundation Phase",
    description: "Learn form, build baseline strength, moderate intensity",
    days: [
      {
        name: "Push (Chest, Shoulders, Triceps)",
        morning: {
          exercises: [
            { name: "Incline Push-Ups (hands on table)", target: "3×10", rest: "60s", completed: false, actualReps: "", notes: "" },
            { name: "Wall Shoulder Press", target: "3×8", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Triceps Dips (chair)", target: "3×8", rest: "45s", completed: false, actualReps: "", notes: "" }
          ]
        },
        evening: {
          exercises: [
            { name: "Pike Push-Ups", target: "2×6", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Wall Push-Ups (burnout)", target: "1×Max", rest: "60s", completed: false, actualReps: "", notes: "" },
            { name: "Shoulder Rolls + Doorway Chest Stretch", target: "3×20s each", rest: "30s", completed: false, actualReps: "", notes: "" }
          ]
        }
      },
      {
        name: "Lower Body (Legs & Glutes)",
        morning: {
          exercises: [
            { name: "Squats (controlled)", target: "3×12", rest: "60s", completed: false, actualReps: "", notes: "" },
            { name: "Standing Calf Raises", target: "3×15", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Side-Lying Leg Lifts", target: "3×12 per side", rest: "45s", completed: false, actualReps: "", notes: "" }
          ]
        },
        evening: {
          exercises: [
            { name: "Bulgarian Split Squats", target: "2×8 per leg", rest: "60s", completed: false, actualReps: "", notes: "" },
            { name: "Glute Bridges", target: "3×10", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Hamstring Stretch + Quad Stretch", target: "3×20s each", rest: "30s", completed: false, actualReps: "", notes: "" }
          ]
        }
      },
      {
        name: "Active Recovery & Stretching",
        single: {
          exercises: [
            { name: "Brisk walk or slow jog", target: "10-15 min", rest: "N/A", completed: false, actualReps: "", notes: "" },
            { name: "Cat-Cow Stretch", target: "3×8", rest: "30s", completed: false, actualReps: "", notes: "" },
            { name: "Hip Flexor Stretch", target: "3×20s per side", rest: "30s", completed: false, actualReps: "", notes: "" },
            { name: "Shoulder Opener Stretch", target: "3×20s", rest: "30s", completed: false, actualReps: "", notes: "" },
            { name: "Child's Pose", target: "3×20s", rest: "30s", completed: false, actualReps: "", notes: "" }
          ]
        }
      },
      {
        name: "Pull (Back & Biceps)",
        morning: {
          exercises: [
            { name: "Backpack Rows (load with books)", target: "3×10", rest: "60s", completed: false, actualReps: "", notes: "" },
            { name: "Towel Rows (door anchor)", target: "3×8", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Reverse Snow Angels", target: "3×8", rest: "45s", completed: false, actualReps: "", notes: "" }
          ]
        },
        evening: {
          exercises: [
            { name: "Backpack Bicep Curls", target: "3×10", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Doorframe Isometric Pull", target: "3×8s hold", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Lat Stretch + Forearm Stretch", target: "3×20s each", rest: "30s", completed: false, actualReps: "", notes: "" }
          ]
        }
      },
      {
        name: "Core & Stability",
        morning: {
          exercises: [
            { name: "Plank", target: "3×20s", rest: "60s", completed: false, actualReps: "", notes: "" },
            { name: "Dead Bug", target: "3×8 per side", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Seated Knee Lifts", target: "3×10", rest: "45s", completed: false, actualReps: "", notes: "" }
          ]
        },
        evening: {
          exercises: [
            { name: "Side Plank", target: "2×15s each side", rest: "60s", completed: false, actualReps: "", notes: "" },
            { name: "Bird Dogs", target: "3×8 per side", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Standing Side Bend Stretch", target: "3×20s each", rest: "30s", completed: false, actualReps: "", notes: "" }
          ]
        }
      },
      {
        name: "Full Body Conditioning",
        morning: {
          exercises: [
            { name: "Push-Up → Squat → Shoulder Tap combo", target: "3×6", rest: "75s", completed: false, actualReps: "", notes: "" },
            { name: "Step Taps", target: "3×20 steps", rest: "60s", completed: false, actualReps: "", notes: "" },
            { name: "High Knees (slow pace)", target: "3×20s", rest: "45s", completed: false, actualReps: "", notes: "" }
          ]
        },
        evening: {
          exercises: [
            { name: "Lunge Walks", target: "3×12 steps", rest: "60s", completed: false, actualReps: "", notes: "" },
            { name: "Mountain Climbers", target: "3×15s", rest: "60s", completed: false, actualReps: "", notes: "" },
            { name: "Forward Fold Stretch", target: "3×20s", rest: "30s", completed: false, actualReps: "", notes: "" }
          ]
        }
      },
      {
        name: "Mobility & Recovery",
        single: {
          exercises: [
            { name: "Foam roll (or massage with bottle)", target: "5 min", rest: "N/A", completed: false, actualReps: "", notes: "" },
            { name: "Ankle Circles", target: "3×10 per side", rest: "30s", completed: false, actualReps: "", notes: "" },
            { name: "Shoulder Mobility Drills", target: "3×10", rest: "30s", completed: false, actualReps: "", notes: "" },
            { name: "Light yoga flow", target: "10 min", rest: "N/A", completed: false, actualReps: "", notes: "" }
          ]
        }
      }
    ]
  },
  // WEEK 2 (Phase 1 progression)
  {
    weekNumber: 2,
    phase: 1,
    title: "Week 2 - Foundation Phase",
    description: "Learn form, build baseline strength, moderate intensity",
    days: [
      {
        name: "Push (Chest, Shoulders, Triceps)",
        morning: {
          exercises: [
            { name: "Incline Push-Ups (hands on table)", target: "3×12", rest: "60s", completed: false, actualReps: "", notes: "" },
            { name: "Wall Shoulder Press", target: "3×10", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Triceps Dips (chair)", target: "3×10", rest: "45s", completed: false, actualReps: "", notes: "" }
          ]
        },
        evening: {
          exercises: [
            { name: "Pike Push-Ups", target: "2×8", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Wall Push-Ups (burnout)", target: "1×Max", rest: "60s", completed: false, actualReps: "", notes: "" },
            { name: "Shoulder Rolls + Doorway Chest Stretch", target: "3×25s each", rest: "30s", completed: false, actualReps: "", notes: "" }
          ]
        }
      },
      {
        name: "Lower Body (Legs & Glutes)",
        morning: {
          exercises: [
            { name: "Squats (controlled)", target: "3×15", rest: "60s", completed: false, actualReps: "", notes: "" },
            { name: "Standing Calf Raises", target: "3×18", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Side-Lying Leg Lifts", target: "3×15 per side", rest: "45s", completed: false, actualReps: "", notes: "" }
          ]
        },
        evening: {
          exercises: [
            { name: "Bulgarian Split Squats", target: "2×10 per leg", rest: "60s", completed: false, actualReps: "", notes: "" },
            { name: "Glute Bridges", target: "3×12", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Hamstring Stretch + Quad Stretch", target: "3×25s each", rest: "30s", completed: false, actualReps: "", notes: "" }
          ]
        }
      },
      {
        name: "Active Recovery & Stretching",
        single: {
          exercises: [
            { name: "Brisk walk or slow jog", target: "12-17 min", rest: "N/A", completed: false, actualReps: "", notes: "" },
            { name: "Cat-Cow Stretch", target: "3×10", rest: "30s", completed: false, actualReps: "", notes: "" },
            { name: "Hip Flexor Stretch", target: "3×25s per side", rest: "30s", completed: false, actualReps: "", notes: "" },
            { name: "Shoulder Opener Stretch", target: "3×25s", rest: "30s", completed: false, actualReps: "", notes: "" },
            { name: "Child's Pose", target: "3×25s", rest: "30s", completed: false, actualReps: "", notes: "" }
          ]
        }
      },
      {
        name: "Pull (Back & Biceps)",
        morning: {
          exercises: [
            { name: "Backpack Rows (load with books)", target: "3×12", rest: "60s", completed: false, actualReps: "", notes: "" },
            { name: "Towel Rows (door anchor)", target: "3×10", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Reverse Snow Angels", target: "3×10", rest: "45s", completed: false, actualReps: "", notes: "" }
          ]
        },
        evening: {
          exercises: [
            { name: "Backpack Bicep Curls", target: "3×12", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Doorframe Isometric Pull", target: "3×10s hold", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Lat Stretch + Forearm Stretch", target: "3×25s each", rest: "30s", completed: false, actualReps: "", notes: "" }
          ]
        }
      },
      {
        name: "Core & Stability",
        morning: {
          exercises: [
            { name: "Plank", target: "3×25s", rest: "60s", completed: false, actualReps: "", notes: "" },
            { name: "Dead Bug", target: "3×10 per side", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Seated Knee Lifts", target: "3×12", rest: "45s", completed: false, actualReps: "", notes: "" }
          ]
        },
        evening: {
          exercises: [
            { name: "Side Plank", target: "2×20s each side", rest: "60s", completed: false, actualReps: "", notes: "" },
            { name: "Bird Dogs", target: "3×10 per side", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Standing Side Bend Stretch", target: "3×25s each", rest: "30s", completed: false, actualReps: "", notes: "" }
          ]
        }
      },
      {
        name: "Full Body Conditioning",
        morning: {
          exercises: [
            { name: "Push-Up → Squat → Shoulder Tap combo", target: "3×8", rest: "75s", completed: false, actualReps: "", notes: "" },
            { name: "Step Taps", target: "3×25 steps", rest: "60s", completed: false, actualReps: "", notes: "" },
            { name: "High Knees (slow pace)", target: "3×25s", rest: "45s", completed: false, actualReps: "", notes: "" }
          ]
        },
        evening: {
          exercises: [
            { name: "Lunge Walks", target: "3×15 steps", rest: "60s", completed: false, actualReps: "", notes: "" },
            { name: "Mountain Climbers", target: "3×20s", rest: "60s", completed: false, actualReps: "", notes: "" },
            { name: "Forward Fold Stretch", target: "3×25s", rest: "30s", completed: false, actualReps: "", notes: "" }
          ]
        }
      },
      {
        name: "Mobility & Recovery",
        single: {
          exercises: [
            { name: "Foam roll (or massage with bottle)", target: "6 min", rest: "N/A", completed: false, actualReps: "", notes: "" },
            { name: "Ankle Circles", target: "3×12 per side", rest: "30s", completed: false, actualReps: "", notes: "" },
            { name: "Shoulder Mobility Drills", target: "3×12", rest: "30s", completed: false, actualReps: "", notes: "" },
            { name: "Light yoga flow", target: "12 min", rest: "N/A", completed: false, actualReps: "", notes: "" }
          ]
        }
      }
    ]
  },
  // WEEK 3 (Phase 1 progression)
  {
    weekNumber: 3,
    phase: 1,
    title: "Week 3 - Foundation Phase",
    description: "Learn form, build baseline strength, moderate intensity",
    days: [
      {
        name: "Push (Chest, Shoulders, Triceps)",
        morning: {
          exercises: [
            { name: "Incline Push-Ups (hands on table)", target: "3×15", rest: "60s", completed: false, actualReps: "", notes: "" },
            { name: "Wall Shoulder Press", target: "3×12", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Triceps Dips (chair)", target: "3×12", rest: "45s", completed: false, actualReps: "", notes: "" }
          ]
        },
        evening: {
          exercises: [
            { name: "Pike Push-Ups", target: "2×10", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Wall Push-Ups (burnout)", target: "1×Max", rest: "60s", completed: false, actualReps: "", notes: "" },
            { name: "Shoulder Rolls + Doorway Chest Stretch", target: "3×30s each", rest: "30s", completed: false, actualReps: "", notes: "" }
          ]
        }
      },
      {
        name: "Lower Body (Legs & Glutes)",
        morning: {
          exercises: [
            { name: "Squats (controlled)", target: "3×18", rest: "60s", completed: false, actualReps: "", notes: "" },
            { name: "Standing Calf Raises", target: "3×20", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Side-Lying Leg Lifts", target: "3×18 per side", rest: "45s", completed: false, actualReps: "", notes: "" }
          ]
        },
        evening: {
          exercises: [
            { name: "Bulgarian Split Squats", target: "2×12 per leg", rest: "60s", completed: false, actualReps: "", notes: "" },
            { name: "Glute Bridges", target: "3×15", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Hamstring Stretch + Quad Stretch", target: "3×30s each", rest: "30s", completed: false, actualReps: "", notes: "" }
          ]
        }
      },
      {
        name: "Active Recovery & Stretching",
        single: {
          exercises: [
            { name: "Brisk walk or slow jog", target: "15-20 min", rest: "N/A", completed: false, actualReps: "", notes: "" },
            { name: "Cat-Cow Stretch", target: "3×12", rest: "30s", completed: false, actualReps: "", notes: "" },
            { name: "Hip Flexor Stretch", target: "3×30s per side", rest: "30s", completed: false, actualReps: "", notes: "" },
            { name: "Shoulder Opener Stretch", target: "3×30s", rest: "30s", completed: false, actualReps: "", notes: "" },
            { name: "Child's Pose", target: "3×30s", rest: "30s", completed: false, actualReps: "", notes: "" }
          ]
        }
      },
      {
        name: "Pull (Back & Biceps)",
        morning: {
          exercises: [
            { name: "Backpack Rows (load with books)", target: "3×15", rest: "60s", completed: false, actualReps: "", notes: "" },
            { name: "Towel Rows (door anchor)", target: "3×12", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Reverse Snow Angels", target: "3×12", rest: "45s", completed: false, actualReps: "", notes: "" }
          ]
        },
        evening: {
          exercises: [
            { name: "Backpack Bicep Curls", target: "3×15", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Doorframe Isometric Pull", target: "3×12s hold", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Lat Stretch + Forearm Stretch", target: "3×30s each", rest: "30s", completed: false, actualReps: "", notes: "" }
          ]
        }
      },
      {
        name: "Core & Stability",
        morning: {
          exercises: [
            { name: "Plank", target: "3×30s", rest: "60s", completed: false, actualReps: "", notes: "" },
            { name: "Dead Bug", target: "3×12 per side", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Seated Knee Lifts", target: "3×15", rest: "45s", completed: false, actualReps: "", notes: "" }
          ]
        },
        evening: {
          exercises: [
            { name: "Side Plank", target: "2×25s each side", rest: "60s", completed: false, actualReps: "", notes: "" },
            { name: "Bird Dogs", target: "3×12 per side", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Standing Side Bend Stretch", target: "3×30s each", rest: "30s", completed: false, actualReps: "", notes: "" }
          ]
        }
      },
      {
        name: "Full Body Conditioning",
        morning: {
          exercises: [
            { name: "Push-Up → Squat → Shoulder Tap combo", target: "3×10", rest: "75s", completed: false, actualReps: "", notes: "" },
            { name: "Step Taps", target: "3×30 steps", rest: "60s", completed: false, actualReps: "", notes: "" },
            { name: "High Knees (slow pace)", target: "3×30s", rest: "45s", completed: false, actualReps: "", notes: "" }
          ]
        },
        evening: {
          exercises: [
            { name: "Lunge Walks", target: "3×18 steps", rest: "60s", completed: false, actualReps: "", notes: "" },
            { name: "Mountain Climbers", target: "3×25s", rest: "60s", completed: false, actualReps: "", notes: "" },
            { name: "Forward Fold Stretch", target: "3×30s", rest: "30s", completed: false, actualReps: "", notes: "" }
          ]
        }
      },
      {
        name: "Mobility & Recovery",
        single: {
          exercises: [
            { name: "Foam roll (or massage with bottle)", target: "7 min", rest: "N/A", completed: false, actualReps: "", notes: "" },
            { name: "Ankle Circles", target: "3×15 per side", rest: "30s", completed: false, actualReps: "", notes: "" },
            { name: "Shoulder Mobility Drills", target: "3×15", rest: "30s", completed: false, actualReps: "", notes: "" },
            { name: "Light yoga flow", target: "15 min", rest: "N/A", completed: false, actualReps: "", notes: "" }
          ]
        }
      }
    ]
  },
  // WEEK 4 (Phase 2 - Progressive overload begins)
  {
    weekNumber: 4,
    phase: 2,
    title: "Week 4 - Progressive Overload Phase",
    description: "Increase intensity - add reps, holds, and finishers",
    days: [
      {
        name: "Push (Chest, Shoulders, Triceps)",
        morning: {
          exercises: [
            { name: "Regular Push-Ups", target: "3×8", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Pike Shoulder Press", target: "3×8", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Triceps Dips (chair)", target: "3×12", rest: "45s", completed: false, actualReps: "", notes: "" }
          ]
        },
        evening: {
          exercises: [
            { name: "Pike Push-Ups", target: "2×10", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Wall Push-Ups (burnout)", target: "1×Max", rest: "60s", completed: false, actualReps: "", notes: "" },
            { name: "Shoulder Rolls + Doorway Chest Stretch", target: "3×30s each", rest: "30s", completed: false, actualReps: "", notes: "" },
            { name: "Push-Up Finisher", target: "1 min burnout", rest: "N/A", completed: false, actualReps: "", notes: "" }
          ]
        }
      },
      {
        name: "Lower Body (Legs & Glutes)",
        morning: {
          exercises: [
            { name: "Full Depth Squats", target: "3×18", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Standing Calf Raises", target: "3×22", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Side-Lying Leg Lifts", target: "3×18 per side", rest: "45s", completed: false, actualReps: "", notes: "" }
          ]
        },
        evening: {
          exercises: [
            { name: "Bulgarian Split Squats", target: "2×12 per leg", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Glute Bridges", target: "3×15", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Hamstring Stretch + Quad Stretch", target: "3×30s each", rest: "30s", completed: false, actualReps: "", notes: "" },
            { name: "Jump Squats Finisher", target: "1 min", rest: "N/A", completed: false, actualReps: "", notes: "" }
          ]
        }
      },
      {
        name: "Active Recovery & Stretching",
        single: {
          exercises: [
            { name: "Brisk walk or slow jog", target: "15-20 min", rest: "N/A", completed: false, actualReps: "", notes: "" },
            { name: "Cat-Cow Stretch", target: "3×12", rest: "30s", completed: false, actualReps: "", notes: "" },
            { name: "Hip Flexor Stretch", target: "3×30s per side", rest: "30s", completed: false, actualReps: "", notes: "" },
            { name: "Shoulder Opener Stretch", target: "3×30s", rest: "30s", completed: false, actualReps: "", notes: "" },
            { name: "Child's Pose", target: "3×30s", rest: "30s", completed: false, actualReps: "", notes: "" }
          ]
        }
      },
      {
        name: "Pull (Back & Biceps)",
        morning: {
          exercises: [
            { name: "Backpack Rows (load with books)", target: "3×15", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Towel Rows (door anchor)", target: "3×12", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Reverse Snow Angels", target: "3×12", rest: "45s", completed: false, actualReps: "", notes: "" }
          ]
        },
        evening: {
          exercises: [
            { name: "Backpack Bicep Curls", target: "3×15", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Doorframe Isometric Pull", target: "3×15s hold", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Lat Stretch + Forearm Stretch", target: "3×30s each", rest: "30s", completed: false, actualReps: "", notes: "" },
            { name: "Mountain Climber Sprint", target: "1 min", rest: "N/A", completed: false, actualReps: "", notes: "" }
          ]
        }
      },
      {
        name: "Core & Stability",
        morning: {
          exercises: [
            { name: "Plank", target: "3×35s", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Dead Bug", target: "3×12 per side", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Seated Knee Lifts", target: "3×15", rest: "45s", completed: false, actualReps: "", notes: "" }
          ]
        },
        evening: {
          exercises: [
            { name: "Side Plank", target: "2×30s each side", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Bird Dogs", target: "3×12 per side", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Standing Side Bend Stretch", target: "3×30s each", rest: "30s", completed: false, actualReps: "", notes: "" },
            { name: "Burpee Finisher", target: "1 min", rest: "N/A", completed: false, actualReps: "", notes: "" }
          ]
        }
      },
      {
        name: "Full Body Conditioning",
        morning: {
          exercises: [
            { name: "Push-Up → Squat → Shoulder Tap combo", target: "3×10", rest: "60s", completed: false, actualReps: "", notes: "" },
            { name: "Step-Ups (chair or sturdy box)", target: "3×20 steps", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "High Knees (slow pace)", target: "3×30s", rest: "45s", completed: false, actualReps: "", notes: "" }
          ]
        },
        evening: {
          exercises: [
            { name: "Lunge Walks", target: "3×20 steps", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Mountain Climbers", target: "3×30s", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Forward Fold Stretch", target: "3×30s", rest: "30s", completed: false, actualReps: "", notes: "" },
            { name: "Full Body Finisher", target: "1 min mixed", rest: "N/A", completed: false, actualReps: "", notes: "" }
          ]
        }
      },
      {
        name: "Mobility & Recovery",
        single: {
          exercises: [
            { name: "Foam roll (or massage with bottle)", target: "8 min", rest: "N/A", completed: false, actualReps: "", notes: "" },
            { name: "Ankle Circles", target: "3×15 per side", rest: "30s", completed: false, actualReps: "", notes: "" },
            { name: "Shoulder Mobility Drills", target: "3×15", rest: "30s", completed: false, actualReps: "", notes: "" },
            { name: "Light yoga flow", target: "15 min", rest: "N/A", completed: false, actualReps: "", notes: "" }
          ]
        }
      }
    ]
  },
  // WEEK 5 (Phase 2 progression)
  {
    weekNumber: 5,
    phase: 2,
    title: "Week 5 - Progressive Overload Phase",
    description: "Higher intensity - increased reps and shorter rest periods",
    days: [
      {
        name: "Push (Chest, Shoulders, Triceps)",
        morning: {
          exercises: [
            { name: "Regular Push-Ups", target: "3×10", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Pike Shoulder Press", target: "3×10", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Triceps Dips (chair)", target: "3×15", rest: "45s", completed: false, actualReps: "", notes: "" }
          ]
        },
        evening: {
          exercises: [
            { name: "Pike Push-Ups", target: "2×12", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Wall Push-Ups (burnout)", target: "1×Max", rest: "60s", completed: false, actualReps: "", notes: "" },
            { name: "Shoulder Rolls + Doorway Chest Stretch", target: "3×30s each", rest: "30s", completed: false, actualReps: "", notes: "" },
            { name: "Push-Up Finisher", target: "1 min burnout", rest: "N/A", completed: false, actualReps: "", notes: "" }
          ]
        }
      },
      {
        name: "Lower Body (Legs & Glutes)",
        morning: {
          exercises: [
            { name: "Full Depth Squats", target: "3×20", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Standing Calf Raises", target: "3×25", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Side-Lying Leg Lifts", target: "3×20 per side", rest: "45s", completed: false, actualReps: "", notes: "" }
          ]
        },
        evening: {
          exercises: [
            { name: "Bulgarian Split Squats", target: "2×15 per leg", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Glute Bridges", target: "3×18", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Hamstring Stretch + Quad Stretch", target: "3×30s each", rest: "30s", completed: false, actualReps: "", notes: "" },
            { name: "Jump Squats Finisher", target: "1 min", rest: "N/A", completed: false, actualReps: "", notes: "" }
          ]
        }
      },
      {
        name: "Active Recovery & Stretching",
        single: {
          exercises: [
            { name: "Brisk walk or slow jog", target: "18-22 min", rest: "N/A", completed: false, actualReps: "", notes: "" },
            { name: "Cat-Cow Stretch", target: "3×15", rest: "30s", completed: false, actualReps: "", notes: "" },
            { name: "Hip Flexor Stretch", target: "3×35s per side", rest: "30s", completed: false, actualReps: "", notes: "" },
            { name: "Shoulder Opener Stretch", target: "3×35s", rest: "30s", completed: false, actualReps: "", notes: "" },
            { name: "Child's Pose", target: "3×35s", rest: "30s", completed: false, actualReps: "", notes: "" }
          ]
        }
      },
      {
        name: "Pull (Back & Biceps)",
        morning: {
          exercises: [
            { name: "Backpack Rows (load with books)", target: "3×18", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Towel Rows (door anchor)", target: "3×15", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Reverse Snow Angels", target: "3×15", rest: "45s", completed: false, actualReps: "", notes: "" }
          ]
        },
        evening: {
          exercises: [
            { name: "Backpack Bicep Curls", target: "3×18", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Doorframe Isometric Pull", target: "3×18s hold", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Lat Stretch + Forearm Stretch", target: "3×30s each", rest: "30s", completed: false, actualReps: "", notes: "" },
            { name: "Mountain Climber Sprint", target: "1 min", rest: "N/A", completed: false, actualReps: "", notes: "" }
          ]
        }
      },
      {
        name: "Core & Stability",
        morning: {
          exercises: [
            { name: "Plank", target: "3×40s", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Dead Bug", target: "3×15 per side", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Seated Knee Lifts", target: "3×18", rest: "45s", completed: false, actualReps: "", notes: "" }
          ]
        },
        evening: {
          exercises: [
            { name: "Side Plank", target: "2×35s each side", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Bird Dogs", target: "3×15 per side", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Standing Side Bend Stretch", target: "3×30s each", rest: "30s", completed: false, actualReps: "", notes: "" },
            { name: "Burpee Finisher", target: "1 min", rest: "N/A", completed: false, actualReps: "", notes: "" }
          ]
        }
      },
      {
        name: "Full Body Conditioning",
        morning: {
          exercises: [
            { name: "Push-Up → Squat → Shoulder Tap combo", target: "3×12", rest: "60s", completed: false, actualReps: "", notes: "" },
            { name: "Step-Ups (chair or sturdy box)", target: "3×25 steps", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "High Knees (slow pace)", target: "3×35s", rest: "45s", completed: false, actualReps: "", notes: "" }
          ]
        },
        evening: {
          exercises: [
            { name: "Lunge Walks", target: "3×22 steps", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Mountain Climbers", target: "3×35s", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Forward Fold Stretch", target: "3×30s", rest: "30s", completed: false, actualReps: "", notes: "" },
            { name: "Full Body Finisher", target: "1 min mixed", rest: "N/A", completed: false, actualReps: "", notes: "" }
          ]
        }
      },
      {
        name: "Mobility & Recovery",
        single: {
          exercises: [
            { name: "Foam roll (or massage with bottle)", target: "10 min", rest: "N/A", completed: false, actualReps: "", notes: "" },
            { name: "Ankle Circles", target: "3×18 per side", rest: "30s", completed: false, actualReps: "", notes: "" },
            { name: "Shoulder Mobility Drills", target: "3×18", rest: "30s", completed: false, actualReps: "", notes: "" },
            { name: "Light yoga flow", target: "18 min", rest: "N/A", completed: false, actualReps: "", notes: "" }
          ]
        }
      }
    ]
  },
  // WEEK 6 (Phase 2 peak)
  {
    weekNumber: 6,
    phase: 2,
    title: "Week 6 - Progressive Overload Phase",
    description: "Peak intensity - maximum reps and advanced variations",
    days: [
      {
        name: "Push (Chest, Shoulders, Triceps)",
        morning: {
          exercises: [
            { name: "Regular Push-Ups", target: "3×12", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Pike Shoulder Press", target: "3×12", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Triceps Dips (chair)", target: "3×18", rest: "45s", completed: false, actualReps: "", notes: "" }
          ]
        },
        evening: {
          exercises: [
            { name: "Pike Push-Ups", target: "2×15", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Wall Push-Ups (burnout)", target: "1×Max", rest: "60s", completed: false, actualReps: "", notes: "" },
            { name: "Shoulder Rolls + Doorway Chest Stretch", target: "3×30s each", rest: "30s", completed: false, actualReps: "", notes: "" },
            { name: "Push-Up Finisher", target: "1 min burnout", rest: "N/A", completed: false, actualReps: "", notes: "" }
          ]
        }
      },
      {
        name: "Lower Body (Legs & Glutes)",
        morning: {
          exercises: [
            { name: "Full Depth Squats", target: "3×25", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Standing Calf Raises", target: "3×30", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Side-Lying Leg Lifts", target: "3×25 per side", rest: "45s", completed: false, actualReps: "", notes: "" }
          ]
        },
        evening: {
          exercises: [
            { name: "Bulgarian Split Squats", target: "2×18 per leg", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Glute Bridges", target: "3×20", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Hamstring Stretch + Quad Stretch", target: "3×30s each", rest: "30s", completed: false, actualReps: "", notes: "" },
            { name: "Jump Squats Finisher", target: "1 min", rest: "N/A", completed: false, actualReps: "", notes: "" }
          ]
        }
      },
      {
        name: "Active Recovery & Stretching",
        single: {
          exercises: [
            { name: "Brisk walk or slow jog", target: "20-25 min", rest: "N/A", completed: false, actualReps: "", notes: "" },
            { name: "Cat-Cow Stretch", target: "3×18", rest: "30s", completed: false, actualReps: "", notes: "" },
            { name: "Hip Flexor Stretch", target: "3×40s per side", rest: "30s", completed: false, actualReps: "", notes: "" },
            { name: "Shoulder Opener Stretch", target: "3×40s", rest: "30s", completed: false, actualReps: "", notes: "" },
            { name: "Child's Pose", target: "3×40s", rest: "30s", completed: false, actualReps: "", notes: "" }
          ]
        }
      },
      {
        name: "Pull (Back & Biceps)",
        morning: {
          exercises: [
            { name: "Backpack Rows (load with books)", target: "3×20", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Towel Rows (door anchor)", target: "3×18", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Reverse Snow Angels", target: "3×18", rest: "45s", completed: false, actualReps: "", notes: "" }
          ]
        },
        evening: {
          exercises: [
            { name: "Backpack Bicep Curls", target: "3×20", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Doorframe Isometric Pull", target: "3×20s hold", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Lat Stretch + Forearm Stretch", target: "3×30s each", rest: "30s", completed: false, actualReps: "", notes: "" },
            { name: "Mountain Climber Sprint", target: "1 min", rest: "N/A", completed: false, actualReps: "", notes: "" }
          ]
        }
      },
      {
        name: "Core & Stability",
        morning: {
          exercises: [
            { name: "Plank", target: "3×45s", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Dead Bug", target: "3×18 per side", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Seated Knee Lifts", target: "3×20", rest: "45s", completed: false, actualReps: "", notes: "" }
          ]
        },
        evening: {
          exercises: [
            { name: "Side Plank", target: "2×40s each side", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Bird Dogs", target: "3×18 per side", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Standing Side Bend Stretch", target: "3×30s each", rest: "30s", completed: false, actualReps: "", notes: "" },
            { name: "Burpee Finisher", target: "1 min", rest: "N/A", completed: false, actualReps: "", notes: "" }
          ]
        }
      },
      {
        name: "Full Body Conditioning",
        morning: {
          exercises: [
            { name: "Push-Up → Squat → Shoulder Tap combo", target: "3×15", rest: "60s", completed: false, actualReps: "", notes: "" },
            { name: "Step-Ups (chair or sturdy box)", target: "3×30 steps", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "High Knees (slow pace)", target: "3×40s", rest: "45s", completed: false, actualReps: "", notes: "" }
          ]
        },
        evening: {
          exercises: [
            { name: "Lunge Walks", target: "3×25 steps", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Mountain Climbers", target: "3×40s", rest: "45s", completed: false, actualReps: "", notes: "" },
            { name: "Forward Fold Stretch", target: "3×30s", rest: "30s", completed: false, actualReps: "", notes: "" },
            { name: "Full Body Finisher", target: "1 min mixed", rest: "N/A", completed: false, actualReps: "", notes: "" }
          ]
        }
      },
      {
        name: "Mobility & Recovery",
        single: {
          exercises: [
            { name: "Foam roll (or massage with bottle)", target: "12 min", rest: "N/A", completed: false, actualReps: "", notes: "" },
            { name: "Ankle Circles", target: "3×20 per side", rest: "30s", completed: false, actualReps: "", notes: "" },
            { name: "Shoulder Mobility Drills", target: "3×20", rest: "30s", completed: false, actualReps: "", notes: "" },
            { name: "Light yoga flow", target: "20 min", rest: "N/A", completed: false, actualReps: "", notes: "" }
          ]
        }
      }
    ]
  }
];

export const getTipsForWeek = (week: number): string[] => {
  if (week <= 3) {
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
      "⏱️ Keep rest periods between sets to 45-60 seconds",
      "🔥 Feel free to add 1-2 extra reps if you're feeling strong",
      "🎯 Focus on mind-muscle connection during each exercise",
      "📈 Track your improvements - you've come so far!"
    ];
  }
};