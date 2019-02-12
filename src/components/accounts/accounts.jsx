import React, { Component } from 'react';
import ReactTable from 'react-table';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAccount } from '../../actions/accountActions'; 

import TopMenu from '../topMenu';
import { 
  GET_ACCOUNTS, 
  RETURN_ALL_ACCOUNTS 
} from '../../lib/electron/ipcConstants';
import { map } from 'rsvp';


const { ipcRenderer } = window.require('electron');

const data = [
  {firstName: 'John', lastName: 'Clark'},
  {firstName: 'Ding', lastName: 'Chaves'}
]



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

  getAccounts = () => {

    ipcRenderer.send(GET_ACCOUNTS, 'ping');
    ipcRenderer.on(RETURN_ALL_ACCOUNTS, (event, data) => {
      if(data.error){
        this.setState({error: data.error});
      }else{
        this.setState({
          data: data
        });
      }
    })
  }
  
  render() {
    const { accounts } = this.props;
    const { data } = this.state;
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
  console.log(state);
  return {
   accounts: state.accounts
  }
}

export default TopMenu(connect(
  mapStateToProps, 
)(Accounts));