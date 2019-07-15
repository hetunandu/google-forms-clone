import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import EditIcon from "@material-ui/icons/Edit";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import FormComponent from "./FormComponent";
import '../styles/styles.scss';
import {FormConfig} from "../types/form";


interface Props {
  form: Array<FormConfig<any>>;
  history: {
    push: (path: string) => void;
  }
}

class FormViewer extends Component<Props> {
  render(): React.ReactNode {
    const { form, history } = this.props;
    return (
      <Container maxWidth="md">
        <Paper className="form-container">
          <h2 className="form-title">Form</h2>
          {form.map(c => <FormComponent mode="VIEW" component={c} key={c.id} />)}
        </Paper>
        <div className="form-actions">
          <Button
            className="button"
            variant="contained"
            color="secondary"
          >
            Submit
          </Button>
          <Button
            className="button"
            variant="contained"
            color="primary"
            onClick={() => history.push('/')}
          >
            <EditIcon />
            Edit form
          </Button>
        </div>
      </Container>
    );
  }
}

export default connect(
  state => ({
    form: state.form,
  })
)(FormViewer);
