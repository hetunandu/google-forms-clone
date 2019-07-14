import { ADD_FORM_COMPONENT } from "../../constants/actionTypes";


export default (component) => {
  return {
    type: ADD_FORM_COMPONENT,
    payload: component,
  }
}
