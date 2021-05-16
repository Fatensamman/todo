import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import {useState} from 'react';

function TodoForm (props) {
  const [item, setItem] = useState({});

  // constructor(props) {
  //   super(props);
  //   this.state = { item: {} };
  // }

  const handleInputChange = e => {
    setItem({...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(item);
    const m = {};
    setItem(m);
  };

    return (
      <Container>
      <h3>Add Item</h3>
      <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
          <Form.Label>
              <Form.Text>To Do Item</Form.Text>
              <Form.Control
                  name="text"
                  placeholder="Add to Do List Item"
                  onChange={handleInputChange}
              />
          </Form.Label>
          <Form.Label>
              <Form.Text>Assigned To</Form.Text>
              <Form.Control
                  type="text"
                  name="assignee"
                  placeholder="Assigned To"
                  onChange={handleInputChange} />
          </Form.Label>
          <Form.Label>
              <Form.Text> Difficulty Rating</Form.Text>
              <Form.Control
                  defaultValue="1"
                  type="range"
                  min="1"
                  max="5"
                  name="difficulty"
                  onChange={handleInputChange} />
          </Form.Label>
          
          </Form.Group>
          <Button  variant="dark" type="submit">Add Item</Button>
          {/* <button> add me</button> */}
      </Form>
    </Container>
    );
  }
 
export default TodoForm;
