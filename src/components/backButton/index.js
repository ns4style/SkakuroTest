import React from "react";
import "./styles.scss";
import {Link} from 'react-router-dom';
import Routes from 'configs/routes';

export default class BackButton extends React.Component {
  render() {
    return (
      <Link className="backButton" to={Routes.Main.route}>
        <span className="icon icon-arrow-1-left"></span>
      </Link>
    )
  }
}
