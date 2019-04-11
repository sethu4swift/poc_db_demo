import { persistentReducer } from 'redux-pouchdb';
import storeCreator from './StoreCreator';
import todos from './todos'


const showLoggers = false;
const isProduction = false;
const couchDBName = 'poc';
// const couchDBUrlConnector = false;
const couchDBUrlConnector = 'https://couchdb-44755c.smileupps.com';

export default storeCreator(
  {
    todos: persistentReducer(todos),
  },
  { isProduction, showLoggers, couchDBName, couchDBUrlConnector },
);