import React, { Component } from 'react';
import uuid from 'uuid/v4';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import AddIcon from '@material-ui/icons/Add';
import DownloadIcon from '@material-ui/icons/VerticalAlignBottom';
import ViewIcon from '@material-ui/icons/RemoveRedEye'
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
import {FormConfig} from "../types/form";

interface Props {
  addComponent: (payload: FormConfig<any>) => void;
  form: Array<FormConfig<any>>;
  history: {
    push: (path: string) => void;
  }
}

interface State {
  showSelectionModal: boolean;
}

class FormBuilder extends Component<Props, State> {
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
    const { form, history } = this.props;
    const { showSelectionModal } = this.state;
    return (
      <Container maxWidth="md">
        <Paper className="form-container">
          <h2 className="form-title">Form builder</h2>
          {form.map(c => <FormComponent mode="EDIT" component={c} key={c.id} />)}
        </Paper>
        <div className="form-actions">
          <Button
            className="button"
            variant="contained"
            color="secondary"
            onClick={this.handleAddComponentClick}
          >
            <AddIcon />
            Add Component
          </Button>
          <Button
            className="button"
            variant="contained"
            color="primary"
            onClick={this.handleDownloadFormClick}
          >
            <DownloadIcon />
            Download Config
          </Button>
          <a ref={ref => this.controls.downloadAnchor = ref} />
          <Button
            className="button"
            variant="contained"
            color="primary"
            onClick={() => history.push('view')}
          >
            <ViewIcon />
            View form
          </Button>
        </div>
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
      </Container>
    )
  }
}

export default withRouter(connect(
  state => ({
    form: state.form
  }),
  { addComponent }
)(FormBuilder));
