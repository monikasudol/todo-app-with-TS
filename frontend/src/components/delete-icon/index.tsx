import * as React from 'react';
import Icon from '@material-ui/core/Icon';
import './style.css';

export interface Props {
  onClick: any
};

function DeleteIcon(props: Props) {

  return (
    <Icon onClick={props.onClick} className='delete-icon'>Delete</Icon>
  );
};

export default DeleteIcon;
