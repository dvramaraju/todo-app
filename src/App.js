import React, { useState } from "react";
import "./App.css";
import { Button, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import Todo from "./Todo";
// import FormTodo from "./FormTodo";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "This is a sample todo",
      isDone: false,
    },
    {
      text: "Another Todo",
      isDone: false,
    },
  ]);

  function Todo({ todo, index, markTodo, editTodo, removeTodo }) {
    return (
      <div className="todo">
        <span
          style={{
            fontFamily: "kalam",
            fontSize: "30px",
            textDecoration: todo.isDone ? "line-through" : "",
          }}
        >
          {todo.text}
        </span>
        <div>
          <Button
            variant="outline-primary"
            style={{ marginRight: "5px" }}
            onClick={() => editTodo(index)}
          >
            ✏
          </Button>
          <Button
            variant="outline-success"
            style={{ marginRight: "5px" }}
            onClick={() => markTodo(index)}
          >
            ✓
          </Button>
          <Button variant="outline-danger" onClick={() => removeTodo(index)}>
            ✕
          </Button>
        </div>
      </div>
    );
  }

  function FormTodo({ addTodo }) {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };

    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            className="input"
            style={{ fontFamily: "kalam", fontSize: 20 }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Add new todo"
            autoComplete="off"
          />
        </Form.Group>
        <Button variant="primary mb-3" type="submit">
          Submit
        </Button>
      </Form>
    );
  }

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index] = setTodos();
    setTodos(newTodos);
  };

  const editTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index] = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <div className="container">
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  editTodo={editTodo}
                  removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
