import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";
import '../../styles/components.scss';

interface Props {
  settings: {
    question: string,
    maxChars: number,
  }
}

class TextInputView extends Component<Props> {
  render() {
    const { settings: { question, maxChars } } = this.props;
    return (
      <Paper className="view-form-component">
        <FormControl>
          <p>{question}</p>
          <TextField
            InputLabelProps={{ shrink: true }}
            label="Answer"
            inputProps={{
              maxLength: maxChars,
            }}
          />
        </FormControl>
      </Paper>
    );
  }
}

export default connect(
  state => ({
    answers: state.answers
  })
)(TextInputView);
