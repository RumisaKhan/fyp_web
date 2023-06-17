import React, { Component } from "react";
import { firebase } from "../../../firebase";
import TopHeader from "../../../components/Layouts/TopHeader";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import FacilitySlider from "../../../components/Common/FacilitySlider";
import InstagramFeed from "../../../components/Common/InstagramFeed";
import Footer from "../../../components/Layouts/Footer";

export default class TracOrderDetails extends Component {
  state = {
    arrDate: "",
    departDate: "",
    packageDate: "",
    shipDate: "",
    wayDate: "",
    delivery: "",
    trackingid: "",
    email: "",
  };
  static getInitialProps = ({ query: { id, email } }) => {
    return {
      id: id,
      email: email,
    };
  };
  handleUpdate = (e) => {
    e.preventDefault();
    window.location.href = `/track-order`;
  };
  convertDateTime = (d) => {
    let t = new Date(1970, 0, 1);
    let time = t.setSeconds(d.seconds);
    let Ti = t.getTime(d.nanoseconds);
    const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(time);
    const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(time);
    const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(time);
    const ti = new Intl.DateTimeFormat("en", { timeZone: "UTC",
    timeStyle: "short" }).format(
      time
    );

    return ` ${da}/${mo}/${ye}  time: ${ti}`;
  };
  componentDidMount() {
    
    const db = firebase.firestore();
    const dbOrderRef = db.collection("orders");
    dbOrderRef.get().then((res) => {
      res.forEach((doc) => {
        let orderObj = doc.data();
        if (
          orderObj.trackingid === this.props.id &&
          orderObj.token.email === this.props.email
        ) {
            console.log(orderObj.shipped)
         
          this.setState({
            arrDate:
              orderObj.arrivedwarehouse === "progress..."
                ? "progress..."
                : this.convertDateTime(orderObj.arrivedwarehouse),
            departDate:
              orderObj.departedwarehouse === "progress..."
                ? "progress..."
                : this.convertDateTime(orderObj.departedwarehouse),
            packageDate:
              orderObj.packagecity === "progress..."
                ? "progress..."
                : this.convertDateTime(orderObj.packagecity),
            shipDate:
              orderObj.shipped === "progress..."
                ? "progress..."
                : this.convertDateTime(orderObj.shipped),
            wayDate:
              orderObj.waywarehouse === "progress..."
                ? "progress..."
                : this.convertDateTime(orderObj.waywarehouse),
            delivery:
              orderObj.deliverydate === "progress..."
                ? "progress..."
                : this.convertDateTime(orderObj.deliverydate),
            trackingid: orderObj.trackingid,
            email: orderObj.token.email,
          });
        }
      });
    });
    
  }

  render() {
    
    return (
      <React.Fragment>
        <TopHeader />
        <Navbar />
        <PageBanner
          pageTitle="Tracking Order Details"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Tracking Order Details"
        />
        <section className="track-order-area ptb-100">
          <div className="container">
            <div className="track-order-content">
              <h2>Tracking Your Order Details</h2>

              <form onSubmit={this.handleUpdate}>
                <div className="form-group">
                  <label>Billing Email : {this.state.email}</label>
                </div>
                <div className="form-group">
                  <label>Tracking Number : {this.state.trackingid}</label>
                </div>
                <div className="form-group">
                  <label>Delivery Date : {this.state.delivery}</label>
                </div>
                <div className="form-group">
                  <label>
                    Package is in Your City : {this.state.packageDate}
                  </label>
                </div>
                <div className="form-group">
                  <label>
                    Departed from Our WareHouse : {this.state.departDate}
                  </label>
                </div>
                <div className="form-group">
                  <label>Shipped : {this.state.shipDate} </label>
                </div>
                <div className="form-group">
                  <label>Arrived at Our WareHouse : {this.state.arrDate}</label>
                </div>
                <div className="form-group">
                  <label>
                    On The Way To Our WareHouse : {this.state.wayDate}
                  </label>
                </div>

                <button className="default-btn">Back Track Page</button>
              </form>
            </div>
          </div>
        </section>
        <FacilitySlider />
        <InstagramFeed />
        <Footer />
      </React.Fragment>
    );
  }
}

