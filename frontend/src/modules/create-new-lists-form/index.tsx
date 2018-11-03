import * as React from 'react';
import * as Redux from 'redux';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { createNewList } from '../../state/actions/lists';
import ClassicInput from '../../components/classic-input';
import DataPicker from '../../components/data-picker';
import LinkButton from '../../components/link-button';

export interface State {
  title: string,
  owner: string,
  day: any,
  month: any,
  year: any
}

interface DispatchProps {
  createNewList: (title: string, owner: string, day: any, month: any, year: any) => void
}

class CreateNewListsForm extends React.Component<DispatchProps, State> {
  state = {
    title: '',
    owner: '',
    day: '',
    month: '',
    year: ''
  };

  handleTitle = (title: string) => {
    this.setState({ title });
  };

  handleOwner = (owner: string) => {
    this.setState({ owner });
  };

  handleCreateNewList = () => {
    const { title, owner, day, month, year } = this.state;
    this.props.createNewList(title, owner, day, month, year);
  };

  handleListDeadline = (day: any) => {
    this.setState({ day });
  };

  render() {
    return (
      <React.Fragment>
        <ClassicInput
          label='title'
          value={this.state.title}
          type='text'
          placeholder='title'
          onChange={this.handleTitle} />
        <ClassicInput
          label='owner'
          value={this.state.owner}
          type='text'
          placeholder='owner'
          onChange={this.handleOwner} />
        <DataPicker onSelect={this.handleListDeadline}/>
        <Button variant="outlined" onClick={this.handleCreateNewList}>
          Add lists
        </Button>
        <LinkButton direction='/lists' text ='Show lists' />
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch: Redux.Dispatch): DispatchProps => ({
  createNewList: (title: string, owner: string, day: any, month: any, year: any) =>
    dispatch(createNewList(title, owner, day, month, year))
});

export default connect(null, mapDispatchToProps)(CreateNewListsForm);
