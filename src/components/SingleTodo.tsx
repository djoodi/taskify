import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Card, Container, Form, Row, Col } from "react-bootstrap";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit =(e:React.FormEvent, id:number) => {
    e.preventDefault();

    setTodos(todos.map((todo)=>
        todo.id === id? {...todo, todo:editTodo} : todo
    ));
    setEdit(false);

}
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(()=>{
    inputRef.current?.focus();
  }, [edit]);


  return (
    <Container>
        <Row className="mb-3">
            <Card className="p-3">
                
                <Form className="todosSingle" onSubmit={(e)=>handleEdit(e, todo.id)}>
                
                    <Row>

                        <Col>

                            {edit ? (
                                <Form.Control 
                                    ref={inputRef}
                                    value={editTodo}
                                    onChange={(e)=>setEditTodo(e.target.value)}
                                    className="todosSingleText"/>
                            ) : todo.isDone ? (
                                <s className="todosSingleText">{todo.todo}</s>
                            ) : (
                                <span className="todosSingleText">{todo.todo}</span>
                            )}

                        </Col>

                        <Col className="d-flex justify-content-end">
                            
                            <span
                                className="icon"
                                onClick={() => {
                                    if (!edit && !todo.isDone) {
                                    setEdit(!edit);
                                    }
                                }}
                            >
                                <AiFillEdit size="22px"/>
                            </span>
                            <span className="icon" onClick={() => handleDelete(todo.id)}>
                                <AiFillDelete size="22px"/>
                            </span>
                            <span className="icon" onClick={() => handleDone(todo.id)}>
                                <MdDone size="22px"/>
                            </span>
                            
                        </Col>
                    </Row>
                </Form>
            </Card>
        </Row>
    </Container>
  );
};

export default SingleTodo;
