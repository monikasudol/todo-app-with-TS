import * as React from 'react';
import TextField from '@material-ui/core/TextField';

export interface Props {
  onSelect: any
};

class DatePickers extends React.Component<Props> {

  onSelect = (event: any) => {
    const date = event.target.value;
    this.props.onSelect(date);
  };
  
  render() {
    return (
      <form noValidate>
        <TextField
          id="date"
          label="deadlie"
          type="date"
          defaultValue="2017-05-24"
          onSelect={this.onSelect}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
    );
  }
}

export default DatePickers;
