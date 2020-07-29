import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga'
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

export const configureStore = ( initialState={} ) => {
  const sagaMiddleware = createSagaMiddleware()
  const composeEnhancers =
    (typeof window !== "undefined" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||   
    compose;
  const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
  const store = createStore(
    rootReducer,
    initialState,
    enhancer
  );
  sagaMiddleware.run(rootSaga)
  return store;
};
