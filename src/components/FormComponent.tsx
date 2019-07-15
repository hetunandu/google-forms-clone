import React, { Component } from 'react';
import TextComponent from './TextComponent';
import TextInputComponent from './TextInputComponent';
import RadioInputComponent from './RadioInputComponent';
import DropdownInputComponent from './DropdownInputComponent';

import {
  STATIC_TEXT_COMPONENT,
  TEXT_INPUT_COMPONENT,
  RADIO_INPUT_COMPONENT,
  DROPDOWN_INPUT_COMPONENT,
} from '../constants/componentTypes';

interface Props {
  type: string,
}

class FormComponent extends Component<Props> {
  render() {
    const { type } = this.props;
    switch (type) {
      case STATIC_TEXT_COMPONENT:
        return <TextComponent {...this.props} />;
      case TEXT_INPUT_COMPONENT:
        return <TextInputComponent {...this.props} />;
      case RADIO_INPUT_COMPONENT:
        return <RadioInputComponent {...this.props} />;
      case DROPDOWN_INPUT_COMPONENT:
        return <DropdownInputComponent {...this.props} />;
    }
  }
}

export default FormComponent;
