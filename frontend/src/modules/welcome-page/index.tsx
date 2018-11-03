import * as React from 'react';
import LinkButton from '../../components/link-button';

class WelcomePage extends React.Component {

  render() {
    return (
      <div>
        <LinkButton direction='/create-new-lists' text='Create new lists'/>
        <LinkButton direction='/lists' text ='Show lists' />
      </div>
    )
  }
}

export default WelcomePage;
