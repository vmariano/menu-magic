"use client";

import { useState } from "react";
import MealList from "./MealList";
import { MealItemData } from "./Meal";
import styles from "./weeklyMenu.module.css";

const DAYS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
const SHORT_DAYS = ["Lun", "Mar", "Mié", "Jue", "Vie"];

interface WeeklyMenuProps {
  lunchList: MealItemData[];
  dinnerList: MealItemData[];
}

export default function WeeklyMenu({ lunchList, dinnerList }: WeeklyMenuProps) {
  const [selectedDayIndex, setSelectedDayIndex] = useState<number | null>(null);

  return (
    <div className={styles.container}>
      <nav className={styles.daySelector} aria-label="Filtrar por día de la semana">
        <button
          type="button"
          className={`${styles.dayTab} ${selectedDayIndex === null ? styles.activeDayTab : ""}`}
          onClick={() => setSelectedDayIndex(null)}
          aria-pressed={selectedDayIndex === null}
        >
          Todos
        </button>
        {SHORT_DAYS.map((shortName, index) => (
          <button
            key={shortName}
            type="button"
            className={`${styles.dayTab} ${selectedDayIndex === index ? styles.activeDayTab : ""}`}
            onClick={() => setSelectedDayIndex(index)}
            aria-pressed={selectedDayIndex === index}
            aria-label={`Ver menú para ${DAYS[index]}`}
          >
            {shortName}
          </button>
        ))}
      </nav>

      <div className={styles.board}>
        <div className={styles.daysColumn} aria-hidden="true">
          <div className={styles.dayHeaderSpacer} />
          {DAYS.map((day) => (
            <div key={day} className={styles.dayHeader}>
              <span>{day}</span>
            </div>
          ))}
        </div>

        <div className={styles.listsWrapper}>
          <MealList
            title="🥪 Almuerzo"
            list={lunchList}
            days={DAYS}
            selectedDayIndex={selectedDayIndex}
          />
          <MealList
            title="🍲 Cena"
            list={dinnerList}
            days={DAYS}
            selectedDayIndex={selectedDayIndex}
          />
        </div>
      </div>
    </div>
  );
}
