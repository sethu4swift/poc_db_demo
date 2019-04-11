import { persistentReducer } from 'redux-pouchdb';
import storeCreator from './StoreCreator';
import todos from './todos'


const showLoggers = false;
const isProduction = false;
const couchDBName = 'pocDb';
const couchDBUrlConnector = false;

export default storeCreator(
  {
    todos: persistentReducer(todos),
  },
  { isProduction, showLoggers, couchDBName, couchDBUrlConnector },
);