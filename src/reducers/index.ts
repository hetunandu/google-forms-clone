import { combineReducers } from 'redux';
import form from './formReducer';
import answers from './answersReducer';
import { connectRouter } from 'connected-react-router'

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  form,
  answers,
});

export default rootReducer;
