import React, { useRef } from "react";
import { Form, InputGroup } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Form
      className="mb-3"
      onSubmit={(e) => {
        handleAdd(e)
        inputRef.current?.blur();
      }}
    >
      <InputGroup>
        <Form.Control
            type="input"
            ref={inputRef}
            value={todo}
            placeholder="Enter a task"
            className="inputBox"
            onChange={(e) => setTodo(e.target.value)}
        />
      
        <Button className="inputSubmit" type="submit">
            Add
        </Button>
      </InputGroup>
    </Form>
  );
};

export default InputField;
