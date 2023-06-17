import React, { Component } from "react";
import TopHeader from "../components/Layouts/TopHeader";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import FacilitySlider from "../components/Common/FacilitySlider";
import InstagramFeed from "../components/Common/InstagramFeed";
import Footer from "../components/Layouts/Footer";
import { toast } from "react-toastify";
class TrackOrder extends Component {
  state = {
    email: "",
    trackerkey: "",
  };
  handleUpdate = (e) => {
    e.preventDefault();
    if (this.state.email === "" && this.state.trackerkey === "") {
      toast.success("Please Filed Form Your Both Fields is Empty", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return false;
    } else if (this.state.email === "") {
      toast.success("Please Check Billing Email", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return false;
    } else if (this.state.trackerkey === "") {
      toast.success("Please Check Tracker Key", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return false;
    } else {
      console.log("email", this.state.email);
      console.log("key:", this.state.trackerkey);
      window.location.href = `/TrackOrderDetails/${this.state.trackerkey}/${this.state.email}`;
    }
  };
  render() {
    return (
      <React.Fragment>
        <TopHeader />
        <Navbar />
        <PageBanner
          pageTitle="Tracking Order"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Tracking Order"
        />

        <section className="track-order-area ptb-100">
          <div className="container">
            <div className="track-order-content">
              <h2>All In One Order Tracking</h2>

              <form onSubmit={this.handleUpdate}>
                <div className="form-group">
                  <label>Order Tracker Key</label>
                  <input
                    type="text"
                    value={this.state.trackerkey}
                    onChange={(e) =>
                      this.setState({ trackerkey: e.target.value })
                    }
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label>Billing E-mail</label>
                  <input
                    type="email"
                    value={this.state.email}
                    onChange={(e) => this.setState({ email: e.target.value })}
                    className="form-control"
                  />
                </div>

                <button className="default-btn">Track Order</button>
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

export default TrackOrder;
