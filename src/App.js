import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';


import Home from './components/home';
import AddAccount from './components/accounts/addaccount';
import Account from './components/accounts/accounts';
import Budget from './components/budget';
import Transactions from './components/transactions/transactions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/accounts/add' component={AddAccount} />
            <Route exact path='/accounts' component={Account} />
            <Route exact path='/budget' component={Budget} />
            <Route exact path='/transactions' component={Transactions} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
