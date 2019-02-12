import React, { Component } from 'react';

import { Button, Form } from 'semantic-ui-react';

import TopMenu from '../topMenu';

import { 
  ADD_NEW_ACCOUNT,
  ADD_ACCOUNT_ERROR 
} from '../../lib/electron/ipcConstants';

const { ipcRenderer } = window.require('electron');

const accountStyle = {
  paddingLeft: '20px',
  width: '400px',
  height: '400px',
}

class AddAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountName: '',
      accountNumber: '',
      accountBank: '',
      error: null,
    }
    this.addAccount = this.addAccount.bind(this);
  }
  
  addAccount = () => {
    const {accountBank, accountName, accountNumber } = this.state;
    ipcRenderer.send(ADD_NEW_ACCOUNT, {accountN: accountName, accountB: accountBank, accountNu: accountNumber})
    ipcRenderer.on(ADD_ACCOUNT_ERROR, this.handleError);
  }
  handleError = (event, data) => {
    this.setState({error: data.message});
  }
  render() {
    return (
      <div style={accountStyle}>
          <Form onSubmit={this.addAccount}>
            <Form.Field>
              <label>Account Name</label>
              <input placeholder='Account Name' onChange={e => this.setState({ accountName: e.target.value })} />
            </Form.Field>
            <Form.Field>
              <label>Account Number</label>
              <input placeholder='Account Number' onChange={e => this.setState({ accountNumber: e.target.value })} />
            </Form.Field>
            <Form.Field>
              <label>Account Bank</label>
              <input placeholder='Account Bank' onChange={e => this.setState({ accountBank: e.target.value })} />
            </Form.Field>
            <Button type='submit'>Add Account</Button>
          </Form>
          {(this.state.error) ?
            (<div>{this.state.error}</div>) : <div/>
          }
      </div>
    );
  }
}

export default TopMenu(AddAccount);