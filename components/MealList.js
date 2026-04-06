"use client";

import MealItem from "./MealItem.js";
import styles from '../styles/components/mealList.module.css'

const randomizeMenu = (list) => {
    let sampleList = [];
    let daysOfTheWeek = 5;
    for (let i = 0; i < daysOfTheWeek; i++) {
        sampleList.push(list[Math.floor(Math.random() * list.length)]);
    }
    return sampleList.map((meal) => {
        return (<MealItem key={meal.id} list={list}>{meal.content}</MealItem>);
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