import * as React from 'react';
import TextField from '@material-ui/core/TextField';

export interface Props {
  onChange: any,
  label: string,
  type: string,
  value: any,
  placeholder: string
};

export interface State {
  value: string
};

class TextFields extends React.Component<Props, State> {
  state: State = {
    value: this.props.value
  };

  handleChange = (event: any) => {
    this.setState({
      value: event.target.value,
    });
    this.props.onChange(event.target.value);
  };

  render() {
    const { label, type, value, placeholder } = this.props;
  
    return (
      <form noValidate autoComplete="off">
        <TextField
          label={label}
          onChange={this.handleChange}
          value={value}
          type={type}
          placeholder={placeholder}
          margin="normal"
        />
      </form>
    );
  }
};

export default TextFields;
