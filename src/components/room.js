import React, { Component } from 'react';

const directions = {
  e: 'East',
  w: 'West',
  n: 'North',
  s: 'South'
};

export default class Room extends Component {

  render(){
    const { room } = this.props
    const { title, image, description, items, people, doors } = room;
    const imageUrl = require(`../img/${image}`);

    return (
      <h1>{title}</h1>
    
    );
  }
}