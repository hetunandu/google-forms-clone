import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import addFormComponent from '../actions/form/add';
import FormComponent from './FormComponent';
import '../styles/styles.scss'


class Form extends Component {
  constructor(props) {
    super(props);
    this.handleAddComponentClick = this.handleAddComponentClick.bind(this);
  }
  handleAddComponentClick() {
    const newComponent = {
      id: _.uniqueId(),
      type: 'Text',
      value: '',
    };
    this.props.addComponent(newComponent);
  }

  render() {
    const { form } = this.props;
    return (
      <Container fixed>
        <Paper className="form-container">
          {form.map(c => <FormComponent {...c} key={c.id} />)}
          <Button
            variant="contained"
            color="secondary"
            onClick={this.handleAddComponentClick}
          >
            <AddIcon />
            Add Component
          </Button>
        </Paper>
      </Container>
    )
  }
}

export default connect(
  state => ({
    form: state.form
  }),
  {
    addComponent: addFormComponent
  }
)(Form);
