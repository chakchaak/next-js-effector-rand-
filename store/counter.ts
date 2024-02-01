import { createEvent, createStore } from "effector";

export const $counter = createStore<number>(112);

export const decrementCounter = createEvent();

export const incrementCounter = createEvent();

export const randCounter = createEvent();

$counter 
  .on(incrementCounter, (state) => state + 1);
  .on(decrementCounter, (state) => state - 1);
  .on(randCounter, (state) => Math.round(Math.random() * 100));
  
