import React, { Component } from 'react';
import { Center } from './center';
import { Right } from './right';
import { Left } from './left';
import { Top } from './top';

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