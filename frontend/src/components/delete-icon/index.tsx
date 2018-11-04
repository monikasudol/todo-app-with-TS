import * as React from 'react';
import * as FontAwesome from 'react-icons/fa'
import './style.css';

export interface Props {
  onClick: any
};

function DeleteIcon(props: Props) {

  return (
    <FontAwesome.FaTimes
      onClick={props.onClick}
      className='delete-icon'/>
  );
};

export default DeleteIcon;
