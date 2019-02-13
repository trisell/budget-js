import React, { Component } from 'react';
import { Button, Grid, Modal, Image, Header } from 'semantic-ui-react';

import TopMenu from '../topMenu';
import TransactionsInputModal from './transactionsModal';

class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
  };
  

  openModal = () => { this.setState({ modalOpen: !this.state.modalOpen });
  }

  render() {
    console.log('STTE', this.state.openModal);
    return (
      <div>
        <TransactionsInputModal />

      </div>
    );
  }
}

export default TopMenu(Transactions);