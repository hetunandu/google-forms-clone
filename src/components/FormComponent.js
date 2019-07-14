import React, { Component } from 'react';
import TextComponent from './TextComponent';

class FormComponent extends Component {
  render() {
    const { type } = this.props;
    switch (type) {
      case 'Text':
        return <TextComponent {...this.props} />;
    }

  }
}

export default FormComponent;
