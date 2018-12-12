import React, { Component } from 'react';
import Room from './room.js';
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
        <Room room={room}/>
      </div>
    );
  }

}