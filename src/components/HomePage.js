import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Row, Col, Form, Image, ButtonGroup } from "react-bootstrap";
import { fetchCategories } from "../actions/LoginActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Sidebar from "./SideBar";
import ProductsPage from "./ProductsPage";
import { withRouter } from "react-router";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
    };
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  handleSubmitForm = () => {
    this.props.history.push({ pathname: "/dashboard" });
  };

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <Sidebar />
        </div>
        <div>
          <ProductsPage />
        </div>
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
      fetchCategories,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(HomePage));
