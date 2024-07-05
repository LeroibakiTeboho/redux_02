import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  reset,
  increamentByAmount,
} from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.count); // adding state to the component
  const dispatch = useDispatch();

  const [incrementValue, setIncrementValue] = useState(0);

  const AddValue = Number(incrementValue) || 0;
  const resetAll = () => {
    setIncrementValue(0);
    dispatch(reset());
  };

  return (
    <section className="w-full bg-black">
      <p className="text-6xl">{count}</p>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button className="" onClick={() => dispatch(increment())}>
          +
        </button>
      </div>

      <div>
        <input 
          type="text"
          value={incrementValue}
          onChange={(e) => setIncrementValue(e.target.value)}
        />

        <div>
          <button onClick={() => dispatch(increamentByAmount(AddValue))}>
            Add Amount
          </button>
          <button onClick={resetAll}>Reset</button>
        </div>
      </div>
    </section>
  );
}

export default Counter;
