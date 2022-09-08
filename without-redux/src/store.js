import { createStore } from 'redux';

export default createStore(function(state, action){
    if ( state === undefined ) {
        return { number: 0 } // 초기값
    }
    if ( action.type === 'INCREMENT') {
        return { ... state, number: state.number + action.size } // state 복제 후 변경할 부분만 변경 
    }
    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // dev툴 사용을 위함 