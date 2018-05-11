import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'mobx-react';
import {useStrict} from 'mobx';
import {AppContainer} from "react-hot-loader";
import AppModel from './stores/ApplicationModel';
import {BrowserRouter} from 'react-router-dom';
import App from "./app";

const render = App => {
  const renderMethod = ReactDOM.render;

  renderMethod(
    <AppContainer>
      <Provider model={AppModel}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
};

render(App);

if (module.hot) {
  module.hot.accept('./app', () => {
    const nextApp = require('./app').default;
    render(nextApp);
  });
}
