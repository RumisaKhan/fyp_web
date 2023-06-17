import React, { Component } from "react";
import OrderUpdateModal from "../Modals/OrderUpdateModal";
import ArrDate from "../Modals/ArrDate";
import DepartDate from "../Modals/DepartDate";
import PackageDate from "../Modals/PackageDate";
import ShipDate from "../Modals/ShipDate";
import WayDate from "../Modals/WayDate";
import { firebase } from "../../../firebase";
import OrderTR from "../orders/OrderTR";

class OrdersTable extends Component {
  state = {
    ordersData: [],
    loading: true,
    orderUpdateModal: false,
    arrDate: false,
    departDate: false,
    packageDate: false,
    shipDate: false,
    wayDate: false,
    orderId: "",
  };

  componentDidMount() {
    const db = firebase.firestore();
    const dbOrderRef = db.collection("orders");
    let orderArray = [];
    dbOrderRef
      .get()
      .then((res) => {
        res.forEach((doc) => {
          let orderObj = doc.data();
          orderObj.id = doc.id;

          orderArray.push(orderObj);
        });
        this.setState({
          ordersData: orderArray,
        });
        this.loading = false;
      })
      .catch((err) => {
        console.log("error", err);
      });
  }

  toggleOrderUpdateModal = (e) => {
    this.setState({
      orderUpdateModal: e,
    });
  };
  toggleArrDate = (e) => {
    this.setState({
      arrDate: e,
    });
  };
  toggleDepartDate = (e) => {
    this.setState({
      departDate: e,
    });
  };
  togglePackageDate = (e) => {
    this.setState({
      packageDate: e,
    });
  };
  toggleShipDate = (e) => {
    this.setState({
      shipDate: e,
    });
  };
  toggleWayDate = (e) => {
    this.setState({
      wayDate: e,
    });
  };

  closeOrderUpdateModal = () => {
    this.setState({
      orderUpdateModal: false,
    });
  };
  closeArrDate = () => {
    this.setState({
      arrDate: false,
    });
  };
  closeDepartDate = () => {
    this.setState({
      departDate: false,
    });
  };
  closePackageDate = () => {
    this.setState({
      packageDate: false,
    });
  };
  closeShipDate = () => {
    this.setState({
      shipDate: false,
    });
  };
  closeWayDate = () => {
    this.setState({
      wayDate: false,
    });
  };

  getId = (e) => {
    this.setState({
      orderId: e,
    });
  };
  render() {
    const { ordersData, loading } = this.state;
    return (
      <div className="admin-main-content d-flex flex-column">
        <div className="page-header">
          <h2>Orders</h2>
        </div>

        <div className="admin-table admin-orders-table height-555">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead>
                <tr>
                <th>ID</th>
                  <th>Order ID</th>
                  <th>Date</th>
                  <th>Delivery Address</th>
                  <th>Order By</th>
                  <th>Amount</th>
                  <th>Payment Method</th>
                  <th>Contact</th>
                  <th>Receive Date</th>
                  <th>Way To WareHouse</th>
                  <th>Arrived At WareHouse</th>
                  <th>Shipped</th>
                  <th>Departed From WareHouse</th>
                  <th>Package In City</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <OrderTR
                    onOrderModal={this.toggleOrderUpdateModal}
                    arrDate={this.toggleArrDate}
                    departDate={this.toggleDepartDate}
                    packageDate={this.togglePackageDate}
                    shipDate={this.toggleShipDate}
                    wayDate={this.toggleWayDate}
                    onPassId={this.getId}
                    orders={ordersData}
                  />
                ) : (
                  "Loading..."
                )}
              </tbody>
            </table>
          </div>
        </div>

        <OrderUpdateModal
          onClick={this.closeOrderUpdateModal}
          orderId={this.state.orderId}
          active={this.state.orderUpdateModal ? "active" : ""}
        />
        <ArrDate
          onClick={this.closeArrDate}
          orderId={this.state.orderId}
          active={this.state.arrDate ? "active" : ""}
        />
        <DepartDate
          onClick={this.closeDepartDate}
          orderId={this.state.orderId}
          active={this.state.departDate ? "active" : ""}
        />
        <PackageDate
          onClick={this.closePackageDate}
          orderId={this.state.orderId}
          active={this.state.packageDate ? "active" : ""}
        />
        <ShipDate
          onClick={this.closeShipDate}
          orderId={this.state.orderId}
          active={this.state.shipDate ? "active" : ""}
        />
        <WayDate
          onClick={this.closeWayDate}
          orderId={this.state.orderId}
          active={this.state.wayDate ? "active" : ""}
        />

        {/* Footer */}
        <div className="flex-grow-1"></div>
      </div>
    );
  }
}

export default OrdersTable;
