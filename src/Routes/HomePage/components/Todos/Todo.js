import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ completed, text, toggleTodo, removeTodo }) => (
  <li className={`list-group-item  text-center ${completed ? 'active' : ''}`}>
    <button
      type="button"
      className="btn btn-secondary btn-sm float-left"
      onClick={toggleTodo}
    >
      √
    </button>
    {text}
    <button
      type="button"
      className="btn btn-danger btn-sm float-right"
      onClick={removeTodo}
    >
      x
    </button>
  </li>
);

Todo.propTypes = {
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
