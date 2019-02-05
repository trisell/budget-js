import React, { Component } from 'react';
import ReactTable from 'react-table';

import TopMenu from '../topMenu';
import { 
  GET_ACCOUNTS, 
  RETURN_ALL_ACCOUNTS 
} from '../../lib/electron/ipcConstants';


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
    this.getAccounts()
  }

  componentWillUnmount() {
    ipcRenderer.removeListener(GET_ACCOUNTS, () => {});
    ipcRenderer.removeListener(RETURN_ALL_ACCOUNTS, () => {});
  }

  getAccounts = () => {
    ipcRenderer.send(GET_ACCOUNTS, 'ping');
    ipcRenderer.on(RETURN_ALL_ACCOUNTS, (event, data) => {
      console.log(data);
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
    const { data } = this.state;
    return (
        <ReactTable
          data={data}
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

export default TopMenu(Accounts);