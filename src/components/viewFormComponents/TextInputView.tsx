import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";

import { updateAnswer } from "../../actions/answers";
import '../../styles/components.scss';

interface Props {
  settings: {
    question: string,
    maxChars: number,
  },
  id: string,
  answers: {
    [id: string]: string,
  };
  updateAnswer: (id: string, value: string) => void;
}

class TextInputView extends Component<Props> {
  constructor(props) {
    super(props);
    this.handleAnswerChange = this.handleAnswerChange.bind(this);
  }
  handleAnswerChange(e: React.ChangeEvent<{ value: string }>) {
    const {updateAnswer, id} = this.props;
    const value = e.target.value;
    updateAnswer(id, value)
  }

  render() {
    const { id, settings: { question, maxChars }, answers } = this.props;
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
            onChange={this.handleAnswerChange}
            value={answers[id]}
          />
        </FormControl>
      </Paper>
    );
  }
}

export default connect(
  state => ({
    answers: state.answers
  }),
  {
    updateAnswer,
  }
)(TextInputView);
