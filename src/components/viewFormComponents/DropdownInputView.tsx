import React, { Component } from 'react';
import { connect } from 'react-redux'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Paper from "@material-ui/core/Paper";
import '../../styles/components.scss';

interface Props {
  settings: {
    question: string,
    options: Array<string>,
  }
}

class DropdownInputView extends Component<Props> {
  render() {
    const { settings: { question, options } } = this.props;
    return (
      <Paper className="view-form-component">
        <FormControl>
          <p>{question}</p>
          <Select>
            {options.map(o => <MenuItem value={o} key={o}>{o}</MenuItem>)}
          </Select>
        </FormControl>
      </Paper>
    )
  }
}

export default connect(
  state => ({
    answers: state.answers
  })
)(DropdownInputView);
