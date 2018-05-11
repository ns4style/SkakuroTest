import React from "react";
import "./styles.scss";

export default class Page extends React.Component {
  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    )
  }
}
