"use client";

import styles from '../styles/components/meal.module.css'
import {useState} from "react";


export default function MealItem({children, list}) {
    const [content, setChildren] = useState(children);

    const onClick = () => {
        
    }

    return(
        <div className={styles.mealContainer} >
            <div className={styles.draggablePattern}>⠀</div>
            <p className={styles.mealName}>{content}</p>
            <button onClick={() =>  {
            x
            }}>🎲</button>
        </div>
    );
}