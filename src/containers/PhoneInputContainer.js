import React from "react";
import {PhoneInput} from 'components/inputs';
import {Field} from 'react-form';

export default class PhoneInputContainer extends React.Component {
  static defaultProps = {
    field : 'phone'
  };

  phoneValidate(value) {
    let pattern = new RegExp(/^((\+7|7|8)+([0-9]){10})$/);
    let finded = pattern.test(value);
    return {
      error: !value || !finded ? 'Phone number is incorrect' : null,
      success: value && finded ? true : null
    }
  }

  onChangeCallback(e, fieldApi) {
    let value = e.target.value.replace(/[.*+?^${}()\-\_|[\]\\]/g, '');
    fieldApi.setValue(value);
  }

  setTouchedInput(fieldApi) {
    fieldApi.setTouched(true)
  }

  render() {
    return (
      <Field validate={this.phoneValidate}
             field={this.props.field}
      >
        {(fieldApi) => {
          let error = !!fieldApi.touched && !!fieldApi.error;
          let success = !!fieldApi.touched && !!fieldApi.success;
          return <PhoneInput
            name = {fieldApi.fieldName}
            error = {error}
            errorText = {fieldApi.error}
            success = {success}
            onChangeCallback={(e) => this.onChangeCallback(e, fieldApi)}
            setTouchedInput={() => this.setTouchedInput(fieldApi)}
          />
        }}
      </Field>
    )
  }
}
