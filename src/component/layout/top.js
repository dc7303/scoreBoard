import React, { Component } from 'react';

import '../../css/top.css';

export class Top extends Component {

  state = {
    min: '00',
    sec: '00'
  }

  constructor(props) {
    super(props);
    this.minSelectHandler = this.minSelectHandler.bind(this);
    this.secSelectHandler = this.secSelectHandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
  }

  minSelectHandler(event) {
    this.setState({
      min: event.target.value
    });
  }

  secSelectHandler(event) {
    this.setState({
      sec: event.target.value
    })
  }

  resetHandler() {
    this.setState({
      min: '00',
      sec: '00'
    });

    this.initSelect();
  }

  initSelect() {
    document.getElementById('minSelect').selectedIndex = 0;
    document.getElementById('secSelect').selectedIndex = 0;
  }

  render() {
    return (
    <div className="top">
      <div className="time-set">
        <select id="minSelect" onChange={this.minSelectHandler}>
          <option value="00">00</option>
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
        </select>
        <sapne>:</sapne>
        <select id="secSelect" onChange={this.secSelectHandler}>
          <option value="00">00</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select>
      </div>
      <div className="timer">{this.state.min}:{this.state.sec}</div>
      <div className="control-box">
        <button>start</button>
        <button onClick={this.resetHandler}>reset</button>
      </div>
    </div>
    );
  }

}