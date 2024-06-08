import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";
import Admin from "./components/admin_component";
import Publichome from "./publichome";
import ImageUpload from "./components/imageUpload.";
import UserHome from "./components/userHome";
import image from './fdaLogo.png';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <Router>
      <div className="App">
        {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container-fluid">
          <img src={image}  alt='FDA' className="imageLogo"/>
            <Link className="navbar-brand" to={'/sign-in'}>
              FOOD AND DRUG ADMINISTRATION
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Manufacturer Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    SignUp
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/publichome'}>
                    Public search
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/admin'}>
                    Admin login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}

        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Brand><Link className="navbar-brand" to={'/sign-in'}>
              FOOD AND DRUG ADMINISTRATION
            </Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link> <Link className="nav-link" to={'/sign-in'}>
                    Manufacturer Login
                  </Link></Nav.Link>
                <Nav.Link><Link className="nav-link" to={'/sign-up'}>
                    SignUp
                  </Link></Nav.Link>

                  <Nav.Link>
                  <Link className="nav-link" to={'/publichome'}>
                    Public search
                  </Link>
                  </Nav.Link>

                  <Nav.Link>
                  <Link className="nav-link" to={'/admin'}>
                    Admin login
                  </Link>
                  </Nav.Link>
        
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route
            exact
            path="/"
            element={isLoggedIn == "true" ? <UserDetails /> : <Login />}
          />
          {/* <Route  path="/" element={<welcomePage />} /> */}
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/publichome" element={<Publichome />} />
          <Route path="/userDetails" element={<UserDetails />} />
          <Route path="/userHome" element={<UserHome />} />
        </Routes>
        {/* <ImageUpload/> */}
      </div>
    </Router>
  );
}

export default App;
