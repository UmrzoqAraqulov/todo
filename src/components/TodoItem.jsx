import React, { Component } from "react";

export class TodoItem extends Component {
  render() {
    const {title,id,doneTodo,editTodo} = this.props;
    return (
      <div className="item p-3 d-flex justify-content-between align-items-center border mb-2">
        <span>{title}</span>
        <div className="btns d-flex gap-3">
          <button className="btn btn-primary" onClick={() => editTodo(id)}>
            edit
          </button>
          <button className="btn btn-success" onClick={() => doneTodo(id)}>
            Done
          </button>
        </div>
      </div>
    );
  }
}

export default TodoItem;
