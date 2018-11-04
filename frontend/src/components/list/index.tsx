import * as React from 'react';
import { connect } from 'react-redux';
import { chooseTasks } from '../../state/selectors/tasks';
import Task from '../task';
import './style.css';

export interface DispatchProps {
  removeList: (id: number) => void
};

export interface StateProps {
  tasks: any
};

export interface OwnProps {
  stage: string,
  tasks: any,
  id: number
};

type Props = StateProps & OwnProps;

class List extends React.PureComponent<Props> {

  render() {
    const { stage, tasks, id } = this.props;
    return (
      <div className='list-container'>
        <div className="Lists-listsContent-header">
          <h4>{`${stage}`}</h4>
          {(tasks && tasks.length > 0) && tasks.map((task: any, inx: number) => (
            <Task
              key={inx}
              taskName={task.taskName}
              parentId={id}
              id={task._id} />
          ))}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state: any, props: any): StateProps {
  return {
    tasks: chooseTasks(state.tasks.tasks, props.id, props.stage)
  }
};

export default connect(mapStateToProps, null)(List);
