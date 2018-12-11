import React, { Component } from 'react';
import { rooms, start }  from './rooms.js';

export default class App extends Component {

  state = {
    rooms,
    room: start
  };

  render(){
    const { room } = this.state;
    return (
      <div>
        hello
        {room.ovalOffice.title}
      </div>
    );
  }

}