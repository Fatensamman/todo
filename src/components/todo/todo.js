import React from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import { useState, useEffect } from 'react';

import {Container,Col,Row,Card} from 'react-bootstrap';
import './todo.scss';

function ToDo(props) {
  const [list, setList] = useState([]);

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     list: [],
  //   };
  // }
  useEffect(() =>
  {
    document.title='To Do List'
  })

  const addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    setList([...list, item]);
  };

  const toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let newList = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(newList);
    }

  };

  useEffect(() => {
    let menu = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A' },
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A' },
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B' },
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C' },
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B' },
    ];

    setList(menu);
  }, []);

  return (
    <>
      <header>
        <h2 className="h2-1">
          There are {list.filter(item => !item.complete).length} Items To Complete
          </h2>
      </header>
      <Container fluid="md" style={{ marginTop: '4rem' }}>
      <Row className="justify-content-md-center">
        <Col md={3}>
        <Card >
									<TodoForm handleSubmit={addItem} />
						</Card>

        </Col>
        <Col md={{ span: 7, offset: 0 }}>
        <div>
          <TodoList
            list={list}
            setList={setList}
            handleComplete={toggleComplete}
          />
        </div>
        </Col>


        </Row>
      </Container>
      
      </>
  );
}


export default ToDo;
