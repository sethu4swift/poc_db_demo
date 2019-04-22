import React from 'react'
import TodoList from './components/Todos/TodoList'
import AddTodos from './components/Todos/AddTodos'

const Home = () => (
  <div className="row pt-3">
    <div className="col">
      <TodoList />
    </div>
    <div className="col">
      <AddTodos />
    </div>
  </div>
)

export default Home
