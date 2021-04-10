import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Spinner } from "react-bootstrap";
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

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "row", flex: 1 }}>
        <div style={{ flex: 1 }}>
          <Sidebar />
        </div>
        <div style={{ flex: 4 }}>
          {this.props.isLoading ? (
            <div
              style={{
                marginLeft: "45%",
                marginTop: "25%",
              }}
            >
              <Spinner animation="grow" />
            </div>
          ) : (
            <ProductsPage />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.login.categories,
    isLoading: state.login.isProductsLoading,
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
