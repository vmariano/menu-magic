"use client"

import Meal from "./Meal";
import styles from './mealList.module.css'

const randomizeMenu = (list) => {
    let sampleList = [];
    let daysOfTheWeek = 5;
    for (let i = 0; i < daysOfTheWeek; i++) {
        sampleList.push(list[Math.floor(Math.random() * list.length)]);
    }
    return sampleList.map((meal) => {
        return (<Meal key={meal.content} list={list}>{meal.content}</Meal>);
    });
}

export default function MealList({title, list}) {
    return (
        <div className={styles.mealList}>
            <h1>{title}</h1>
            {randomizeMenu(list)}
        </div>
    );
}