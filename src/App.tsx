import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./model";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from "react-bootstrap";

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, {id: Date.now(), todo, isDone: false}]);
      setTodo("");
    }
  }

  console.log(todos);

  return (
    <Container>
      <Row>
        <Col><h1 className="text-center mt-3">A Simple Tasklist</h1></Col>
      </Row>
      <Row>
        <InputField 
          todo={todo} 
          setTodo={setTodo} 
          handleAdd={handleAdd}/>
      </Row>

      <TodoList todos={todos} setTodos={setTodos}/> 

    </Container>
  );
}

export default App;
