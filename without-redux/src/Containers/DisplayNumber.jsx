import React, { Component } from 'react';
import DisplayNumber from '../Components/DisplayNumber';
import store from '../store';

export default class extends Component {

    state = { number: store.getState().number } // store에서 number 가져오기 
    constructor(props) {
      super(props); // 반드시 먼저 실행 ! 
      store.subscribe(function() {
        this.setState({number: store.getState().number}); // 변경 시 render() 재 호출을 위한 subscribe
      }.bind(this));
    }

    render() {
        return <DisplayNumber number={this.state.number}></DisplayNumber>
    }
}