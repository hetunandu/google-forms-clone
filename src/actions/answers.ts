import { UPDATE_FORM_ANSWER } from "../constants/actionTypes";

export const updateAnswer = (id:string, value: any) => {
  return {
    type: UPDATE_FORM_ANSWER,
    payload: { id, value },
  }
};
