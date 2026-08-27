"use client";

import Meal, { MealItemData } from "./Meal";
import styles from "./mealList.module.css";

const DEFAULT_DAYS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

interface MealListProps {
  title: string;
  list: MealItemData[];
  days?: string[];
  selectedDayIndex?: number | null;
}

export default function MealList({
  title,
  list,
  days = DEFAULT_DAYS,
  selectedDayIndex = null,
}: MealListProps) {
  const cleanType = title.replace(/[^\p{L}\s]/gu, "").trim();

  return (
    <section className={styles.mealList} aria-label={title}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.itemsWrapper}>
        {days.map((day, index) => {
          if (selectedDayIndex !== null && selectedDayIndex !== index) {
            return null;
          }
          const initialDish =
            list && list.length > 0
              ? list[(index * 5 + 3) % list.length]?.content || ""
              : "";
          return (
            <Meal
              key={`${title}-${index}`}
              list={list}
              day={day}
              mealType={cleanType}
              initialMeal={initialDish}
            >
              {initialDish}
            </Meal>
          );
        })}
      </div>
    </section>
  );
}
