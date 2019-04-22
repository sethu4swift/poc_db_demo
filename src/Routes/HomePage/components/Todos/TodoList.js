import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import enhancer from './TodosListEnhancer'

const TodoList = ({ todos, toggleTodo, removeTodo }) => (
  <ul className="list-group">
    {todos.map(todo => (
      <Todo
        key={todo.id}
        {...todo}
        toggleTodo={() => toggleTodo(todo.id)}
        removeTodo={() => removeTodo(todo.id)}
      />
    ))}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default enhancer(TodoList)
