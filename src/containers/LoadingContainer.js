import React from "react";
import {observer, inject} from 'mobx-react';
import Loading from 'components/loading';

class LoadingContainer extends React.Component {
  render() {
    return (
      <Loading show={this.props.model.showLoading}/>
    )
  }
}

export default inject('model')(observer(LoadingContainer))
export {LoadingContainer as TestLoadingContainer}
