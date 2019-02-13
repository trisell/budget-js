import React, { Component } from 'react';

import { Grid, Button, Modal, Image, Header } from 'semantic-ui-react';

class TransactionsInputModal extends Component {

  render() {
    return (
      <Modal trigger={        
        <Grid>
          <Grid.Column floated='left'></Grid.Column>
          <Grid.Column floated='right' width={3}>
            <Button>Add Transaction</Button>
          </Grid.Column>
        </Grid>
      } closeIcon>
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>We've found the following gravatar image associated with your e-mail address.</p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default TransactionsInputModal;