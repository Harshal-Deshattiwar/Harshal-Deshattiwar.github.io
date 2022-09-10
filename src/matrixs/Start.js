import * as React from "react";
import "./styles.css";
export default function Start({ num }) {
  const setNumber = async () => {
    await num(0);
  };

  return (
    <div class="mat-center">
      <button type="button" class="btn btn-success" onClick={() => setNumber()}>
        Start
      </button>
    </div>
  );
}
