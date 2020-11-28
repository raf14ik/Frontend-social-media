import React, { useContext, useState } from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../context/auth';

function MenuBar() {
  const { user, logout } = useContext(AuthContext);

  const pathname = window.location.pathname;
  // active page in menu
  const path = pathname === '/' ? 'home' : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const menuBar = user ? (
    <Menu
      pointing
      secondary
      size="massive"
      color="teal"
      className="left-menuBar"
    >
      <Icon bordered inverted color="teal" name="home" />
      <Menu.Item
        name="home"
        active={activeItem === 'home'}
        onClick={handleItemClick}
        as={Link}
        to="/"
      />
      <Menu.Menu position="right" className="left-menuBar">
        <Icon bordered inverted color="teal" name="user" />
        <Menu.Item name={user.username} active />
        <Menu.Item name="logout" onClick={logout} />
      </Menu.Menu>
    </Menu>
  ) : (
    <Menu
      pointing
      secondary
      size="massive"
      color="teal"
      className="left-menuBar"
    >
      <Icon bordered inverted color="teal" name="home" />
      <Menu.Item
        name="home"
        active={activeItem === 'home'}
        onClick={handleItemClick}
        as={Link}
        to="/"
      />

      <Menu.Menu position="right">
        <Menu.Item
          name="login"
          active={activeItem === 'login'}
          onClick={handleItemClick}
          as={Link}
          to="/login"
        />
        <Menu.Item
          name="register"
          active={activeItem === 'register'}
          onClick={handleItemClick}
          as={Link}
          to="/register"
        />
      </Menu.Menu>
    </Menu>
  );
  return menuBar;
}

export default MenuBar;
