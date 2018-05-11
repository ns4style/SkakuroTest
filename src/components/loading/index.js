import React from "react";
import "./styles.scss";
import Rings from './rings'

export default class Loading extends React.Component {
  static defaultProps = {
    show: false
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="loading__wrapper">
        <Rings/>
      </div>
    );
  }
}
