import React, { Component } from 'react';

import '../../css/top.css';

export class Top extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="top">
      <div className="time-set">
       
      </div>
      <div className="timer">00:00</div>
      <div className="control-box">
        <button>start</button>
        <button>reset</button>
      </div>
    </div>
    );
  }

}