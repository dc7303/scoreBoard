import React, { Component } from 'react';
import { Top } from './layout/top';
import { Center } from './layout/center';
import { Left } from './layout/left';
import { Right } from './layout/right';

import '../css/counter.css';

export class Counter extends Component {

  state = {
    leftPointCnt: 0,
    leftAdvantageCnt: 0,
    leftPenaltyCnt: 0,
    rightPointCnt: 0,
    rightAdvantageCnt: 0,
    rightPenaltyCnt: 0,
    min: '00',
    sec: '00',
  }

  constructor(props) {
    super(props);
    this.resetAll = this.resetAll.bind(this);
  }

  resetAll() {
    this.setState({
      leftPointCnt: 0,
      leftAdvantageCnt: 0,
      leftPenaltyCnt: 0,
      rightPointCnt: 0,
      rightAdvantageCnt: 0,
      rightPenaltyCnt: 0,
      min: '00',
      sec: '00',
    });
  }

  render() {
    return (
    <div className="counter">
      <Top />
      <Center />
      <Left />
      <Right />
    </div>
    );
  }
}