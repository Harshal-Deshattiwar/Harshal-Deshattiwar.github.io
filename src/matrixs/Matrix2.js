import * as React from "react";
import "./styles.css";
export default function Matrix2({ num }) {
  const setNumber = async () => {
    await num(2);
  };
  const setNumberZero = async () => {
    await num(0);
  };
  return (
    <div class="container text-center mat-center">
      <div class="row">
        <div class="col row-mat2">2</div>
        <div class="col row-mat2 ">3</div>
        <div class="col row-mat2 ">6</div>
        <div class="col row-mat2 ">7</div>
      </div>
      <div class="row">
        <div class="col row-mat2 ">10</div>
        <div class="col row-mat2 ">11</div>
        <div class="col row-mat2 ">14</div>
        <div class="col row-mat2 ">15</div>
      </div>
      <div class="row">
        <div class="col row-mat2 ">18</div>
        <div class="col row-mat2 ">19</div>
        <div class="col row-mat2 ">22</div>
        <div class="col row-mat2 ">23</div>
      </div>
      <div class="row">
        <div class="col row-mat2 ">26</div>
        <div class="col row-mat2 ">27</div>
        <div class="col row-mat2 ">30</div>
        <div class="col row-mat2 ">31</div>
      </div>

      <div class="row">
        <div class="col row-button">
          <button
            type="button"
            class="btn btn-success"
            onClick={() => setNumber()}
          >
            Yes
          </button>
        </div>
        <div class="col  row-button">
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => setNumberZero()}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
