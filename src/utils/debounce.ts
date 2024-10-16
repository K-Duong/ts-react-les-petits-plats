
import { Timer, MainFunction } from "../types/debounce";

export const debounce = (mainFunction : MainFunction, delay: number) => {
  let timer: Timer;
  return function(...arg) {
    clearTimeout(timer);
    timer = setTimeout( () => mainFunction(...arg), delay)
  }
}