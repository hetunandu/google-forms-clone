import { combineReducers } from 'redux';
import form from './formReducer';
import { connectRouter } from 'connected-react-router'

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  form,
});

export default rootReducer;
