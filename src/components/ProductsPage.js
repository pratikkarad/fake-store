import React, { Component } from "react";
import { Button, Card, Modal, Image } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { bindActionCreators } from "redux";
import { fetchProducts } from "../actions/ProductsActions";

class ProductsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedProduct: {},
    };
  }

  toggleModalVisibility = (flag) => {
    this.setState({ showModal: flag });
  };

  componentDidMount() {
    // this.props.fetchProducts(this.props.match.params.categoryName);
  }

  componentWillReceiveProps(nextProps) {
    console.log("category -> " + this.props.match.params.categoryName);
    if (
      nextProps.match.params.categoryName !=
      this.props.match.params.categoryName
    )
      this.props.fetchProducts(this.props.match.params.categoryName);
  }

  render() {
    let products = this.props.products;
    let cards;
    if (products == null) {
      cards = <></>;
    } else {
      cards = products.map((product) => (
        <Card
          style={{
            margin: "5px",
            display: "inline-block",
            width: "18rem",
            height: "28rem",
          }}
          key={product.id}
          onClick={() => {
            this.setState({ selectedProduct: product });
            this.toggleModalVisibility(true);
          }}
        >
          <Card.Img
            variant="top"
            src={product.image}
            style={{ aspectRatio: 16 / 9, height: "40%", padding: "5%" }}
          />
          <Card.Body>
            <Card.Title>
              <div style={{ height: "5rem" }}>
                {product.title.substr(0, 55)}
              </div>
            </Card.Title>
            <Card.Text>
              <div style={{ height: "8rem", overflow: "hidden" }}>
                {product.description}
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      ));
    }
    return (
      <div>
        {cards}
        <Modal
          show={this.state.showModal}
          onHide={() => this.toggleModalVisibility(false)}
          dialogClassName="modal-90w"
          size={"xl"}
          aria-labelledby="example-custom-modal-styling-title"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              {this.state.selectedProduct.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Image
                src={this.state.selectedProduct.image}
                thumbnail
                style={{
                  aspectRatio: 4 / 3,
                  width: "40%",
                  height: "50%",
                  padding: "5%",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ marginLeft: "2rem" }}>
                  {this.state.selectedProduct.description}
                </p>
                <Button
                  type="submit"
                  onClick={() => null}
                  style={{ width: "50%", marginBottom: "2rem" }}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.product.products,
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
)(withRouter(ProductsPage));
