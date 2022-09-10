import * as React from "react";
import "./styles.css";
export default function Matrix5({ num }) {
  const setNumber = async () => {
    await num(16);
  };
  const setNumberZero = async () => {
    await num(0);
  };
  return (
    <div class="container text-center mat-center">
      <div class="row">
        <div class="col row-mat5">16</div>
        <div class="col row-mat5 ">17</div>
        <div class="col row-mat5 ">18</div>
        <div class="col row-mat5 ">19</div>
      </div>
      <div class="row">
        <div class="col row-mat5 ">20</div>
        <div class="col row-mat5 ">21</div>
        <div class="col row-mat5 ">22</div>
        <div class="col row-mat5 ">23</div>
      </div>
      <div class="row">
        <div class="col row-mat5 ">24</div>
        <div class="col row-mat5 ">25</div>
        <div class="col row-mat5 ">26</div>
        <div class="col row-mat5 ">27</div>
      </div>
      <div class="row">
        <div class="col row-mat5 ">28</div>
        <div class="col row-mat5 ">29</div>
        <div class="col row-mat5 ">30</div>
        <div class="col row-mat5 ">31</div>
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
