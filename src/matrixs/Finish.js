import * as React from "react";
import "./styles.css";
export default function Finish({ data, reset }) {
  const setNumber = async () => {
    await reset(0);
  };

  return (
    <div class="mat-center">
      <button type="button" class="btn btn-success" onClick={() => setNumber()}>
        {data}
      </button>
    </div>
  );
}
