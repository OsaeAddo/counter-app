import React, { Component } from "react";

class Counter extends React.Component {
  state = {
    count: 0,
  };

  

  // Applying custom styles to elements
  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  handleIncrement = ()=> {
    console.log("Increment Clicked", this);
  }

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
