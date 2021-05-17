import React from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import { useState, useEffect } from 'react';

import { Container, Col, Row, Card } from 'react-bootstrap';
import './todo.scss';
import useAjax from '../hooks/useAjaxHook.js';


function ToDo() {
  const url = 'https://api-js401.herokuapp.com/api/v1/todo/';
  const [list, setList] = useState([]);

  useEffect(() => {
    document.title = `To Do List : complete ${list.filter(item => item.complete).length} / incomplete ${list.filter(item => !item.complete).length}`
  })

  // useEffect(_getTodoItems, [_getTodoItems]);

  const addItem = (item) => {
    item.complete = false;

    async function _add() {
      let results = await useAjax({ url, body: item, method: 'post' })
      item._id = results.data._id;
      // console.log(result,'addItem =---------')
      setList([...list, item]);
    }
    _add();
  }

  const toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let newList = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(newList);
    }
    async function _Complete() {
      // console.log('this is the PUT req', item)
      await useAjax({ url: `${url}${item._id}`, body: item, method: 'put' });
      // console.log('this is the result from the PUT', results)
    }
    _Complete();
  };

  function handleDelete(id) {
    async function _handleDelete(id) {
      await useAjax({ url: url + id, method: 'delete' });
      let newList = list.filter(item => item._id !== id);
      return setList(newList);
    }
    _handleDelete(id);
  }


  useEffect(() => {
    async function _getData() {
      // let res = {};
      let res = await useAjax({ url, method: 'get' });
      console.log('this is the res back from api', res)
      setList(res.data.results)
    }
    _getData();
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
                // setList={setList}
                handleComplete={toggleComplete}
                handleDelete={handleDelete}
              />
            </div>
          </Col>
        </Row>
      </Container>

    </>
  );
}


export default ToDo;
