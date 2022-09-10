import "./styles.css";
import Matrix1 from "./matrixs/Matrix1.js";
import Matrix2 from "./matrixs/Matrix2";
import Matrix3 from "./matrixs/Matrix3";
import Matrix4 from "./matrixs/Matrix4";
import Matrix5 from "./matrixs/Matrix5";
import Start from "./matrixs/Start";
import Finish from "./matrixs/Finish";
import React, { useState } from "react";
export default function App() {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);
  const setRequire = (num) => {
    setNumber(num);
  };
  const setCounter = (data) => {
    setCount(data);
  };
  const calculate = async (num) => {
    await setRequire(number + num);
    await setCounter(count + 1);
  };

  const resetGame = async (data) => {
    await setCounter(data);
  };
  return (
    <div className="App">
      {count === 0 ? <Start num={calculate} /> : ""}
      {count === 1 ? <Matrix1 num={calculate} /> : ""}
      {count === 2 ? <Matrix2 num={calculate} /> : ""}
      {count === 3 ? <Matrix3 num={calculate} /> : ""}
      {count === 4 ? <Matrix4 num={calculate} /> : ""}
      {count === 5 ? <Matrix5 num={calculate} /> : ""}
      {count === 6 ? <Finish data={number} reset={resetGame} /> : ""}
    </div>
  );
}
