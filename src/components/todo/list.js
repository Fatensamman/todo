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
          <ListGroup.Item style={{cursor:'pointer',height:'3rem'}} variant={(item.complete) ? 'success':'danger'}
            className={`complete-${item.complete.toString()}`}
            key={item._id}
            onClick={() => props.handleComplete(item._id)}
            >
            <span >
              {item.text}
            </span>
            {/* <button onClick={() => deleteItem(item._id)}>Delete</button> */}
            <Button style={ {height:'2rem',float:'right'}} onClick={() => deleteItem(item._id)} variant="dark" type="submit">Delete</Button>
            </ListGroup.Item>        
            ))}
      </ul>
    );
  }
// import React from 'react';
// import { Toast, Badge } from 'react-bootstrap';

// const TodoList = (props) => {

//   return (

//     <ListGroup>
//       {props.list.map(item => (
//         <Toast
//           // action
//           // variant={item.complete ? "danger" : "success"}
//           className={`complete-${item.complete.toString()}`}
//           key={item._id}
//           onClick={() => props.handleComplete(item._id)}
//         >
//           <Toast.Header>
//             <Badge pill variant={item.complete ? "danger" : "success"}>{item.complete ? "Complete" : "Pending..."}</Badge>{" "}
//             <strong className="mr-auto" style={{marginLeft : '20px'}}>Name</strong>
//           </Toast.Header>
//           <Toast.Body >
//             {item.text}
//             <div class="difficultly">difficulty</div>
//           </Toast.Body>
//         </Toast>
//       ))}
//     </ListGroup>
//   );
// }

export default TodoList;