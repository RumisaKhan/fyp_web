import React, { Component } from "react";
import { toast } from "react-toastify";
import { firebase } from "../../../firebase";
import Datetime from "react-datetime";
class ShipDate extends Component {
  state = {
    modal: false,
    Shipped: "",
  };

  closeModal = () => {
    this.props.onClick(this.state.modal);
  };

  changeShipped(value) {
    this.setState({ Shipped: value._d });
  }

  handleUpdate = (e) => {
    e.preventDefault();
    if (this.state.Shipped === "") {
      return false;
    }
    console.log(this.props.orderId);
    const db = firebase.firestore();
    const dbOrderRef = db.collection("orders");
    dbOrderRef.doc(this.props.orderId).update({
      shipped: this.state.Shipped,
    });
    toast.success("Status changed to" + " " + this.state.Shipped, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    setTimeout(() => {
      this.closeModal();
      window.location.reload(false);
    }, 1000);
  };

  render() {
    return (
      <React.Fragment>
        <div className={`admin-product-modal ${this.props.active}`}>
          <div className="modal-innter-content">
            <button type="button" className="close" onClick={this.closeModal}>
              <span aria-hidden="true">
                <i className="bx bx-x"></i>
              </span>
            </button>

            <div className="modal-body">
              <h3>Order Update</h3>

              <form onSubmit={this.handleUpdate}>
                <div className="form-group">
                  <label>Order Shipped</label>
                  <Datetime
                    value={this.state.Shipped}
                    onChange={this.changeShipped.bind(this)}
                  />
                </div>

                <div className="modal-btn">
                  <div
                    className="btn optional-btn float-left"
                    onClick={this.closeModal}
                  >
                    Cancel
                  </div>
                  <button className="btn default-btn float-right">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ShipDate;
