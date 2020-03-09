import React from 'react';
import { Link } from 'react-router-dom';
import { AuthUserContext } from '../../SignupLogin/Session';
import SignOutButton from '../../SignupLogin/SignOut';
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

      authUser ? <NavigationAuth /> : <NavigationNonAuth />

    }
  </AuthUserContext.Consumer></div>
);

const NavigationAuth = () => (
  <nav justify className="navbar navbar-white bg-primary">

    <Navbar class="navbar navbar-dark bg-dark" >

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">

        <Nav className="mr-auto">
          <a href={ROUTES.HOME}><img src="./images/flickfoxlogo.jpg" alt="Main Logo" className="mainImage" /></a>
          <Nav.Link href="#action/3.2">Movies</Nav.Link>
          <Nav.Link href="#action/3.3">Television</Nav.Link>
          <Nav.Link href="#action/3.3">Actors</Nav.Link>
          <NavDropdown title="Features" id="basic-nav-dropdown">
            <NavDropdown.Item href={ROUTES.ACCOUNT}>Drunk Fox Rantz</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href={ROUTES.ACCOUNT}>My Account</NavDropdown.Item>
            <NavDropdown.Item href={ROUTES.ADMIN}>Admin</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="primary">Search</Button>
        </Form>
      </Navbar.Collapse>
      <SignOutButton />
    </Navbar>
  </nav>

);

const NavigationNonAuth = () => (
  <nav justify className="navbar navbar-white bg-primary">

    <Navbar class="navbar navbar-dark bg-dark" >

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">

        <Nav className="mr-auto">
          <a href={ROUTES.HOME}><img src="./images/flickfoxlogo.jpg" alt="Main Logo" className="mainImage" /></a>
          <Nav.Link href="#action/3.2">Movies</Nav.Link>
          <Nav.Link href="#action/3.3">Television</Nav.Link>
          <Nav.Link href="#action/3.3">Actors</Nav.Link>
          <NavDropdown title="Features" id="basic-nav-dropdown">
            <NavDropdown.Item href={ROUTES.ACCOUNT}>Drunk Fox Rantz</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href={ROUTES.ACCOUNT}>My Account</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className="signIn" href={ROUTES.SIGN_IN}>Log In</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="primary">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  </nav>

);

export default Navigation;
