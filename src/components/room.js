import React, { Component } from 'react';
import './room.css';
const quote = require('../functions/quote');

const directions = {
  e: 'East',
  w: 'West',
  n: 'North',
  s: 'South'
};

export default class Room extends Component {


  handleBackgroundImage(props){
    const imageUrl = require(`../img/${props.image}.jpg`);
    return <div style={{ backgroundImage: `url(${imageUrl})` }}/>;
  }

  render(){
    const { room, onMove } = this.props;
    const { title, image, description, doors } = room;
    const imageUrl = require(`../img/${image}`);

    return (
      <div>
        <h1 className="roomDetails">{title}</h1>
        <h3 className="roomDetails">{description}</h3>
        <main className="grid-container">
          <div className="imgDiv" style={{ backgroundImage: `url(${imageUrl})` }}></div>
          <ul>{Object.keys(doors).map(key => (
            <li key={key}>
              <button onClick={() => onMove(room.doors[key])}>{room.connections[key]}</button>
            </li>
          ))}
          </ul>
        </main>
      </div>
    );
  }
}