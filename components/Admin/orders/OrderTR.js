import React, { Component } from "react";
class OrderTR extends Component {
  state = {
    orderUpdateModal: true,
    arrDate: true,
    departDate: true,
    packageDate: true,
    shipDate: true,
    wayDate: true,
  };

  toggleOrderUpdateModal = () => {
    this.setState({
      orderUpdateModal: !this.state.orderUpdateModal,
    });
    this.props.onOrderModal(this.state.orderUpdateModal);
  };
  toggleArrDate = () => {
    this.setState({
      arrDate: !this.state.arrDate,
    });
    this.props.arrDate(this.state.arrDate);
  };
  toggleDepartDate = () => {
    this.setState({
      departDate: !this.state.departDate,
    });
    this.props.departDate(this.state.departDate);
  };
  togglePackageDate = () => {
    this.setState({
      packageDate: !this.state.packageDate,
    });
    this.props.packageDate(this.state.packageDate);
  };
  toggleShipDate = () => {
    this.setState({
      shipDate: !this.state.shipDate,
    });
    this.props.shipDate(this.state.shipDate);
  };
  toggleWayDate = () => {
    this.setState({
      wayDate: !this.state.wayDate,
    });
    this.props.wayDate(this.state.wayDate);
  };

  passId = (orderId) => {
    this.props.onPassId(orderId);
  };

  convertDateTime = (d) => {
    let t = new Date(1970, 0, 1);
    let time = t.setSeconds(d.seconds);
    let Ti = t.getTime(d.nanoseconds);
    const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(time);
    const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(time);
    const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(time);
    const ti = new Intl.DateTimeFormat("en", {
      timeZone: "UTC",
      timeStyle: "short",
    }).format(time);

    return ` ${da}/${mo}/${ye}  time: ${ti}`;
  };

  statusBtn = (status) => {
    if (status === "pending") {
      return <span className="badge badge_warning">Pending</span>;
    } else if (status === "cancel") {
      return <span className="badge badge_danger">Cancel</span>;
    } else {
      return <span className="badge badge_success">Delivered</span>;
    }
  };
  render() {
    let { orders } = this.props;
    return (
      <React.Fragment>
        {orders.map((order, i) => {
          return (
            <tr key={i}>
              <td>
                <strong>#{i + 1}</strong>
              </td>
              <td>
                <strong>#{order.id}</strong>
              </td>
              <td>{this.convertDateTime(order.createdAt)}</td>
              <td>{order.customerDetails.address}</td>
              <td className="customer">
                <strong>
                  {order.customerDetails.firstName +
                    " " +
                    order.customerDetails.lastName}
                </strong>
              </td>
              <td>${order.amount}</td>
              <td>Stripe</td>
              <td>{order.customerDetails.phone}</td>
              <td>{order.deliverydate === null ? '':this.convertDateTime(order.deliverydate)}</td>
              <td
                onClick={(e) => {
                  this.toggleWayDate();
                  this.passId(order.id);
                }}
              >
                {order.waywarehouse === "progress..."
                  ? "progress..."
                  : this.convertDateTime(order.waywarehouse)}
              </td>
              <td
                onClick={(e) => {
                  this.toggleArrDate();
                  this.passId(order.id);
                }}
              >
                {order.arrivedwarehouse === "progress..."
                  ? "progress..."
                  : this.convertDateTime(order.arrivedwarehouse)}
              </td>
              <td
                onClick={(e) => {
                  this.toggleShipDate();
                  this.passId(order.id);
                }}
              >
                {order.shipped === "progress..."
                  ? "progress..."
                  : this.convertDateTime(order.shipped)}
              </td>
              <td
                onClick={(e) => {
                  this.toggleDepartDate();
                  this.passId(order.id);
                }}
              >
                {order.departedwarehouse === "progress..."
                  ? "progress..."
                  : this.convertDateTime(order.departedwarehouse)}
              </td>
              <td
                onClick={(e) => {
                  this.togglePackageDate();
                  this.passId(order.id);
                }}
              >
                {order.packagecity === "progress..."
                  ? "progress..."
                  : this.convertDateTime(order.packagecity)}
              </td>
              <td
                onClick={(e) => {
                  this.toggleOrderUpdateModal();
                  this.passId(order.id);
                }}
              >
                {this.statusBtn(order.status)}
              </td>
            </tr>
          );
        })}
      </React.Fragment>
    );
  }
}

export default OrderTR;
