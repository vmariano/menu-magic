"use client";

import { useState } from "react";
import styles from "./meal.module.css";

export interface MealItemData {
  id: number;
  content: string;
}

interface MealProps {
  children?: React.ReactNode;
  initialMeal?: string;
  list: MealItemData[];
  day?: string;
  mealType?: string;
  showDayBadge?: boolean;
}

export default function Meal({
  children,
  initialMeal,
  list,
  day,
  mealType,
  showDayBadge = true,
}: MealProps) {
  const [content, setContent] = useState<string>(() => {
    return initialMeal || (typeof children === "string" ? children : "");
  });

  const handleReroll = () => {
    if (!list || list.length === 0) return;
    const sample = list[Math.floor(Math.random() * list.length)];
    if (sample) {
      setContent(sample.content);
    }
  };

  const dayText = day ? `para ${day}` : "";
  const typeText = mealType ? `(${mealType})` : "";
  const ariaLabel = `Sortear nuevo plato ${dayText} ${typeText}`.trim();

  return (
    <div className={styles.mealContainer}>
      <div className={styles.dragHandle} aria-hidden="true" title="Arrastrar">
        <span className={styles.handleDots}>⋮⋮</span>
      </div>
      <div className={styles.mealContent}>
        {showDayBadge && day && (
          <span className={styles.dayBadge}>
            {day}
            {mealType && (
              <span className={styles.mealTypeSubBadge}> • {mealType}</span>
            )}
          </span>
        )}
        <p className={styles.mealName}>{content}</p>
      </div>
      <button
        className={styles.rerollBtn}
        onClick={handleReroll}
        aria-label={ariaLabel}
        title="Sortear otro plato"
        type="button"
      >
        <span className={styles.diceIcon}>🎲</span>
      </button>
    </div>
  );
}
