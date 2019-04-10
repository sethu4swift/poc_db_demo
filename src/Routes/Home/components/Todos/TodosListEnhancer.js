import { connect } from 'react-redux'
import { toggleTodo } from './actions'

export default connect(
    ({todos}) => ({
        todos: todos
      }),
      dispatch => ({
        toggleTodo: id => dispatch(toggleTodo(id))
      })
)