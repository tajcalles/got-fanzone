import React, { Component } from 'react';
import { Menu, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import gotlogo from '../images/got-logo.jpeg';

class NavBar extends Component {
  rightNavs = () => {
    return (
      <Menu.Menu position='right'>
        <Link to='/About'>
          <Menu.Item name='About' />
        </Link>
        <Link to='/JoinUs'>
          <Menu.Item name='Join Us' />
        </Link>
      </Menu.Menu>
    );
  }

  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Link to='/'>
            <Image fluid src='../images/got-logo.jpeg' />
          </Link>
          
          { this.rightNavs() }
        </Menu>
      </div>
    );
  }
}

export default NavBar;
