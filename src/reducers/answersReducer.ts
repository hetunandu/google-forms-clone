import { UPDATE_FORM_ANSWER } from '../constants/actionTypes';
import initialState from './initialState';

export default function answersReducer(state = initialState.answers, action) {
  switch (action.type) {
    case UPDATE_FORM_ANSWER:
      return {
        ...state,
        [action.payload.id]: action.payload.value,
      };
    default:
      return state;
  }
}
