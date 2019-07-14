import { UPDATE_FORM_COMPONENT_VALUE } from "../../constants/actionTypes";

export default (id: string, value: Object ) => {
  return {
    type: UPDATE_FORM_COMPONENT_VALUE,
    payload: { id, value },
  }
}
