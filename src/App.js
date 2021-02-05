import { useState } from 'react';

function App() {
  return (
    <div className="container">
      <p className="table">0</p>
      <div className="flex">
        <div className="figures-wrapper">
          <button type="button" className="figure-btn">
            1
          </button>
          <button type="button" className="figure-btn">
            2
          </button>
          <button type="button" className="figure-btn">
            3
          </button>
          <button type="button" className="figure-btn">
            4
          </button>
          <button type="button" className="figure-btn">
            5
          </button>
          <button type="button" className="figure-btn">
            6
          </button>
          <button type="button" className="figure-btn">
            7
          </button>
          <button type="button" className="figure-btn">
            8
          </button>
          <button type="button" className="figure-btn">
            9
          </button>
          <button type="button" className="figure-btn">
            0
          </button>
          <button type="button" className="figure-btn">
            .
          </button>
          <button type="button" className="figure-btn">
            =
          </button>
        </div>
        <div className="actions-wrapper">
          <button type="button" className="action-btn">
            *
          </button>
          <button type="button" className="action-btn">
            /
          </button>
          <button type="button" className="action-btn">
            -
          </button>
          <button type="button" className="action-btn">
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
