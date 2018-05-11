import React from "react";
import "./styles.scss";
import FadeComponent from 'components/fadeComponent';

export default class List extends React.PureComponent {
  render() {
    return (
      <FadeComponent>
        {this.props.children}
      </FadeComponent>
    )
  }
}
