import React, { Component } from 'react';
import TextEdit from './editFormComponents/TextEdit';
import TextInputEdit from './editFormComponents/TextInputEdit';
import RadioInputEdit from './editFormComponents/RadioInputEdit';
import DropdownInputEdit from './editFormComponents/DropdownInputEdit';
import TextView from './viewFormComponents/TextView';
import TextInputView from './viewFormComponents/TextInputView';
import RadioInputView from './viewFormComponents/RadioInputView';
import DropdownInputView from './viewFormComponents/DropdownInputView';

import {
  STATIC_TEXT_COMPONENT,
  TEXT_INPUT_COMPONENT,
  RADIO_INPUT_COMPONENT,
  DROPDOWN_INPUT_COMPONENT,
} from '../constants/componentTypes';

import * as formTypes from '../types/form';

interface Props {
  component: formTypes.FormConfig<formTypes.TextSettings>,
  mode: 'EDIT' | 'VIEW',
}

class FormComponent extends Component<Props> {
  render() {
    const { component, mode } = this.props;
    const { type } = component;
    switch (mode) {
      case "EDIT":
        switch (type) {
          case STATIC_TEXT_COMPONENT:
            return <TextEdit {...component} />;
          case TEXT_INPUT_COMPONENT:
            return <TextInputEdit {...component} />;
          case RADIO_INPUT_COMPONENT:
            return <RadioInputEdit {...component} />;
          case DROPDOWN_INPUT_COMPONENT:
            return <DropdownInputEdit {...component} />;
        }
        break;
      case "VIEW":
        switch (type) {
          case STATIC_TEXT_COMPONENT:
            return <TextView {...component} />;
          case TEXT_INPUT_COMPONENT:
            return <TextInputView {...component} />;
          case RADIO_INPUT_COMPONENT:
            return <RadioInputView {...component} />;
          case DROPDOWN_INPUT_COMPONENT:
            return <DropdownInputView {...component} />;
        }
    }

  }
}

export default FormComponent;
