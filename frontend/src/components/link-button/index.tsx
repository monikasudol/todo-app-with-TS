import * as React from 'react';
import { Link } from 'react-router-dom';

export interface Props {
  direction: string,
  text: string
};

class WelcomePage extends React.Component<Props> {

  render() {
    const { direction, text } = this.props;
    return (
      <Link to={direction}>
        {text}
      </Link>
    )
  }
};

export default WelcomePage;
