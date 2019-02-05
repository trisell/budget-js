import React, { Component } from 'react'
import { Menu, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const TopMenu = (WrappedComponent) => {
  class MenuExampleBasic extends Component {
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
      <Menu>
      <Menu.Item as={Link} to='/'>Home</Menu.Item>
      <Dropdown text='Accounts' pointing className='link item'>
        <Dropdown.Menu>
        <Dropdown.Item as={Link} to='/accounts/add'>Add Account</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item as={Link} to='/accounts'>Account List</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Item as={Link} to='/budget'>Budget</Menu.Item>
      <Menu.Item>Contact Us</Menu.Item>
      
    </Menu>
    <div>
      <WrappedComponent />
    </div>
    </div>
    )
  }
}
  return MenuExampleBasic
}

export default TopMenu;