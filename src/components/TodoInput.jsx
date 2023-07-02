import React, { Component, createRef } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import "./todo.scss";

export class TodoInput extends Component {
  inputRef = createRef();
  render() {
    const { getValue, todo } = this.props;
    this.inputRef.current && (this.inputRef.current.value = todo);
    return (
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          getValue(this.inputRef.current.value);
          this.inputRef.current.value = "";
        }}
      >
        <InputGroup className="my-3 w-50 m-auto">
          <Form.Control
            ref={this.inputRef}
            placeholder="Qiladigan ishlarizni kiriting.."
            aria-label="Qiladigan ishlarizni kriting"
          />
          <Button className="btn-input" type="submit" variant="outline-success">
            {todo ? "Save" : "Add"}
          </Button>
        </InputGroup>
      </Form>
    );
  }
}

export default TodoInput;
