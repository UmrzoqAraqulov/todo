import React, { Component } from "react";
import { toast } from "react-toastify";
import { Col, Container, Row } from "react-bootstrap";
import TodoInput from "./TodoInput";
import TodoDoneItem from "./TodoDoneItem";
import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from "uuid";

import "./todo.scss";

export class Todo extends Component {
  state = {
    todos: JSON.parse(localStorage.getItem("todo")) || [
      {
        id: 0,
        title: "Reading books",
        done: false,
      },
      {
        id: 1,
        title: "Working with Team",
        done: false,
      },
      {
        id: 2,
        title: "Running",
        done: true,
      },
      {
        id: 3,
        title: "Playing tennis",
        done: false,
      },
      {
        id: 4,
        title: "Swimming",
        done: false,
      },
    ],
    selected: "",
  };
  render() {
    let doneItems = this.state.todos.filter((todo) => todo.done);
    let unDoneItems = this.state.todos.filter((todo) => !todo.done);
    const getValue = (value) => {
      let todos;
      console.log(this.state.selected);
      if (!this.state.selected) {
        todos = [
          ...this.state.todos,
          { id: uuidv4(), title: value, done: false },
        ];
        toast.success("Add Todo");
      } else {
        todos = this.state.todos.map((todo) => {
          if (todo.id === this.state.selected) {
            todo.title = value;
          }
          return todo;
        });
        this.state.selected = "";
        toast.success("Edit Todo");
      }
      if (value) {
        this.setState({ todos });
        localStorage.setItem("todo", JSON.stringify(todos));
      } else {
        toast.error("Please fill this input");
      }
    };
    const doneTodo = (id) => {
      let todos = this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.done = true;
          toast.success("Done Todo");
        }
        return todo;
      });
      this.setState({ todos });
      localStorage.setItem("todo", JSON.stringify(todos));
    };

    const editTodo = (id) => {
      this.setState({ selected: id });
    };
    let todo = this.state.todos.find((todo) => todo.id === this.state.selected);

    const deleteTodo = (id) => {
      let todos = this.state.todos.filter((todo) => todo.id !== id);
      this.setState({ todos });
      toast.success("Delete Done Todo");
      localStorage.setItem("todo", JSON.stringify(todos));
    };
    return (
      <Container>
        <TodoInput getValue={getValue} todo={todo ? todo.title : ""} />
        <Row>
          <Col lg={6}>
            {unDoneItems.map((todo) => (
              <TodoItem
                doneTodo={doneTodo}
                editTodo={editTodo}
                key={todo.id}
                {...todo}
              />
            ))}
          </Col>
          <Col lg={6}>
            {doneItems.map((todo) => (
              <TodoDoneItem deleteTodo={deleteTodo} key={todo.id} {...todo} />
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Todo;
