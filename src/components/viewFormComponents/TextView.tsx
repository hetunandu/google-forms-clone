import React, { Component } from 'react';
import Paper from "@material-ui/core/Paper";
import { FormConfig, TextSettings } from '../../types/form';
import '../../styles/components.scss';

type Props = FormConfig<TextSettings>;

class TextView extends Component<Props> {
  render() {
    const { settings: { value, fontSize } } = this.props;
    return (
      <Paper className="view-form-component">
        <span style={{ fontSize }}>{value}</span>
      </Paper>
    );
  }
}

export default TextView;
