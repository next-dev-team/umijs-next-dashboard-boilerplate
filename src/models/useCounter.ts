import { useReactive } from 'ahooks';
import { useCallback, useState } from 'react';


/**
 * see the cause in welcome.tsx
 * @returns
 */
export default function useCounter() {
  const [counter, setCounter] = useState(0);

  const counterState = useReactive({
    counter: 0,
    username: 'sila',
  });



  //================= React useState style ===============
  /**
  * ----- increment --------
  */
  const increment = useCallback(() => {
    setCounter(counter + 1)
  }, [counter])

  /**
   * ----- decrement by param
   */
  const decrement = useCallback((by = 1) => {
    setCounter(counter + by)
  }, [counter])



  //================= useReactive style ===============

  /**
   * ----- decrement  -----
   */
  const decrementState = () => {
    counterState.counter += 1
  }

  return {
    counter,
    increment,
    decrement,
    decrementState,
    counterState
  }
}
