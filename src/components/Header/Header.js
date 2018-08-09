import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
  // DropdownMenu,
  // DropdownItem,
  // UncontrolledDropdown,
  // DropdownToggle
} from "reactstrap";
// import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";
import "./Header.css";
export default class Header extends React.Component {
  constructor() {
    super();

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div className="fixed-nav">
        <Navbar color="faded" light>
          <NavbarBrand className="mr-auto">
            <a className="login-text" href={process.env.REACT_APP_LOGIN}>
              <img
                className="login-svg"
                src="http://hodstaronline.org/img/login.png"
                alt="sd"
              />
              <div className="login-svg-text">Login</div>
            </a>
          </NavbarBrand>
          {/* <NavbarBrand className="mr-auto">
            <UncontrolledDropdown setActiveFromChild>
              <DropdownToggle tag="a" className="nav-link" caret>
                <div className="login-svg-text">
                  <img
                    className="login-svg"
                    src="http://cdn.onlinewebfonts.com/svg/img_311846.png"
                    alt="sd"
                  />
                </div>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag="a" href="/blah" active>
                  <p>
                    login
                    <a
                      className="login-text"
                      href={process.env.REACT_APP_LOGIN}
                    >
                      looooogin
                    </a>
                  </p>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </NavbarBrand> */}
          <NavbarBrand center className="mr-autoo">
            <NavLink to="/">
              <p className="nav-home-text">Home</p>
            </NavLink>
          </NavbarBrand>
          {/* <div className="text-focus-inn">
            <p id="name-of-appp">TUTORZWAY</p>
          </div> */}
          {/* <UncontrolledDropdown setActiveFromChild>
            <DropdownToggle tag="a" className="nav-link" caret>
              Dropdown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem tag="a" href="/blah" active>
                Link
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown> */}
          <NavbarToggler
            color="#ffffff"
            onClick={this.toggleNavbar}
            className="mr-2"
          />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav center className="text-center" navbar>
              <div>
                <NavItem>
                  <NavLink className="new" to="/googlemap">
                    GoogleMap
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="new" to="/listofclasses">
                    List Of Classes
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="new" to="/listoftutors">
                    List Of Tutors
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="new" to="/listofstudents">
                    List Of Students
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="new" to="/login">
                    Sign Up
                  </NavLink>
                </NavItem>
              </div>
            </Nav>
          </Collapse>
          <div />
        </Navbar>
        {/* <button onClick={this.Logout}> logout </button> */}
      </div>
    );
  }
}
