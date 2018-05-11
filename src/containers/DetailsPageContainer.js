import React from "react";
import {observer, inject} from 'mobx-react';
import Page from 'pages/commonPage';
import {withRouter} from 'react-router-dom';
import HeaderPage from 'components/headerPage';
import {getCurrentOperator} from 'services/emulateApi';
import BackButton from 'components/backButton';
import FormContainer from 'containers/formContainer';
import Routes from 'configs/routes';

class DetailsPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null
    }
  }

  componentWillMount() {
    this.props.model.setShowLoading();
    let url = this.props.match.params.operatorName;
    getCurrentOperator(url).then((data) => {
      if (!data) {
        this.props.history.push(Routes.Main.route);
      }
      this.setState({
        item: data
      });
      this.props.model.resetShowLoading();
    })
  }

  render() {
    if (!this.state.item) {
      return null;
    }

    return (
      <Page>
        <HeaderPage>Форма пополнения {this.state.item.name}</HeaderPage>
        <FormContainer/>
        <BackButton/>
      </Page>
    )
  }
};

export default withRouter(inject('model')(observer(DetailsPageContainer)))

export { DetailsPageContainer as TestDetailsPageContainer};




