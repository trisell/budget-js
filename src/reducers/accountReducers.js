import initialState from './intialState';

const { GET_ACCOUNT, GET_ACCOUNT_ERROR } =  require('../constants/action-types');
const { ipcRenderer } = window.require('electron');
const { intialState } = require('./intialState');
const { 
  GET_ACCOUNTS,
  RETURN_ALL_ACCOUNTS,
} = require('../lib/electron/ipcConstants');

export function accountReducer(state = initialState, action){
  switch(action.type) {
    case GET_ACCOUNT:
      console.log(state);
      return action.data      

    case GET_ACCOUNT_ERROR:
      
      return action.data
      
    default:
      return state;
  }
};


