import React, { Component } from 'react';

import '../../css/right.css';

export class Right extends Component {

  state = {
    pointCnt: 0,
    advantageCnt: 0,
    penaltyCnt: 0,
  }

  constructor(props) {
    super(props);
    this.pointUpHandler = this.pointUpHandler.bind(this);
    this.advantageHandler = this.advantageHandler.bind(this);
    this.penaltyHandler = this.penaltyHandler.bind(this);
    this.initPoint = this.initPoint.bind(this);
  }

  /** 포인트 초기화 */
  initPoint() {
    this.setState({
      pointCnt: 0
    });    
  }

  /** 득점 핸들러 */
  pointUpHandler(cnt)  {
    const t = this;
    return () => {
      this.setState({
        pointCnt: t.state.pointCnt + cnt
      });
    }
  }

  /** 어드밴테이지 핸들러 */
  advantageHandler(cnt) {
    const t = this;
    return () => {
      this.setState({
        advantageCnt: t.state.advantageCnt + cnt
      });
    }
  }

  /** 패널티 핸들러 */
  penaltyHandler(cnt) {
    const t = this;
    return () => {
      this.setState({
        penaltyCnt: t.state.penaltyCnt + cnt
      });
    }
  }

  render() {
    return (
    <div className="right">
      <div className="point">
        <div className="title">POINTS</div>
        <div className="controller">
        <div className="value">{this.state.pointCnt}</div>
          <button onClick={this.initPoint}>C</button>
          <button onClick={this.pointUpHandler(-1)}>-</button>
          <button onClick={this.pointUpHandler(4)}>4</button>
          <button onClick={this.pointUpHandler(3)}>3</button>
          <button onClick={this.pointUpHandler(2)}>2</button>
          <button onClick={this.pointUpHandler(1)}>1</button>
        </div>
      </div>
      <div className="advantage">
        <div className="title">ADVANTAGE</div>
        <div className="controller">
          <div className="value">{this.state.advantageCnt}</div>
          <button onClick={this.advantageHandler(1)}>+</button>
          <button onClick={this.advantageHandler(-1)}>-</button>
        </div>
      </div>
      <div className="penalty">
        <div className="title">PENALTY</div>
        <div className="controller">
        <div className="value">{this.state.penaltyCnt}</div>
          <button onClick={this.penaltyHandler(1)}>+</button>
          <button onClick={this.penaltyHandler(-1)}>-</button>
        </div>
      </div>
    </div>
    );
  }

}