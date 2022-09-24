import React, { Component } from 'react';
import DisplayNumber from '../Components/DisplayNumber';


import { connect } from 'react-redux';
import store from '../store';

// connect 함수의 인자
function mapReduxStateToReactProps(state) {
  return {
    number : state.number
  }
}

function mapReduxDispatchToReactProps() {
  return {}
}

// connect -> wrapping된 컴포넌트 반환
// store를 전달해주기 위해 최상위 컴포넌트는 index.js에서 처리 
export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps) (DisplayNumber); 

/*
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
*/