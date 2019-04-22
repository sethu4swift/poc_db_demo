import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
// import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger'
import PouchDB from 'pouchdb-browser'
import { persistentStore } from 'redux-pouchdb'

/**
 * Lets you dispatch special actions with a { promise } field.
 *
 * This middleware will turn them into a single action at the beginning,
 * and a single success (or failure) action when the `promise` resolves.
 *
 * For convenience, `dispatch` will return the promise so the caller can wait.
 */
const readyStatePromise = store => next => action => {
  console.log(':::', action)
  if (!action.promise) {
    return next(action)
  }

  function makeAction(ready, data) {
    const newAction = Object.assign({}, action, { ready }, data)
    delete newAction.promise
    return newAction
  }

  next(makeAction(false))
  return action.promise.then(
    result => next(makeAction(true, { result })),
    error => next(makeAction(true, { error }))
  )
}

/**
 * Lets you dispatch promises in addition to actions.
 * If the promise is resolved, its result will be dispatched as an action.
 * The promise is returned from `dispatch` so the caller may handle rejection.
 */
// const vanillaPromise = store => next => (action) => {
//   if (typeof action.then !== 'function') {
//     return next(action);
//   }

//   return Promise.resolve(action).then(store.dispatch);
// };

const storeCreator = (reducers, props) => {
  const { isProduction, showLoggers, couchDBName, couchDBUrlConnector } = props
  let { loggerOptions } = props

  const reducersObj = combineReducers(reducers)

  if (showLoggers !== undefined) {
    loggerOptions = { ...loggerOptions, predicate: () => showLoggers }
  }

  const loggerMiddleware = createLogger(loggerOptions)

  let persistentStoreObject = () => {}
  if (couchDBName) {
    const localDB = new PouchDB(couchDBName)

    if (couchDBUrlConnector) {
      let remoteDB = new PouchDB(couchDBUrlConnector + '/' + couchDBName)

      localDB.replicate
        .to(remoteDB, {
          live: true,
          retry: true
        })
        .on('complete', function() {
          console.log('local sync')
        })
        .on('error', function(err) {
          console.error('local error', err)
        })

      // remoteDB.replicate.to(localDB, {
      //   live: true,
      //   retry: true
      // }).on('complete', function () {
      //   console.log('remote sync')
      // }).on('error', function (err) {
      //   console.error('remote error', err)
      // });
    }
    persistentStoreObject = persistentStore(localDB, data => {
      console.log('data', data)
    })
  }

  const store = isProduction
    ? createStore(
        reducersObj,
        compose(
          applyMiddleware(
            // thunkMiddleware,
            readyStatePromise
            // vanillaPromise,
          ),
          persistentStoreObject
        )
      )
    : createStore(
        reducersObj,
        compose(
          applyMiddleware(
            // thunkMiddleware,
            readyStatePromise,
            // vanillaPromise,
            loggerMiddleware
          ),
          persistentStoreObject,
          window.devToolsExtension ? window.devToolsExtension() : f => f
        )
      )

  // https://github.com/reactjs/react-redux/releases/tag/v2.0.0
  // Hot reloading reducers is now explicit (#80)
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept(reducersObj, () => {
      store.replaceReducer(reducersObj)
    })
  }

  return store
}

export default storeCreator
