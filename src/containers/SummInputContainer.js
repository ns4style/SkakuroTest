import React from "react";
import {SummInput} from 'components/inputs';
import {Field} from 'react-form';

export default class SummInputContainer extends React.Component {
  static defaultProps = {
    field : 'summ'
  };

  summValidate(value) {
    return {
      error: !value || value <=0 || value > 1000 ? `Incorrect value` : null,
      success: !!value && value > 0 && value <= 1000 ? true : null
    }
  }

  onChangeCallback(e, fieldApi) {
    let value = !!e.target.value ? parseInt(e.target.value) : '';
    fieldApi.setValue(value);
  }

  setTouchedInput(fieldApi) {
    fieldApi.setTouched(true)
  }

  beforeChange(value, cursor) {
    let summ = !!value ? parseInt(value) : '';
    if (!!summ) {
      summ = summ > 1000 ? 1000 : summ;
      summ = `${summ} Руб`
    }
    return {
      value: summ,
      cursorPosition: cursor
    }
  }

  render() {
    return (
      <Field validate={this.summValidate}
             field={this.props.field}
      >
        {(fieldApi) => {
          let error = !!fieldApi.touched && !!fieldApi.error;
          let success = !!fieldApi.touched && !!fieldApi.success;
          return <SummInput
            name={fieldApi.fieldName}
            error={error}
            errorText={fieldApi.error}
            success={success}
            onChangeCallback={(e) => this.onChangeCallback(e, fieldApi)}
            setTouchedInput={() => this.setTouchedInput(fieldApi)}
            beforeChange={this.beforeChange}
          />
        }
        }
      </Field>
    )
  }
}
