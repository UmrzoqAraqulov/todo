import React, { Component } from "react";

export class TodoDoneItem extends Component {
  render() {
    const { title, id, deleteTodo } = this.props;
    return (
      <div className="item p-3 d-flex justify-content-between align-items-center border mb-2">
        <span>{title}</span>
        <button className="btn btn-danger" onClick={() => deleteTodo(id)}>
          Delete
        </button>
      </div>
    );
  }
}

export default TodoDoneItem;
