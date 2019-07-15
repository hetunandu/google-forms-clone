import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import FormComponent from "./FormComponent";
import '../styles/styles.scss';
import {FormConfig} from "../types/form";


interface Props {
  form: Array<FormConfig<any>>;
}

class FormViewer extends Component<Props> {
  render(): React.ReactNode {
    const { form } = this.props;
    return (
      <Container fixed>
        <Paper className="form-container">
          <h1>Form</h1>
          {form.map(c => <FormComponent mode="VIEW" component={c} key={c.id} />)}
        </Paper>
        <Button>Submit</Button>
      </Container>
    );
  }
}

export default connect(
  state => ({
    form: state.form,
  })
)(FormViewer);
