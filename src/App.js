import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";
import Search from "./components/search";
import image from "./brs.jpg";
import Home from './components/welcome_component';
// import BreweryInfoPage from './components/BreweryInfoPage';

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container-fluid">
            <img src={image} alt='FDA' className="imageLogo" />
            <Link className="navbar-brand" to={'/home'}>
              Bewery Review System
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    User Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    SignUp
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home />}
          />
          <Route path="/home" element={<Home />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/search" element={<Search />} />
          <Route path="/userDetails" element={<UserDetails />} />
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
