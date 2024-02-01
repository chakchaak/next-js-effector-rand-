import * as React from "react";
import { useUnit } from "effector-react";
import {
  $counter,
  incrementCounter,
  decrementCounter,
  randCounter,
} from "../store/counter";
import styles from "../pages/globals.module.css";

export default function Home() {
  const { counter, onIncrement, onDecrement, onRandom } = useUnit({
    counter: $counter,
    onIncrement: incrementCounter,
    onDecrement: decrementCounter,
    onRandom: randCounter,
  });
  return (
    <>
      <main className={styles.menu}>
        <div className={styles.container}>
          <h1 className={styles.h1}>Число: {counter}</h1>
          <div>
            <button
              className={styles.btn1}
              variant="outlined"
              color="secondary"
              onClick={onDecrement}
            >
              УМЕНЬШИТЬ
            </button>
            <button
              className={styles.btn2}
              variant="contained"
              color="primary"
              onClick={onIncrement}
            >
              УВЕЛИЧИТЬ
            </button>
            <button
              className={styles.btn3}
              variant="contained"
              color="primary"
              onClick={onRandom}
            >
              РАНДОМНОЕ ЧИСЛО
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
