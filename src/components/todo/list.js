import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';



function TodoList (props) {
  const deleteItem = (id) => {
    props.setList(props.list.filter(item => item._id !== id));
  };

    return (
      <ul>
        {props.list.map(item => (
          <ListGroup.Item style={{cursor:'pointer',height:'3rem'}} variant={(item.complete) ? 'danger' : 'success'}
            className={`complete-${item.complete.toString()}`}
            key={item._id}>
            <span onClick={() => props.handleComplete(item._id)}>
              {item.text}
            </span>
            {/* <button onClick={() => deleteItem(item._id)}>Delete</button> */}
            <Button style={ {height:'2rem',float:'right'}} onClick={() => deleteItem(item._id)} variant="dark" type="submit">Delete</Button>
            </ListGroup.Item>        
            ))}
      </ul>
    );
  }

export default TodoList;
