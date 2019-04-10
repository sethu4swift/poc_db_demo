import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from './actions'


const AddTodo = ({ addTodo }) => {
  let input

  return (
    <div className="card p-3">
      <form className="form-inline"
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          addTodo(input.value)
          input.value = ''
        }}
      >
        <div className="form-group col-auto">
          <input className="form-control" ref={node => (input = node)} />
        </div>

        <button type="submit" className="btn btn-primary col-auto">Add Todo</button>
      </form>
    </div>
  )
}

export default connect(
  null,
  dispatch => ({
    addTodo: id => dispatch(addTodo(id))
  })
)(AddTodo)

