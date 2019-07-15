import React, { Component } from 'react';
import { FormConfig, TextSettings } from '../../types/form';

type Props = FormConfig<TextSettings>;

class TextView extends Component<Props> {
  render() {
    const { settings: { value, fontSize } } = this.props;
    return (
      <p style={{ fontSize }}>{value}</p>
    );
  }
}

export default TextView;
