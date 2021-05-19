import React, { useContext } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { PaginationContext } from '../context/paginationContext';
import { Toast, Badge } from 'react-bootstrap';

const TodoList = (props) => {
  const pagination = useContext(PaginationContext);
  // const deleteItem = (id) => {
  //   props.setList(props.list.filter(item => item._id !== id));
  // };
  return (

    <ListGroup style={{ height: '10rem' }}>
      {pagination.item.map(item => (
        <Toast
          autohide={false} onClose={() => props.handleDelete(item._id)}
          className={`complete-${item.complete.toString()}`}
          key={item._id}
        >
          <Toast.Header>
            <Badge pill variant={item.complete ? "success" : "danger"} onClick={() => props.handleComplete(item._id)} style={{ cursor: 'pointer' }}>{item.complete ? "Complete" : "Pending..."}</Badge>
            <strong className="mr-auto" style={{ marginLeft: '20px' }}>{item.assignee}</strong>
          </Toast.Header>
          <Toast.Body>
            {item.text}
            <br />
            <div style={{ float: 'right' }} class="difficultly">difficulty : {item.difficulty}</div>
          </Toast.Body>
        </Toast>
      ))}
    </ListGroup>
  );
}
export default TodoList;



// import Button from 'react-bootstrap/Button';



// function TodoList (props) {
//   const deleteItem = (id) => {
//     props.setList(props.list.filter(item => item._id !== id));
//   };

//     return (
//       <ul>
//         {props.list.map(item => (
//           <ListGroup.Item style={{cursor:'pointer',height:'3rem'}} variant={(item.complete) ? 'success':'danger'}
//             className={`complete-${item.complete.toString()}`}
//             key={item._id}
//             onClick={() => props.handleComplete(item._id)}
//             >
//             <span >
//               {item.text}
//             </span>
//             {/* <button onClick={() => deleteItem(item._id)}>Delete</button> */}
//             <Button style={ {height:'2rem',float:'right'}} onClick={() => deleteItem(item._id)} variant="dark" type="submit">Delete</Button>
//             </ListGroup.Item>        
//             ))}
//       </ul>
//     );
//   }