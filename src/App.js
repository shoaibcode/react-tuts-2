import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Counter from "./Counter";

class App extends Component {
  constructor() {
    super();

    this.state = {
      count: 0
    };

    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    let count = this.state.count;

    this.setState({
      count: ++count
    });
  }

  render() {
    return (
      <div className="App">
        <Counter
          count={this.state.count}
          incrementCounter={this.incrementCounter}
        />
      </div>
    );
  }
}

export default App;
