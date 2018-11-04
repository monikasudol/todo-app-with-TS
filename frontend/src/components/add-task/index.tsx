import * as React from 'react';
import * as Redux from 'redux';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import ClassicInput from '../classic-input';
import { createNewTask } from '../../state/actions/tasks';
import './style.css';

export interface OwnProps {
  id: string,
  onChange: any,
};

export interface DispatchProps {
  createNewTask: (parentId: string, taskName: string, worker: string) => void
};

export interface State {
  worker: string,
  taskName: string
};

type Props = DispatchProps & OwnProps 

class AddTask extends React.Component<Props, State> {
   state = {
     worker: '',
     taskName: ''
  };

  handleTaskName = (taskName: string) => {
    this.setState({ taskName });
  };

  handleWorker = (worker: string) => {
    this.setState({ worker });
  };

  handleCreateNewTask = () => {
    const { worker, taskName } = this.state;
    const parentId = this.props.id;
    this.props.createNewTask(parentId, taskName, worker);
  };
  
  render() {
  
    return (
      <div className='add-task__container'>
        <ClassicInput
          label='task name'
          type='text'
          placeholder='task name'
          value={this.state.taskName}
          onChange={this.handleTaskName}
        />
        <ClassicInput
          label='worker'
          type='text'
          placeholder='worker'
          value={this.state.worker}
          onChange={this.handleWorker}
        />
        <Button variant="outlined" onClick={this.handleCreateNewTask}>
          Add task
        </Button>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch: Redux.Dispatch): DispatchProps => ({
  createNewTask: (parentId: string, taskName: string, worker: string) =>
    dispatch(createNewTask(parentId, taskName, worker))
});

export default connect(null, mapDispatchToProps)(AddTask);
