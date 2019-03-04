import React, { Component } from 'react'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './styles/css/themes/lyt2-theme-1.css'
import './styles/css/styles.css'
import './styles/css/plugins.css'

import SignIn from './router/SignIn'
import Home from './router/Home'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />

      </div>
    );
  }
}




export default App;
