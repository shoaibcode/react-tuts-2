import React from "react";

class Counter extends React.Component {
  render() {
    return (
      <div>
        {this.props.count}
        <div>
          <button onClick={this.props.incrementCounter}> Add Counter</button>
        </div>
      </div>
    );
  }
}

export default Counter;
