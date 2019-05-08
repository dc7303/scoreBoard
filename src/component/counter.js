import React, { Component } from 'react';
import { Top } from './layout/top';
import { Center } from './layout/center';
import { Left } from './layout/left';
import { Right } from './layout/right';

import '../css/counter.css';

export class Counter extends Component {

  constructor(props) {
    super(props);
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