import React from 'react';
import './home.scss';
import TodoList from './components/Todos/TodoList'
import AddTodos from './components/Todos/AddTodos'

const Home = ()=> (
      <div className="App">
        <TodoList/>
        <AddTodos/>
      </div>
    );
  


export default Home;
