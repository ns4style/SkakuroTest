import React from "react";
import "./styles.scss";

export default class ErrorMessage extends React.Component {
  render() {
    return (
      <div className="errorMessage__wrapper">
        <div className="errorMessage">
          {this.props.children}
        </div>
      </div>
    )
  }
}
