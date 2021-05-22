import './App.css';
import React, { useContext } from 'react';
import { If, Else, Then } from 'react-if';
import ToDo from './components/todo/todo.js';
import { Navbar } from 'react-bootstrap';
import { LoginContext } from './components/auth/context.js';
import Login from './components/auth/login.js';
import SignUp from './components/auth/signUp.js';

// import Auth from './components/auth/auth.js';

// const EditLink = () => {
//   return (
//     <Auth capability="update">
//       <span>Edit</span>
//     </Auth>
//   );
// };

// const DeleteLink = () => {
//   return (
//     <Auth capability="delete">
//       <span>Delete</span>
//     </Auth>
//   );
// };


export default function App() {
  const loginContext = useContext(LoginContext);
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand className="ml-1" href="#home">Home</Navbar.Brand>
        <Login />
        <SignUp />
      </Navbar>
      <If condition={loginContext.loggedIn}>
        <Then>
          <ToDo />
        </Then>
        <Else>
          <div></div>
        </Else>
      </If>
    </>
  );
}