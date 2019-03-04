import { createStore, applyMiddleware, compose } from 'redux'
import combinedReducers from '../reducers/combinedReducers'
import createSagaMiddleware from 'redux-saga'
import sagaMonitor from '../sagas/sagaMonitor'
import rootSaga from '../sagas/index.js'
import { loadState, saveState } from './sessionStorage'
import { routesMiddleware } from '../http/Middlewares/routesMiddleware'
import { composeWithDevTools } from 'redux-devtools-extension'

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
})

export default function configureStore(initialState, browserHistory) {

  const sagaMiddleware = createSagaMiddleware({sagaMonitor})
  const persistedState = loadState()
  const store = createStore(
                          combinedReducers,
                          persistedState,
                        compose(
                            applyMiddleware(routesMiddleware),
                            composeEnhancers(applyMiddleware(sagaMiddleware)),
                        )
  );

  sagaMiddleware.run(rootSaga)

  store.subscribe(() => {
    saveState(store.getState())
  })

  return store
}

