
import React from 'react';
import '../src/styles.scss'
import '../src/todoS.scss'
import ToDo from './components/todo/todo.js';
import Header from './header'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';


export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />


<div id='todo-holder'>
    <ToDo />
    
        </div>
       
      </>
    );
  }
}