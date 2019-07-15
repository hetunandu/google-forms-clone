import React, { Component } from 'react';
import uuid from 'uuid/v4';
import { connect } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import DownloadIcon from '@material-ui/icons/TrendingDown';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';

import { DEFAULT_SETTINGS } from '../constants/componentTypes';
import FormComponent from './FormComponent';
import { addComponent } from '../actions/form';

import '../styles/styles.scss'

interface Props {
  addComponent: (payload: { id: string, type: string, settings: Object }) => void;
  form: Array<{
    id: string,
    type: string,
  }>
}

interface State {
  showSelectionModal: boolean;
}

class Form extends Component<Props, State> {
  controls: {
    downloadAnchor?: HTMLAnchorElement | null;
  } = {};
  constructor(props) {
    super(props);
    this.handleAddComponentClick = this.handleAddComponentClick.bind(this);
    this.handleSelectionModalClose = this.handleSelectionModalClose.bind(this);
    this.handleSelectComponentType = this.handleSelectComponentType.bind(this);
    this.handleDownloadFormClick = this.handleDownloadFormClick.bind(this);
    this.state = {
      showSelectionModal: false,
    }
  }
  handleSelectionModalClose() {
    this.setState({
      showSelectionModal: false,
    });
  }
  handleAddComponentClick() {
    this.setState({
      showSelectionModal: true,
    })
  }
  handleDownloadFormClick() {
    const { form } = this.props;
    const { downloadAnchor } = this.controls;
    const jsonStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(form));
    if(downloadAnchor) {
      downloadAnchor.setAttribute("href", jsonStr);
      downloadAnchor.setAttribute("download", "formConfig.json");
      downloadAnchor.click();
    }
  }
  handleSelectComponentType(componentSettings: { type: string, defaultSettings: Object }) {
    const { type, defaultSettings } = componentSettings;
    this.handleSelectionModalClose();
    this.props.addComponent({
      id: uuid(),
      type,
      settings: defaultSettings,
    })
  }
  render() {
    const { form } = this.props;
    const { showSelectionModal } = this.state;
    return (
      <Container fixed>
        <Dialog open={showSelectionModal} onClose={this.handleSelectionModalClose} >
          <DialogTitle id="simple-dialog-title">Select Component type</DialogTitle>
          <List>
            {DEFAULT_SETTINGS.map(s => (
              <ListItem button onClick={() => this.handleSelectComponentType(s)} key={s.type}>
                <ListItemText>{s.label}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Dialog>
        <Paper className="form-container">
          <h2>Form builder</h2>
          {form.map(c => <FormComponent {...c} key={c.id} />)}
          <Button
            variant="contained"
            color="secondary"
            onClick={this.handleAddComponentClick}
          >
            <AddIcon />
            Add Component
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.handleDownloadFormClick}
          >
            <DownloadIcon />
            Download Config
          </Button>
          <a ref={ref => this.controls.downloadAnchor = ref} />
        </Paper>
      </Container>
    )
  }
}

export default connect(
  state => ({
    form: state.form
  }),
  { addComponent }
)(Form);
