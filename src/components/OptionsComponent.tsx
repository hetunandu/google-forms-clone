import React, { Component } from 'react';
import { connect } from 'react-redux';

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import {updateComponent} from "../actions/form";


interface Props {
  id: string,
  settings: {
    options: Array<string>
  },
  updateComponent: (id:string, update: { options?: Array<string> }) => void;
}

interface State {
  showOptionFormDialog: boolean,
  optionText: string,
}

class OptionsComponent extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleAddNewOptionClick = this.handleAddNewOptionClick.bind(this);
    this.handleCloseOptionModal = this.handleCloseOptionModal.bind(this);
    this.handleSaveOption = this.handleSaveOption.bind(this);

    this.state = {
      showOptionFormDialog: false,
      optionText: '',
    }

  }
  handleOptionChange(e: React.ChangeEvent<{ value: string }>) {
    const newValue = e.target.value;
    this.setState({
      optionText: newValue,
    })
  }
  handleAddNewOptionClick() {
    this.setState({
      showOptionFormDialog: true,
    })
  }
  handleCloseOptionModal() {
    this.setState({
      showOptionFormDialog: false,
    })
  }
  handleSaveOption() {
    const { optionText } = this.state;
    const { id, updateComponent, settings: { options } } = this.props;
    const newOptions = options.concat([optionText]);
    updateComponent(id, { options: newOptions });
    this.setState({ optionText: '', showOptionFormDialog: false });
  }

  render() {
    const { showOptionFormDialog, optionText } = this.state;
    const { settings: { options } } = this.props;
    return (
      <React.Fragment>
        <List>
          {options.map(o => (
            <ListItem key={o}>
              <ListItemText>{o}</ListItemText>
            </ListItem>
          ))}
        </List>
        <Button onClick={this.handleAddNewOptionClick}>Add Option</Button>
        <Dialog open={showOptionFormDialog} onClose={this.handleCloseOptionModal}>
          <DialogTitle>Add option text</DialogTitle>
          <DialogContent>
            <TextField
              label="Option"
              placeholder="Option Text"
              onChange={this.handleOptionChange}
              value={optionText}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCloseOptionModal} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSaveOption} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { updateComponent }
)(OptionsComponent);
