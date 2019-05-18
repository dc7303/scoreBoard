import React, { Component } from 'react';

import '../../css/top.css';
import timeout from '../../assets/sound/Timeout.wav';

export class Top extends Component {

  state = {
    min: '00',
    sec: '00',
    interval: 0,
    isStart: false,
  };

  audio;

  constructor(props) {
    super(props);
    this.minSelectHandler = this.minSelectHandler.bind(this);
    this.secSelectHandler = this.secSelectHandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
    this.startHandler = this.startHandler.bind(this);
    this.getDateValue = this.getDateValue.bind(this);
    this.timerCallback = this.timerCallback.bind(this);
    this.stopHandler = this.stopHandler.bind(this);
    this.audio = new Audio(timeout);
  }

  stopHandler() {
    clearInterval(this.state.interval);
    this.setState({
      isStart: false
    });
  }

  getDateValue() {
    const minMs = this.state.min * 60000;       // 분
    const secMs = this.state.sec * 1000;        // 초

    return new Date((minMs + secMs) - 1000);
  }

  startHandler() {
    if (this.state.isStart) {
      return;
    }

    if (this.state.min === '00' && this.state.sec === '00') {
      alert('시간을 셋팅해주세요.');
      return;
    }
    
    const interval = setInterval(this.timerCallback, 1000);
    this.setState({
      interval,
      isStart: true
    });
  }

  timerCallback() {
    const date = this.getDateValue();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    if (min === 0 && sec === 0) {
      clearInterval(this.state.interval);
      this.audio.play();
      this.initSelect();
      this.setState({
        isStart: false
      });
    }

    this.setState({
      min: this.formatValue(min),
      sec: this.formatValue(sec),
    });
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
    /**
    this.setState({
      min: '00',
      sec: '00'
    });
    
    this.props.resetAll();
    if (this.state.isStart) {
      clearInterval(this.state.interval);
      this.setState({
        isStart: false
      });
    }

    this.initSelect();
    */
    window.location.reload();
  }

  initSelect() {
    document.getElementById('minSelect').selectedIndex = 0;
    document.getElementById('secSelect').selectedIndex = 0;
  }

  
  formatValue(value) {
    if (value < 10) {
      return `0${value}`;
    }

    return value;
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
        <button onClick={this.startHandler}>start</button>
        <button onClick={this.stopHandler}>stop</button>
        <button onClick={this.resetHandler}>reset</button>
      </div>
    </div>
    );
  }

}