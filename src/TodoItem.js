import React from "react";

class TodoItem extends React.Component {
  clickHandler = () => {
    this.props.toggleComplete(this.props.index);
  };

  deleteTodo = () => {
    this.props.deleteTodoFromState(this.props.index);
  };

  render() {
    const { todo } = this.props;

    return (
      <li className={todo.completed ? "completed" : ""}>
        <span onClick={this.clickHandler}>{todo.text} </span>

        <span>
          <button onClick={this.deleteTodo}>Delete</button>
        </span>
      </li>
    );
  }
}

export default TodoItem;
