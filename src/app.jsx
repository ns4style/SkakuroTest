import React from "react";
import {Route, Switch} from "react-router-dom";
import * as Routes from './routes/Routes'
import RoutesList from './configs/routes'
import MainPageContainer from 'containers/MainPageContainer'
import LoadingContainer from 'containers/LoadingContainer'
import "./app.scss";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path={RoutesList.Main.route} component={Routes.Main}/>
          <Route exact path={RoutesList.DetailsPage.route} component={Routes.Details}/>
        </Switch>
        <LoadingContainer/>
      </div>
    )
  }
}
