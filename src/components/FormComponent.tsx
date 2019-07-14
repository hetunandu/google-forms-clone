import React, { Component } from 'react';
import TextComponent from './TextComponent';

interface Props {
  type: string,
}

class FormComponent extends Component<Props> {
  render() {
    const { type } = this.props;
    switch (type) {
      case 'Text':
        return <TextComponent {...this.props} />;
    }
  }
}

export default FormComponent;
