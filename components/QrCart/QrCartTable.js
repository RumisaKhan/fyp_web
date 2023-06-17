import React, { Component } from "react";
import Link from "next/link";
import { firebase } from "../../firebase";

class QRCartTable extends Component {
  state = {
    customerstateorders: [],
  };

  componentDidMount() {
    let { orders, orderid } = this.props;
    let orderArray = [];
    firebase
      .firestore()
      .collection("orders")
      .doc(orderid)
      .onSnapshot((res) => {
        orderArray.push(res.data());
      });
    orderArray.map((data) => {
      let customerorders = [];
      let size = Object.keys(data.items).length;
      for (let i = 0; i < size; i++) {
        customerorders.push(data.items[i]);
        console.log(data.item[i]);
      }
      this.setState({ customerstateorders: customerorders });
    });
  }
  componentWillReceiveProps(nextProps) {
    nextProps.orders.map((data) => {
      let customerorders = [];
      let size = Object.keys(data.items).length;
      for (let i = 0; i < size; i++) {
        customerorders.push(data.items[i]);
      }
      this.setState({ customerstateorders: customerorders });
    });
  }

  render() {
    let cartItems = this.state.customerstateorders.length ? (
      this.state.customerstateorders.map((data, idx) => {
        return (
          <tr key={idx}>
            <td className="product-thumbnail">
              <a href="#">
                <img src={data.imageUrl} alt="item" />
              </a>
            </td>

            <td className="product-name">
              <a href="#">{data.title}</a>
            </td>
            <td className="product-subtotal">
              <span className="subtotal-amount">
                ${data.newPrice * data.quantity}
              </span>
            </td>
          </tr>
        );
      })
    ) : (
      <tr>
        <td className="product-thumbnail" colSpan="6">
          <p>Empty.</p>
        </td>
      </tr>
    );
    return (
      <section className="cart-area ptb-100">
        <div className="container">
          <form>
            <div className="cart-table table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>

                <tbody>{cartItems}</tbody>
              </table>
            </div>

            <div className="cart-buttons">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                  <Link href="/products-without-sidebar">
                    <a className="optional-btn">Continue Shopping</a>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default QRCartTable;
