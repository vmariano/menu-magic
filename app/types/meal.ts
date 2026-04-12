export interface Meal {
  id: number;
  name: string;
  recipe: string;
  ingredients: string[];
}

export interface WeeklyMeal {
  day: string;
  meal: Meal;
}
