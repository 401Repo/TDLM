
import React from 'react';
import '../src/styles.scss'
import '../src/todoS.scss'
import ToDo from './components/todo/todo.js';
import Header from './header'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
// import Login from '../src/components/todo/context/login';
// import AuthContext from '../src/components/todo/context/auth-context';
// import Auth from '../src/components/todo/context/auth';


export default class App extends React.Component {
  render() {
    return (
      <>

{/* <AuthContext>
        <Login />
        <Auth capability="read"> */}
        <Header />


<div id='todo-holder'>
    <ToDo />
    
        </div>
        {/* </Auth>
      </AuthContext> */}
      </>
    );
  }
}