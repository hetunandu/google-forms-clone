import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from "@material-ui/core/Paper";
import { updateAnswer } from "../../actions/answers";
import '../../styles/components.scss';

interface Props {
  settings: {
    question: string,
    options: Array<string>,
  },
  id: string,
  answers: {
    [id: string]: string,
  };
  updateAnswer: (id: string, value: string) => void;
}

class RadioInputView extends Component<Props> {
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
    const { settings: { question, options }, id, answers } = this.props;
    return (
      <Paper className="view-form-component">
        <FormControl>
          <FormLabel component="legend">{question}</FormLabel>
          <RadioGroup
            value={answers[id]}
            onChange={this.handleAnswerChange}
          >
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
  }),
  { updateAnswer }
)(RadioInputView);
