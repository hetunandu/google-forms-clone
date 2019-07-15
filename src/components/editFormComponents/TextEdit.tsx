import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

import { updateComponent } from '../../actions/form';
import '../../styles/components.scss';

interface Props {
  id: string;
  settings: {
    value: string;
    fontSize: number;
  },
  type: string;
  updateComponent: (id:string, update: { value?: string, fontSize?: number }) => void;
}

class TextEdit extends Component<Props> {
  constructor(props) {
    super(props);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleFontSizeChange = this.handleFontSizeChange.bind(this);
  }
  handleValueChange(e: React.ChangeEvent<{ value: string }>) {
    const { id, updateComponent } = this.props;
    const newValue = e.target.value;
    updateComponent(id, { value: newValue });
  }
  handleFontSizeChange(event: React.ChangeEvent<{ value: number }>) {
    const { id, updateComponent } = this.props;
    const newValue = event.target.value;
    updateComponent(id, { fontSize: newValue });
  }
  render() {
    const { settings: { value, fontSize } } = this.props;
    return (
      <Paper className="edit-component-container">
        <div className="component-type">
          Static
        </div>
        <div className="settings">
          <FormControl className="value-field">
            <TextField
              label="Text"
              placeholder="Text you want to display"
              value={value}
              onChange={this.handleValueChange}
              margin="normal"
            />
          </FormControl>
          <FormControl>
            <InputLabel>Font Size</InputLabel>
            <Select
              value={fontSize}
              onChange={this.handleFontSizeChange}
              inputProps={{ name: 'fontSize' }}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={13}>13</MenuItem>
              <MenuItem value={16}>16</MenuItem>
              <MenuItem value={20}>20</MenuItem>
            </Select>
          </FormControl>
        </div>
      </Paper>
    )
  }
}

export default connect(
  null,
  { updateComponent }
)(TextEdit);
