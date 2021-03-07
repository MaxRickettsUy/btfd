import {combineReducers} from 'redux';
import holdings from './holdings'
import themes from './themes'

export default combineReducers({
  holdings,
  themes
})