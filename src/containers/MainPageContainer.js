import React from "react";
import {observer, inject} from 'mobx-react';
import Page from 'pages/commonPage';
import HeaderPage from 'components/headerPage';
import List from 'components/list';
import OperatorItemContainer from 'containers/OperatorItemContainer';
import {getListOperators} from 'services/emulateApi';

class MainPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operators: []
    }
  }

  componentWillMount() {
    this.props.model.setShowLoading();
    getListOperators().then((data) => {
      this.setState({
        operators: data
      });
      this.props.model.resetShowLoading();
    });
  }

  generateOperators() {
    if (!!this.state.operators.length) {
      return this.state.operators.map((item) => {
        return item.id ? <OperatorItemContainer key={item.id} data={item}/> : null;
      })
    }
    return null;

  }

  render() {
    return (
      <Page>
        <HeaderPage>Список операторов</HeaderPage>
        <List>
          {this.generateOperators()}
        </List>
      </Page>
    )
  }
}

export default inject('model')(observer(MainPageContainer));
export {MainPageContainer as TestMainPageContainer};
