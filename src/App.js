import React, { Component } from 'react'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './styles/css/themes/lyt2-theme-1.css'
import './styles/css/styles.css'
import './styles/css/plugins.css'

import SignIn from './router/SignIn'
import Home from './router/Home'

import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import configureStore from './store/configurateStore'


class App extends Component {
  render() {

    let routesElement = (<AnonymousRoutes path='/guet' component={ AnonymousRoutes } />);

    if(false)
      routesElement = (<FriendlyRoutes path={ RouteNames.root } component={ FriendlyRoutes } />)

    return (
      <Provider store = { store }>
        <BrowserRouter basename= {`/${process.env.REACT_APP_PREFIX}/`}>
          <Switch>
            <Route path="/" exact render={(props) => (
              <Redirect to={{pathname: RouteNames.login}} />
            )} />
          </Switch>
          {routesElements}
        </BrowserRouter>
      </Provider>
    );
  }
}




export default App;
