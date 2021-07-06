import Meal from "./meal";

export default function mealList({title}) {
    return (
        <div>
            <h1>{title}</h1>
            <Meal>Guiso de lentejas</Meal>
        </div>
    );
}