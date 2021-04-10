import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Row, Col, Form, Image } from "react-bootstrap";
import { setUserDetails } from "../actions/LoginActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
    };
  }

  handleChange = (e) => {
    switch (e.target.type) {
      case "email":
        this.validateEmail(e.target.value)
          ? this.setState({ emailError: "" })
          : this.setState({ emailError: "Invalid Email" });
        this.setState({ email: e.target.value });
        break;
      case "password":
        this.validatePassword(e.target.value)
          ? this.setState({ passwordError: "" })
          : this.setState({ passwordError: "Invalid Password" });
        this.setState({ password: e.target.value });
        break;
      default:
        break;
    }
  };

  validateEmail = (email) => {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexEmail.test(email) || email == "";
  };

  validatePassword = (pass) => {
    const regexPass = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return regexPass.test(pass) || pass == "";
  };

  handleSubmitForm = () => {
    if (this.state.emailError === "" && this.state.passwordError === "") {
      this.props.setUserDetails(this.state.email, this.state.password);
    }
  };

  render() {
    return (
      <div>
        <Row className="landing">
          <Col>
            <Form style={{ width: "80%", marginLeft: "10%", marginTop: "30%" }}>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => this.handleChange(e)}
                />
                <span className="error text-danger" style={{ fontSize: 12 }}>
                  {this.state.emailError}
                </span>
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  onChange={(e) => this.handleChange(e)}
                />
                <span className="error text-danger" style={{ fontSize: 12 }}>
                  {this.state.passwordError}
                </span>
              </Form.Group>
              <Button type="button" onClick={() => this.handleSubmitForm()}>
                Submit
              </Button>
            </Form>
          </Col>
          <Col>
            <Image
              src="./assets/login.jpg"
              thumbnail
              style={{ border: "none", marginTop: "10%" }}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.login.categories,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setUserDetails,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LoginPage));
