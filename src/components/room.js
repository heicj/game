import React, { Component } from 'react';
import './room.css';

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
    const { room } = this.props
    const { title, image, description, items, people, doors } = room;
    const imageUrl = require(`../img/${image}`);

    return (
      <main>
        <h1>{title}</h1>
        <div className="imgDiv" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      </main>
    );
  }
}