import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import AddTodo from "./AddTodo";

class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: [
        {
          text: "Buy Milk"
        },
        {
          text: "Buy Egg"
        }
      ]
    };
  }

  addTodoToState = text => {
    const newTodos = this.state.todos.concat({
      text
    });

    this.setState({
      todos: newTodos
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.todos.map((todo, index) => {
          return <li key={index}>{todo.text}</li>;
        })}

        <AddTodo addTodoToState={this.addTodoToState} />
      </div>
    );
  }
}

export default App;
