import { WeekData, UserProgress } from '../types/workout';

const STORAGE_KEYS = {
  WORKOUT_DATA: 'strengthstart_workout_data',
  USER_PROGRESS: 'strengthstart_user_progress'
};

export const saveWorkoutData = (weeks: WeekData[]): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.WORKOUT_DATA, JSON.stringify(weeks));
  } catch (error) {
    console.error('Failed to save workout data:', error);
  }
};

export const loadWorkoutData = (): WeekData[] | null => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.WORKOUT_DATA);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Failed to load workout data:', error);
    return null;
  }
};

export const saveUserProgress = (progress: UserProgress): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.USER_PROGRESS, JSON.stringify(progress));
  } catch (error) {
    console.error('Failed to save user progress:', error);
  }
};

export const loadUserProgress = (): UserProgress | null => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.USER_PROGRESS);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Failed to load user progress:', error);
    return null;
  }
};

export const clearAllData = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEYS.WORKOUT_DATA);
    localStorage.removeItem(STORAGE_KEYS.USER_PROGRESS);
  } catch (error) {
    console.error('Failed to clear data:', error);
  }
};