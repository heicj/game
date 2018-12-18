import React, { Component } from 'react';
import Room from './Room.js';
import { rooms, start }  from './rooms.js';

export default class App extends Component {

  
  state = {
    rooms,
    room: start
  };

  handleMove = roomKey => {
    this.setState({
      room: this.state.rooms[roomKey]
    });
  };

  render(){
    const { room } = this.state;
    return (
      <div>
        <Room room={room}
          onMove={this.handleMove}
        />
      </div>
    );
  }

}