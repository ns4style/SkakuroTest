import React from "react";
import "./styles.scss";
import TransitionGroup from 'react-addons-css-transition-group';

export default class FadeComponent extends React.PureComponent {
  render() {
    return (
      <TransitionGroup
        className="list"
        transitionName="fade"
        transitionAppear={true}
        transitionLeave={false}
        component="div"
        transitionAppearTimeout={300}
        transitionEnterTimeout={300}>
        {this.props.children}
      </TransitionGroup>
    )
  }
}
