import React from "react";
import pathTo from 'path-to-regexp';
import RoutesList from 'configs/routes'

import OperatorItem from 'components/operatorItem'

export default class OperatorItemContainer extends React.Component {
  static defaultProps = {
    data: {
      id: 1,
      url: 'mts',
      name: 'MTC',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/MTS_logo.svg/2000px-MTS_logo.svg.png'
    }
  };

  render() {
    let pathToOperator = pathTo.compile(RoutesList.DetailsPage.route);
    pathToOperator = pathToOperator({
      operatorName: this.props.data.url
    });
    return (
      <OperatorItem data={{...this.props.data, url : pathToOperator}}/>
    )
  }
}
