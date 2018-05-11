import React from "react";
import "./styles.scss";
import Mask from 'libs/react-input-mask/dist/react-input-mask.min.js';
import cn from 'classnames';
import ErrorMessage from 'components/errorMessage';

export class PhoneInput extends React.PureComponent {
  static defaultProps = {
    name: 'phone',
    error: false,
    errorText: 'error',
    success: false,
    onChangeCallback: () => {
    },
    setTouchedInput: () => {
    }
  }

  render() {
    return (
      <div className="input">
        <label htmlFor={this.props.name} className="input__header">Телефон</label>
        <Mask
          mask='+\7-(999)-999-99-99'
          maskChar={null}
          id={this.props.name}
          placeholder="+7"
          onChange={this.props.onChangeCallback}
          onBlur={this.props.setTouchedInput}
          className={cn('input__input', {_error : this.props.error, _success : this.props.success})}
        />
        {this.props.error && <ErrorMessage>{this.props.errorText}</ErrorMessage>}
      </div>
    )
  }
}

export class SummInput extends React.PureComponent {
  static defaultProps = {
    name: 'phone',
    error: false,
    errorText: 'error',
    success: false,
    onChangeCallback: () => {
    },
    setTouchedInput: () => {
    },
    beforeChange: () => {
    }
  }

  render() {
    let formatChars = {
      '9': '[0-9]',
      '1': '[1-9]'
    };
    return (
      <div className="input">
        <label htmlFor={this.props.name} className="input__header">Сумма</label>
        <Mask
          mask='1999'
          maskChar={''}
          formatChars={formatChars}
          placeholder="1-1000"
          id={this.props.name}
          onChange={this.props.onChangeCallback}
          onBlur={this.props.setTouchedInput}
          className={cn('input__input', {_error : this.props.error, _success : this.props.success})}
          beforeChange={this.props.beforeChange}/>
        {this.props.error && <ErrorMessage>{this.props.errorText}</ErrorMessage>}
      </div>
    )
  }
}
