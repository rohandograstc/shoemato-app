import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "@/Redux/Features/counter/coutersSlice";

const IncrementCounter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.count);
  const incrementFunc = () => {
    dispatch(increment());
  };
  return (
    <div>
      <h1>
        Counter: <span>{counter}</span>
      </h1>
      <button onClick={incrementFunc}>Add To Count</button>
    </div>
  );
};

export default IncrementCounter;
