import * as React from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';
import Lists from '../../components/lists';
import { fetchAllLists } from '../../state/actions/lists';

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
      <div className="App">Lists
        <div className="board-with-lists">
          {(lists.length > 0) && lists.map((list: any, index: number) => (
            <React.Fragment key={index}>
              <span>{list.title}</span>
              <Lists
                title={list.title}
                day={list.day}
                month={list.month}
                year={list.year}
                _id={list._id}
                owner={list.owner} />

            </React.Fragment>))}
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
