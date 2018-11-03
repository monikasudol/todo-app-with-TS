import * as React from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';
import { removeList, editListTitle } from '../../state/actions/lists';
import { fetchTasks } from '../../state/actions/tasks';
import DeleteIcon from '../../components/delete-icon';
import List from '../list';
import AddTask from '../add-task';
import './style.css';

export interface DispatchProps {
  editListTitle: (title: string, id: string) => void,
  removeList: (_id: string) => void,
  fetchTasks: () => void
};

export interface OwnProps {
  title: string,
  day: any,
  month: any,
  year: any
  _id: string,
  onRemoveList: any,
  onEditListTitle: any
};

export interface State {
  editTitle: boolean,
  title: string,
  showList: boolean
};

type Props = DispatchProps & OwnProps;

class Lists extends React.Component<Props, State, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      editTitle: false,
      title: this.props.title,
      showList: false
    }
  }

  onEditTitle = () => {
    this.setState({
      editTitle: true
    });
  }

  editTitleName = (event: any) => {
    const title = event.target.value;
    this.setState({ title });
  };

  onRemoveList = () => {
    const { _id } = this.props;
    this.props.removeList(_id);
  };

  showList = () => {
    this.setState({ showList: true });
  };

  onChangeTitle = () => {
    this.setState({ editTitle: true });
  };

  onEditListTitle = () => {
    this.setState({ editTitle: false })
    const { title } = this.state;
    this.props.editListTitle(title, this.props._id);
  };

  handleChangeTitle = (event: any) => {
    const title = event.target.value;
    this.setState({ title });
  };

  public componentDidMount()  {
    this.props.fetchTasks();
  }

  render() {
    const { title, day, _id } = this.props;
    const { editTitle } = this.state;
    return (
      <div className='lists-box'>
        <DeleteIcon onClick={this.onRemoveList}/>
        {editTitle ?
          <input
            value={this.state.title}
            type='text'
            onBlur={this.onEditListTitle}
            onChange={this.handleChangeTitle} /> :
          <div
            onClick={this.onChangeTitle}
            className='lists-title'>
            {title}
          </div>}
        <div className='lists-deadline'>
          Deadline {day}
        </div>
        <div className='lists-container'>
          <List
            id={_id}
            stage='to do' />
          <List
            id={_id}
            stage='in progress' />
          <List
            id={_id}
            stage='done' />
        </div>
        <AddTask id={_id} />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: Redux.Dispatch): DispatchProps => ({
  editListTitle: (title: string, _id: string) => dispatch(editListTitle(title, _id)),
  removeList: (_id: string) => dispatch(removeList(_id)),
  fetchTasks: () => dispatch(fetchTasks())
});

export default connect(null, mapDispatchToProps)(Lists);
