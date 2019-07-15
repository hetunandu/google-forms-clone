import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

interface Props {
  settings: {
    question: string,
    options: Array<string>,
  }
}

class RadioInputView extends Component<Props> {
  render() {
    const { settings: { question, options } } = this.props;
    return (
      <FormControl>
        <p>{question}</p>
        <Select>
          {options.map(o => <MenuItem value={o} key={o}>{o}</MenuItem>)}
        </Select>
      </FormControl>
    )
  }
}

export default connect(
  state => ({
    answers: state.answers
  })
)(RadioInputView);
