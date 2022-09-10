import * as React from "react";
import "./styles.css";
export default function Matrix3({ num }) {
  const setNumber = async () => {
    await num(4);
  };
  const setNumberZero = async () => {
    await num(0);
  };
  return (
    <div class="container text-center mat-center">
      <div class="row">
        <div class="col row-mat3">4</div>
        <div class="col row-mat3 ">5</div>
        <div class="col row-mat3 ">6</div>
        <div class="col row-mat3 ">7</div>
      </div>
      <div class="row">
        <div class="col row-mat3 ">12</div>
        <div class="col row-mat3 ">13</div>
        <div class="col row-mat3 ">14</div>
        <div class="col row-mat3 ">15</div>
      </div>
      <div class="row">
        <div class="col row-mat3 ">20</div>
        <div class="col row-mat3 ">21</div>
        <div class="col row-mat3 ">22</div>
        <div class="col row-mat3 ">23</div>
      </div>
      <div class="row">
        <div class="col row-mat3 ">28</div>
        <div class="col row-mat3 ">29</div>
        <div class="col row-mat3 ">30</div>
        <div class="col row-mat3 ">31</div>
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
