import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

class App extends Component {
  state = {
    todos: [
      {
        text: "Buy Milk",
        completed: false
      },
      {
        text: "Buy Egg",
        completed: true
      }
    ]
  };

  toggleComplete = index => {
    const newTodos = this.state.todos.map((todo, i) => {
      if (index === i) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }

      return todo;
    });

    this.setState({
      todos: newTodos
    });
  };

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
          return (
            <TodoItem
              toggleComplete={this.toggleComplete}
              todo={todo}
              index={index}
              key={index}
            />
          );
        })}

        <AddTodo addTodoToState={this.addTodoToState} />
      </div>
    );
  }
}

export default App;
