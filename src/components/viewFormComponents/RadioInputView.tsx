import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from "@material-ui/core/Paper";
import '../../styles/components.scss';

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
      <Paper className="view-form-component">
        <FormControl>
          <FormLabel component="legend">{question}</FormLabel>
          <RadioGroup>
            {options.map(o => (
              <FormControlLabel
                key={o}
                value={o}
                control={<Radio />}
                label={o}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Paper>
    )
  }
}

export default connect(
  state => ({
    answers: state.answers
  })
)(RadioInputView);
