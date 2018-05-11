import React from "react";
import FormContent from 'components/formContent'
import {Form} from 'react-form';
import {sendData} from 'services/emulateApi';
import {withRouter} from 'react-router-dom';
import Routes from 'configs/routes';

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorForm: null
    }
  }

  onSubmit(data) {
    this.setState({
      errorForm: null
    });
    return sendData(data).then((data)=> {
      this.props.history.push(Routes.Main.route);
    }).catch((err) => {
      throw new Error(err)
    });
  }

  onSubmitError(errors, onSubmitError) {
    this.setState({
      errorForm: onSubmitError
    })
  }


  render() {
    return (
      <Form onSubmit={(data) => this.onSubmit(data)}
            onSubmitFailure={( errors, onSubmitError ) => this.onSubmitError(errors,onSubmitError)}
            render={(formApi) => <FormContent formApi={formApi} errorForm={this.state.errorForm}/>}
      />
    )
  }
}

export default withRouter(FormContainer)

export {FormContainer as TestFormContainer}
