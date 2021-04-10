import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { bindActionCreators } from "redux";
import { logout } from "../actions/LoginActions";

class Menu extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="white">
          <Container>
            <Navbar.Brand href="/">Fake Store</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#"></Nav.Link>
                <Nav.Link href="#"></Nav.Link>
              </Nav>
              {this.props.userDetails != null && (
                <Nav>
                  <Nav.Link href="#deets">Cart</Nav.Link>
                  <NavDropdown
                    title={this.props.userDetails.email}
                    id="collasible-nav-dropdown"
                  >
                    <NavDropdown.Item
                      href="/"
                      onClick={() => {
                        this.props.logout();
                      }}
                    >
                      Log out
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userDetails: state.login.userDetails,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      logout,
    },
    dispatch
  );

export default connect(mapStateToProps, null)(withRouter(Menu));
