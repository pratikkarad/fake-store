import React, { Component } from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import has from "lodash";
import { fetchProducts } from "../actions/ProductsActions";

class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.fetchProducts(this.props.categories[0]);
    // this.props.history.push({
    //   pathname: "/category/" + this.props.categories[0],
    // });
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          height: "100vh",
          overflow: "scroll initial",
        }}
      >
        <CDBSidebar textColor="#fff" backgroundColor="#333">
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              {this.props.categories.map((category) => {
                return (
                  <NavLink
                    exact
                    to={"/category/" + category}
                    activeClassName="activeClicked"
                    key={category}
                  >
                    <CDBSidebarMenuItem icon="columns">
                      {has.startCase(category)}
                    </CDBSidebarMenuItem>
                  </NavLink>
                );
              })}
            </CDBSidebarMenu>
          </CDBSidebarContent>
        </CDBSidebar>
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
      fetchProducts,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SideBar));
