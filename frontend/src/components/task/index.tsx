import * as React from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';
import DeleteIcon from '../../components/delete-icon';
import { removeTask } from '../../state/actions/tasks';
import './style.css';

export interface OwnProps {
  taskName: string,
  id: string,
  parentId: string
};

export interface DispatchProps {
  removeTask: (id: string) => void
};

type Props = OwnProps & DispatchProps;

class Task extends React.PureComponent<Props> {

  handleRemoveTask = () => {
    this.props.removeTask(this.props.id)
  };

  render() {
    const { taskName } = this.props;

    return (
      <div className='task-container'>
        <DeleteIcon onClick={this.handleRemoveTask} />
        {taskName}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: Redux.Dispatch): DispatchProps => ({
  removeTask: (id: string) => dispatch(removeTask(id))
});

export default connect(null, mapDispatchToProps)(Task);
