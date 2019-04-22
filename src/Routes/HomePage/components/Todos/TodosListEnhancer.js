import { connect } from 'react-redux';
import { toggleTodo, removeTodo } from './actions';

export default connect(
  ({ todos }) => ({
    todos: todos
  }),
  dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    removeTodo: id => dispatch(removeTodo(id))
  })
);
