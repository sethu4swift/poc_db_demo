import { combineReducers, createStore } from 'redux'
import { persistentStore } from 'redux-pouchdb';
import todos from './todos'
import PouchDB from 'pouchdb-browser'

 
const db = new PouchDB('dbname');
 

const createStoreWithMiddleware = persistentStore(db)(createStore);
 
const rootReducer = combineReducers({
  todos
})


const store = createStoreWithMiddleware(rootReducer);
 

export default store