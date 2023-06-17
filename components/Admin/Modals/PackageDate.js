import React, { Component } from "react";
import { toast } from "react-toastify";
import { firebase } from "../../../firebase";
import Datetime from "react-datetime";
class PackageDate extends Component {
  state = {
    modal: false,
    PackageCity: "",
  };

  closeModal = () => {
    this.props.onClick(this.state.modal);
  };

  changePackageCity(value) {
    this.setState({ PackageCity: value._d });
  }

  handleUpdate = (e) => {
    e.preventDefault();
    if (this.state.PackageCity === "") {
      return false;
    }
    console.log(this.props.orderId);
    const db = firebase.firestore();
    const dbOrderRef = db.collection("orders");
    dbOrderRef.doc(this.props.orderId).update({
      packagecity: this.state.PackageCity,
    });
    toast.success("Status changed to" + " " + this.state.PackageCity, {
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
                  <label>Order Package In City</label>
                  <Datetime
                    value={this.state.PackageCity}
                    onChange={this.changePackageCity.bind(this)}
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

export default PackageDate;
