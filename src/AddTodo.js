import React from "react";

class AddTodo extends React.Component {
  constructor() {
    super();

    this.state = {
      todotext: ""
    };

    // this.changeTodoText = this.changeTodoText.bind(this);
  }

  changeTodoText = event => {
    this.setState({
      todotext: event.target.value
    });
  };

  submitHandler = event => {
    event.preventDefault();

    this.props.addTodoToState(this.state.todotext);

    this.setState({
      todotext: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          onChange={this.changeTodoText}
          value={this.state.todotext}
        />
        <button type="submit"> Add Todo</button>
      </form>
    );
  }
}

export default AddTodo;
