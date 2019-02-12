import React, { Component } from 'react';
import ReactTable from 'react-table';
import { connect } from 'react-redux';
import { getAccount } from '../../actions/accountActions'; 

import TopMenu from '../topMenu';
import { 
  GET_ACCOUNTS, 
  RETURN_ALL_ACCOUNTS 
} from '../../lib/electron/ipcConstants';
const { ipcRenderer } = window.require('electron');

class Accounts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }

  componentDidMount(){
    this.props.dispatch(getAccount(''));
  }

  componentWillUnmount() {
    ipcRenderer.removeListener(GET_ACCOUNTS, () => {});
    ipcRenderer.removeListener(RETURN_ALL_ACCOUNTS, () => {});
  }

  render() {
    const { accounts } = this.props;
    return (
        <ReactTable
          data={accounts}
          columns={[
            {

              columns: [
                {
                  Header: "Account Name",
                  accessor: "account_name"
                },
                {
                  Header: "Account Balance",
                  accessor: "account_balance",
                },
                {
                  Header: 'Account Bank',
                  accessor: 'account_bank'
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
    );
  }
}

function mapStateToProps(state){
  return {
   accounts: state.accounts
  }
}

export default TopMenu(connect(
  mapStateToProps, 
)(Accounts));