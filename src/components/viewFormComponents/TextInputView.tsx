import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

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
    );
  }
}

export default connect(
  state => ({
    answers: state.answers
  })
)(TextInputView);
