import React from 'react';
import './App.css';
import ToDo from './components/todo/todo.js';
import  {Navbar}  from 'react-bootstrap';


export default function App() {

  return (
    <>
    <Navbar bg="primary" variant="dark">
    <Navbar.Brand className="ml-1" href="#home">Home</Navbar.Brand>
  </Navbar>
      <ToDo />
    </>
  );
}