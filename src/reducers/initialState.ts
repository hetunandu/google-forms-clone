import uuid from 'uuid/v4';
import { STATIC_TEXT_COMPONENT } from "../constants/componentTypes";

export default {
  form: [
    {
      id: uuid(),
      type: STATIC_TEXT_COMPONENT,
      settings: {
        value: 'Form title',
        fontSize: 30,
      },
    }
  ]
};
