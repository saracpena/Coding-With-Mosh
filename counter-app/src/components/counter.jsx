import React, { Component } from "react";

export default class Counter extends Component {
  // state is a special property, an object that includes data that this Counter component needs
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count +1 })
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  //calling a function that return a value
  //this method we want to check the value of the count property
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}
