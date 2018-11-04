import * as React from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';
import Lists from '../../components/lists';
import { fetchAllLists } from '../../state/actions/lists';
import './style.css';

interface StateProps {
  lists: any
};

interface DispatchProps {
  fetchAllLists: () => void
};

export interface State {
  editTitle: boolean
};

type Props = StateProps & DispatchProps;

class BoardWithAllLists extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      editTitle: false
    };
  }

  public componentDidMount() {
    this.props.fetchAllLists();
  };

  render() {

    const { lists } = this.props;

    return (
      <div className='board-with-all-lists-container'>
        <h1>Lists</h1>
        <div className='board-with-lists'>
          {(lists.length > 0) && lists.map((list: any, index: number) => (
            <Lists
              key={index}
              title={list.title}
              day={list.day}
              month={list.month}
              year={list.year}
              _id={list._id}
              owner={list.owner} />
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: any): StateProps {
  return {
    lists: state.lists.lists
  }
};

const mapDispatchToProps = (dispatch: Redux.Dispatch): DispatchProps => ({
  fetchAllLists: () => dispatch(fetchAllLists())
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardWithAllLists);
