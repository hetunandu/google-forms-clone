import { ADD_FORM_COMPONENT, UPDATE_FORM_COMPONENT } from '../constants/actionTypes';
import initialState from './initialState';

export default function formReducer(state = initialState.form, action) {
  switch (action.type) {
    case ADD_FORM_COMPONENT:
      return state.concat([action.payload]);

    case UPDATE_FORM_COMPONENT:
      return state.map(c => {
        if(action.payload.id === c.id) {
          return ({
            ...c,
            settings: {
              ...c.settings,
              ...action.payload.update
            }
          });
        }
        return c;
      });

    default:
      return state;
  }
}
