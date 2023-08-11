import React from "react";
import axios from "axios";
import Router from "next/router";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { resetCart } from "../../store/actions/cartActions";
import { firebase } from "../../firebase";
import { v4 as uuidv4 } from "uuid";
import { database } from "firebase";
class Payments extends React.Component {
  onToken = (token) => {
    // let date = new Date();
    // orderdate: date.toDateString(),
    let date = new Date();
    date.setDate(date.getDate() + 7);
    const body = {
      customerDetails: {
        firstName: this.props.userData.firstName.value,
        lastName: this.props.userData.lastName.value,
        email: this.props.userData.email.value,
        phone: this.props.userData.phone.value,
        address: this.props.userData.address.value,
        city: this.props.userData.city.value,
        state: this.props.userData.state.value,
        zip: this.props.userData.zip.value,
      },
      items: { ...this.props.products },
      amount: this.props.total,
      status: "pending",
      trackingid: `ARShop-PK-${Math.round(Math.random() * 9825) * 9852}`,
      deliverydate: date,
      packagecity: "progress...",
      departedwarehouse: "progress...",
      shipped: "progress...",
      arrivedwarehouse: "progress...",
      waywarehouse: "progress...",
      token: token,
      createdAt: new Date(),
    };
    // for local use api call /api/checkout
    // axios.post("/api/checkout", body);
    // for production use api call /api/check
    axios.post("/api/check", body);
    let size = Object.keys(body.items).length;
    const orderidarr = [];
    const db = firebase.firestore();
    const dbOrderRef = db.collection("orders");
    dbOrderRef.add(body).then((res) => {
      // console.log("order cresate",res.Pc.path.segments[1]);
      orderidarr.push(res.Pc.path.segments[1]);
      this.props.resetCart();
      toast.success("Submitted the order, we will contact you soon.", {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      for (let i = 0; i < size; i++) {
        axios
          .post(
            // for local use /api/mail
             "/api/mail",
            // for deployment use
           // "/api/send",
            {
              email: body.customerDetails.email,
              trackingkey: body.trackingid,
              type: body.items[i].type,
              id: orderidarr[0],
            },
            {
              headers: { "Content-type": "application/json" },
            }
          )
          .then((res) => console.log("send success", res))
          .catch((err) => console.log("error:", err));
      }
      setTimeout(() => {
        Router.push("/");
      }, 3000);
    });
  };

  render() {
    let { amount } = this.props;
    return (
      <React.Fragment>
        <div className="order-btn">
          <StripeCheckout
            name="ARShop"
            description="React Next eCommerce AR"
            amount={amount}
            currency="USD"
            token={this.onToken}
            stripeKey="pk_test_51NIv6zHySVQyEtS4GC7f4qphvhv8jDWzpVmEjQJb1NIcanWHKKlmSNVarxFw699oBUctm3LLmSCEysACGEye2nm300uUZRwp7j"
            billingAddress={false}
            closed={this.handleClick}
          >
            <button disabled={this.props.disabled} className={`default-btn`}>
              Place Order
            </button>
          </StripeCheckout>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.addedItems,
    total: state.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetCart: () => {
      dispatch(resetCart());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Payments);
