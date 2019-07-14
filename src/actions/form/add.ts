import { ADD_FORM_COMPONENT } from "../../constants/actionTypes";


export default (component: { type: string, id: string }) => {
  return {
    type: ADD_FORM_COMPONENT,
    payload: component,
  }
}
