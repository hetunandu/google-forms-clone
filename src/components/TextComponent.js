import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';

import updateComponentValue from '../actions/form/updateValue';

class TextComponent extends Component {
  constructor(props) {
    super(props);
    this.handleValueChange = this.handleValueChange.bind(this);
  }
  handleValueChange(e) {
    const { id, updateValue } = this.props;
    const newValue = e.target.value;
    updateValue(id, newValue);
  }
  render() {
    const { type, value } = this.props;
    return (
      <TextField
        label={type}
        value={value}
        onChange={this.handleValueChange}
        margin="normal"
      />
    )
  }
}

export default connect(
  null,
  {
    updateValue: updateComponentValue,
  }
)(TextComponent);
