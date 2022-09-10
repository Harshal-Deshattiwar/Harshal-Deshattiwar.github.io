import * as React from "react";
import "./styles.css";
export default function Matrix1({ num }) {
  const setNumber = async () => {
    await num(1);
  };
  const setNumberZero = async () => {
    await num(0);
  };
  return (
    <div class="container text-center mat-center">
      <div class="row">
        <div class="col row-mat1">1</div>
        <div class="col row-mat1 ">3</div>
        <div class="col row-mat1 ">5</div>
        <div class="col row-mat1 ">7</div>
      </div>
      <div class="row">
        <div class="col row-mat1 ">9</div>
        <div class="col row-mat1 ">11</div>
        <div class="col row-mat1 ">13</div>
        <div class="col row-mat1 ">15</div>
      </div>
      <div class="row">
        <div class="col row-mat1 ">17</div>
        <div class="col row-mat1 ">19</div>
        <div class="col row-mat1 ">21</div>
        <div class="col row-mat1 ">23</div>
      </div>
      <div class="row">
        <div class="col row-mat1 ">25</div>
        <div class="col row-mat1 ">27</div>
        <div class="col row-mat1 ">29</div>
        <div class="col row-mat1 ">31</div>
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
