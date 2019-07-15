import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import { updateComponent } from '../actions/form';
import '../styles/components.scss';

interface Props {
  id: string;
  settings: {
    question: string;
    maxChars: number;
  },
  type: string;
  updateComponent: (id:string, update: { question?: string, maxChars?: number; }) => void;
}

class TextInputComponent extends Component<Props> {
  constructor(props) {
    super(props);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleMaxCharsChange = this.handleMaxCharsChange.bind(this);
  }
  handleValueChange(e: React.ChangeEvent<{ value: string }>) {
    const { id, updateComponent } = this.props;
    const newValue = e.target.value;
    updateComponent(id, { question: newValue });
  }
  handleMaxCharsChange(e: React.ChangeEvent<{ value: number }>) {
    const { id, updateComponent } = this.props;
    const newValue = e.target.value;
    updateComponent(id, { maxChars: newValue });
  }
  render() {
    const { settings: { question, maxChars } } = this.props;
    return (
      <div className="text-component-container">
        <FormControl className="value-field">
          <TextField
            label="Question"
            placeholder="Question"
            value={question}
            onChange={this.handleValueChange}
            margin="normal"
          />
        </FormControl>
        <FormControl className="value-field">
          <TextField
            label="Max Characters"
            placeholder="Max"
            value={maxChars}
            onChange={this.handleValueChange}
            margin="normal"
          />
        </FormControl>
      </div>
    )
  }
}

export default connect(
  null,
  { updateComponent }
)(TextInputComponent);
