import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'

import TodoList from './components/Todos/TodoList'
import AddTodos from './components/Todos/AddTodos'
import { doLogout } from '../Login/actionCreators'
import { selectUserInfo } from '../Login/selector'
class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>User email id : {this.props.userEmailId || ''} </div>
        <Button
          type={'button'}
          color="primary"
          className="px-4"
          onClick={() => this.props.logout()}
        >
          LOGOUT
        </Button>
        <div className="row pt-3">
          <div className="col">
            <TodoList />
          </div>
          <div className="col">
            <AddTodos />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToprops = state => {
  return {
    userEmailId: selectUserInfo(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(doLogout())
  }
}

export default (Home = connect(
  mapStateToprops,
  mapDispatchToProps
)(Home))
