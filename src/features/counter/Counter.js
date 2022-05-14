import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateStringToAdd, updatePhrase, selectCount } from "./counterSlice";

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div>
        <button aria-label="Decrement value" onClick={() => dispatch()}>
          -
        </button>
        <span>{count}</span>
        <button aria-label="Increment value" onClick={() => dispatch()}>
          +
        </button>
      </div>
      <div>
        <input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button onClick={() => dispatch()}>Add Amount</button>
        <button onClick={() => dispatch()}>Add Async</button>
        <button onClick={() => dispatch()}>Add If Odd</button>
      </div>
    </div>
  );
};
export default Counter;
