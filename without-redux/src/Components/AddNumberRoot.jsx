import React, {Component} from 'react';
import AddNumber from '../Containers/AddNumber'; // 컨테이너로 바꿔치기 

export default class AddNumberRoot extends Component {
    render() {
      return (
        <div>
          <h1>Add Number Root</h1>
          <AddNumber></AddNumber>
        </div>
      )
    }
  }