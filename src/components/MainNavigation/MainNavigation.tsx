import * as React from 'react'
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MainNavigation.css';

function MainNavigation() {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey: any) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link>
          <Link to="/">
            <p className='header-text'>Home</p>
          </Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <Link to="/list">
          <p className='header-text'>List</p>
          </Link>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default MainNavigation