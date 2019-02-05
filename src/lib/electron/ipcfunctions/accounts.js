const mainWindow = require('../../../electron-starter.js').mainWindow;

const { db } = require('../../../utils/db');

const { 
  ADD_ACCOUNT_ERROR,
  RETURN_ALL_ACCOUNTS
} = require('../ipcConstants');
const addAccount = (event,arg) => {
  const sql = `
  INSERT INTO 
  account(account_name, account_number, account_bank)
  VALUES 
  (?,?,?);
  `
  try{
      db.run(sql, [arg.accountN, arg.accountNu, arg.accountB], (err) =>{
          return event.sender.send(ADD_ACCOUNT_ERROR, {
              sucess: false,
              message: 'Account Already Exists',
          })
      })
  }catch(err){
      console.log(err);
  }
}

getAccounts = (event, data) => {
  const sql = `
    SELECT
    account_name,
    account_bank,
    account_balance
    FROM account;
  `
  try{
    db.all(sql, (err, rows) => {
      if (err) {
        return event.sender.send(RETURN_ALL_ACCOUNTS, {error: 'Look up failed.'})
      }
      return event.sender.send(RETURN_ALL_ACCOUNTS, rows)


    });
  }catch(err){
    console.log(err)
  }
}

module.exports = {
  addAccount,
  getAccounts,
}