import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/rootReducer'

const logger = createLogger()

let middleware = [];

if (process.env.NODE_ENV === 'development') {
  middleware = [...middleware, thunk, logger];
} else {
  middleware = [...middleware, thunk];
}

export default function configureStore(){
  return createStore(
    rootReducer,
    compose(applyMiddleware(...middleware))
  );
}