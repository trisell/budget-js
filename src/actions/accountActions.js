const { GET_ACCOUNT, GET_ACCOUNT_ERROR } =  require('../constants/action-types');
const { ipcRenderer } = window.require('electron');
const { 
  GET_ACCOUNTS,
  RETURN_ALL_ACCOUNTS,
} = require('../lib/electron/ipcConstants');


export const getAccount = (payload) => {
  return (dispatch) => {
    ipcRenderer.send(GET_ACCOUNTS, 'ping');
    ipcRenderer.on(RETURN_ALL_ACCOUNTS, (event, data) =>{
      if(data.error){
        dispatch({type:GET_ACCOUNT_ERROR, data: data.error})

      }else {
        dispatch({type: GET_ACCOUNT, data: data});
      }
    });

  };
};