import React, { Component } from 'react';
import TopMenu from './topMenu';
import { Button } from 'semantic-ui-react';

class Budget extends Component {
  render() {
    return (
      <div>
        <Button>Add Transaction</Button>
      </div>
    );
  }
}

export default TopMenu(Budget);