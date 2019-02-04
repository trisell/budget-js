import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';


import Home from './components/home';
import AddAccount from './components/accounts/addaccount';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/accounts/add' component={AddAccount} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
