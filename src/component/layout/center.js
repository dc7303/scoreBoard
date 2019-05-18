import React, { Component } from 'react';

import '../../css/center.css';
import logo from '../../assets/img/logo.jpg';

export class Center extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="center">
      <img src={logo} class="img"></img>
    </div>
    );
  }

}