import React, { Component } from 'react'
import { Link } from 'react-router-dom';

const TopMenu = (WrappedComponent) => {
  class Menu extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.moveForward = this.moveForward.bind(this);
    }
    

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  moveForward = (time) =>{
    console.log(`Moving ${time} Minute`);
  }
  render() {

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" data-test-id="topMenu">
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className='nav-link' to='/'>Home</Link>
              </li>
              <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarAccountsDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Accounts
                </a>
                <div className='dropdown-menu' aria-labelledby='navbarAccountsDropdown'>
                  <Link className='dropdown-item' to='/accounts'>Account List</Link>
                  <Link className='dropdown-item' to='/accounts/add'>Add Account</Link>
                </div>
              </li>
              <li className="nav-item">
                <Link to='/budget'>Budget</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarTransactionsDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Transactions
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarTransactionsDropdown">
                  <Link className="dropdown-item" to='/transactions'>Transactions</Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
    <div>
      <WrappedComponent />
    </div>
    </div>
    )
  }
}
  return Menu
}

export default TopMenu;