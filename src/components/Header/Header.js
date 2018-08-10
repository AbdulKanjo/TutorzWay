import React from "react";
import axios from "axios";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";
export default class Header extends React.Component {
  constructor() {
    super();

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
      logIn: true
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  getession() {
    axios.get("/api/me").then(response => {
      console.log(response);
      this.setState({
        logIn: false
      });
    });
  }
  render() {
    console.log(this.state.logIn);

    return (
      <div className="fixed-nav">
        <Navbar color="faded" light>
          <NavbarBrand className="mr-auto">
            {this.state.logIn ? (
              <a className="login-text" href={process.env.REACT_APP_LOGIN}>
                <img
                  className="login-svg"
                  src="http://hodstaronline.org/img/login.png"
                  alt="sd"
                />
                <div onClick={this.getession()} className="login-svg-text">
                  Login
                </div>
              </a>
            ) : (
              // <a className="login-text" href={process.env.REACT_APP_LOGOUT}>
              <div
                className="login-text"
                onClick={() => {
                  axios.post("/api/logout").then(() => {
                    this.setState({ logIn: true });
                  });
                }}
              >
                <img
                  className="login-svg"
                  src="http://hodstaronline.org/img/login.png"
                  alt="sd"
                />
                <div className="login-svg-text">logout</div>
              </div>
              // {/* // </a> */}
            )}
          </NavbarBrand>

          <NavbarBrand center className="mr-autoo">
            <NavLink to="/">
              <p className="nav-home-text">Home</p>
            </NavLink>
          </NavbarBrand>

          <NavbarToggler
            color="#ffffff"
            onClick={this.toggleNavbar}
            className="mr-2"
          />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav center className="text-center" navbar>
              <div>
                <NavItem onClick={this.toggleNavbar}>
                  <NavLink className="new" to="/googlemap">
                    GoogleMap
                  </NavLink>
                </NavItem>
                {/* <hr className="hr-color-tutor" />
                <NavItem onClick={this.toggleNavbar}>
                  <NavLink className="new" to="/listofclasses">
                    Classes
                  </NavLink>
                </NavItem> */}
                <hr className="hr-color-tutor" />
                <NavItem onClick={this.toggleNavbar}>
                  <NavLink className="new" to="/listoftutors">
                    Tutors
                  </NavLink>
                </NavItem>
                <hr className="hr-color-tutor" />
                <NavItem onClick={this.toggleNavbar}>
                  <NavLink className="new" to="/listofstudents">
                    Students
                  </NavLink>
                </NavItem>
                <hr className="hr-color-tutor" />
                <NavItem onClick={this.toggleNavbar}>
                  <NavLink className="new" to="/login">
                    Sign Up
                  </NavLink>
                </NavItem>
              </div>
            </Nav>
          </Collapse>
          <div />
        </Navbar>
      </div>
    );
  }
}
