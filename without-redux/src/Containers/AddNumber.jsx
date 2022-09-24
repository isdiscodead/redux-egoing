
import AddNumber from "../Components/AddNumber";


import { connect } from "react-redux";

// connect의 두 번째 인자
function mapDispatchToProps(dispatch) {
    return {
        onClick : function(size) {
            dispatch({type: 'INCREMENT', size: size });
        }
    }
}

// 전달 받는 prop은 없기 때문에 첫 번째 인자는 null로 ! 
export default connect(null, mapDispatchToProps) (AddNumber);

/*
import React, { Component } from "react";
import store from '../store';

export default class extends Component {
    render() {
        return <AddNumber onClick={ function(size) {
            store.dispatch({type: 'INCREMENT', size: size }) 
        }.bind(this)}></AddNumber>
    }
}
*/