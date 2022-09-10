import * as React from "react";
import "./styles.css";
export default function Matrix4({ num }) {
  const setNumber = async () => {
    await num(8);
  };
  const setNumberZero = async () => {
    await num(0);
  };
  return (
    <div class="container text-center mat-center">
      <div class="row">
        <div class="col row-mat4">8</div>
        <div class="col row-mat4 ">9</div>
        <div class="col row-mat4 ">10</div>
        <div class="col row-mat4 ">11</div>
      </div>
      <div class="row">
        <div class="col row-mat4 ">12</div>
        <div class="col row-mat4 ">13</div>
        <div class="col row-mat4 ">14</div>
        <div class="col row-mat4 ">15</div>
      </div>
      <div class="row">
        <div class="col row-mat4 ">24</div>
        <div class="col row-mat4 ">25</div>
        <div class="col row-mat4 ">26</div>
        <div class="col row-mat4 ">27</div>
      </div>
      <div class="row">
        <div class="col row-mat4 ">28</div>
        <div class="col row-mat4 ">29</div>
        <div class="col row-mat4 ">30</div>
        <div class="col row-mat4 ">31</div>
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
