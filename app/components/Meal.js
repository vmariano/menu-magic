"use client";

import styles from './meal.module.css'
import {useState} from "react";


export default function MealItem({ meal, children, list }) {
    const [currentMeal, setCurrentMeal] = useState(
        meal || (typeof children === 'string' ? { content: children, link: '' } : children)
    );

    const handleReroll = () => {
        if (list && list.length > 0) {
            const sample = list[Math.floor(Math.random() * list.length)];
            setCurrentMeal(sample);
        }
    };

    const hasLink = Boolean(currentMeal?.link && currentMeal.link.trim() !== '');

    return (
        <div className={styles.mealContainer}>
            <div className={styles.draggablePattern}>⠀</div>
            <p className={styles.mealName}>{currentMeal?.content}</p>
            <div className={styles.actions}>
                {hasLink && (
                    <a
                        href={currentMeal.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.recipeLink}
                        title="Ver receta"
                        aria-label={`Ver receta de ${currentMeal?.content || 'comida'}`}
                    >
                        🔗
                    </a>
                )}
                <button
                    onClick={handleReroll}
                    title="Sortear otra comida"
                    aria-label="Sortear otra comida"
                >
                    🎲
                </button>
            </div>
        </div>
    );
}