import React, { useState, useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import useFetch from './hooks/ajax';

import './todo.scss';

const ToDo = (props) => {

  const [list, setList] = useState([]);
  const [ data ] = useFetch({ url: 'https://api-js401.herokuapp.com/api/v1/todo', method: 'get' });

  console.log('todo data:', data );

  const addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    setList( [...list, item] );
  };

  const toggleComplete = (id) => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let newList = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList( newList );
    }

  };


  useEffect(() => {
    if(data){
      
      setList( data.results );
    }
  }, [data]);
 
  return (
    <>
        <section id='form-header'>
          <h2 data-testid="display-head" >
          There are {list.filter(item => !item.complete).length} Items To Complete
          </h2>
        </section>

      <section id='form-space' className="todo">

        <div>
          <TodoForm handleSubmit={addItem} />
        </div>

        <div>
          <TodoList
            list={list}
            handleComplete={toggleComplete}
          />
        </div>
      </section>
    </>
  );
};


export default ToDo;