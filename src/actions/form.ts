import {ADD_FORM_COMPONENT, UPDATE_FORM_COMPONENT} from "../constants/actionTypes";

export const addComponent = (component: { type: string, id: string }) => {
  return {
    type: ADD_FORM_COMPONENT,
    payload: component,
  }
};

export const updateComponent = (id: string, update: Object ) => {
  return {
    type: UPDATE_FORM_COMPONENT,
    payload: { id, update },
  }
};
