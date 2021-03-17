import React, { Component } from "react";

export default class Counter extends Component {
// state is a special property, an object that includes data that this Counter component needs
  state = {
      count: 0,
  };
  
    render() {
    return (
      <div>
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </div>
    );
  }
//calling a function that return a value
//this method we want to check the value of the count property 
    formatCount(){
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
