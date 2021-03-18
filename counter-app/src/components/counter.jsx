import React, { Component } from "react";

export default class Counter extends Component {
  // state is a special property, an object that includes data that this Counter component needs
  state = {
    count: 0,
    tags: ['tag1','tag2','tag3']
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
            <li></li>
        </ul>
      </div>
    );
  }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

  //calling a function that return a value
  //this method we want to check the value of the count property
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}
