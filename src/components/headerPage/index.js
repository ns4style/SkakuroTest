import React from "react";
import "./styles.scss";

export default class HeaderPage extends React.PureComponent {
  render() {
    return (
      <h1 className="headerPage">
        {this.props.children}
      </h1>
    )
  }
}
