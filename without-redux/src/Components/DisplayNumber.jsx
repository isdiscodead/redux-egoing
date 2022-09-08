import React, {Component} from 'react';
import store from '../store';

export default class DisplayNumber extends Component {
  state = { number: store.getState().number } // store에서 number 가져오기 
  constructor(props) {
    super(props); // 반드시 먼저 실행 ! 
    store.subscribe(function() {
      this.setState({number: store.getState().number}); // 변경 시 render() 재 호출을 위한 subscribe
    }.bind(this));
  }
    render() {
      return (
        <div>
          <h1>Display Number</h1>
          <input type="text" value={this.state.number} readOnly></input>
        </div>
      )
    }
  }