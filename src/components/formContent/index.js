import React from "react";
import PhoneInputContainer from 'containers/PhoneInputContainer';
import SummInputContainer from 'containers/SummInputContainer';
import Rings from 'components/loading/rings';
import ErrorMessage from 'components/errorMessage';
import "./styles.scss";

export default class FormContent extends React.Component {
  static defaultProps = {
    formApi: {},
    errorForm: ''
  }

  render() {
    return (
      <form className="form" onSubmit={this.props.formApi.submitForm}>
        <div className="form__block">
          <PhoneInputContainer field="phone"/>
        </div>
        <div className="form__block">
          <SummInputContainer field="summ"/>
        </div>
        <div className="form__button-wrapper">
          <button className="form__button" type="submit" disabled={this.props.formApi.submitting }>Отправить</button>
          {this.props.formApi.submitting && <Rings small={true}/>}
        </div>
        {this.props.errorForm && <ErrorMessage>{this.props.errorForm.message}</ErrorMessage>}
      </form>
    )
  }
}
