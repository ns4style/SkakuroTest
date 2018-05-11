import React from "react";
import "./styles.scss";
import {Link} from 'react-router-dom';

export default class OperatorItem extends React.Component {
  static defaultProps = {
    data: {}
  };

  render() {
    return (
      <Link className="operatorItem" to={this.props.data.url ? this.props.data.url : '/'}>
        <img className="operatorItem__logo" src={this.props.data.logo}/>
        <div className="operatorItem__name">{this.props.data.name}</div>
      </Link>
    )
  }
}
