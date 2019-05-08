import React, { Component } from 'react';

import '../../css/left.css';

export class Left extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="left">
      <div className="point">
        <div className="title">POINTS</div>
        <div className="controller">
          <div className="value">0</div>
          <button>C</button>
          <button>-</button>
          <button>4</button>
          <button>3</button>
          <button>2</button>
          <button>1</button>
        </div>
      </div>
      <div className="advantage">
        <div className="title">ADVANTAGE</div>
        <div className="controller">
          <div className="value">0</div>
          <button>+</button>
          <button>-</button>
        </div>
      </div>
      <div className="penalty">
        <div className="title">PENALTY</div>
        <div className="controller">
          <div className="value">0</div>
          <button>+</button>
          <button>-</button>
        </div>
      </div>
    </div>
    );
  }

}