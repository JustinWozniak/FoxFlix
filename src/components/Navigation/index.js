import React from 'react';
import { Link } from 'react-router-dom';
import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import 'firebase/auth';
import 'firebase/database';


const Navigation = () => (

  
  <div><AuthUserContext.Consumer>
  
    {authUser =>
    
      authUser ?  <NavigationNonAuth /> : <NavigationNonAuth />
  
    }
  </AuthUserContext.Consumer></div>
);

const NavigationAuth = () => (
  <div>
    <ul>
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      <li>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
      <li>
        <SignOutButton />
      </li>
    </ul>
  </div>
);

const NavigationNonAuth = () => (
<nav justify class="navbar navbar-white bg-primary">
    <Navbar class="navbar navbar-dark bg-dark" >
    <img className="mainImage" src="./images/flickfoxlogo.jpg" alt="Main Logo"></img>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link href={ROUTES.LANDING}>Home</Nav.Link> */}
          <Nav.Link href={ROUTES.SIGN_IN}>Log In</Nav.Link>
          <NavDropdown title="Features" id="basic-nav-dropdown">
            <NavDropdown.Item href={ROUTES.ACCOUNT}>My Account</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="primary">Search Music</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    </nav> 

);

export default Navigation;
