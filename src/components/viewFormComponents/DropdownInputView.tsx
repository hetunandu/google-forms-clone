import React, { Component } from 'react';
import { connect } from 'react-redux'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Paper from "@material-ui/core/Paper";
import '../../styles/components.scss';
import { updateAnswer } from "../../actions/answers";


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

class DropdownInputView extends Component<Props> {
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
    const { settings: { question, options }, id, answers  } = this.props;
    return (
      <Paper className="view-form-component">
        <FormControl>
          <p>{question}</p>
          <Select
            value={answers[id]}
            onChange={this.handleAnswerChange}
          >
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
  }),
  { updateAnswer }
)(DropdownInputView);
