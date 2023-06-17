import React, { Component } from "react";
import { firebase } from "../../firebase";
import TopHeader from "../../components/Layouts/TopHeader";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import QrCartTable from "../../components/QrCart/QrCartTable";
import FacilitySlider from "../../components/Common/FacilitySlider";
import InstagramFeed from "../../components/Common/InstagramFeed";
import Footer from "../../components/Layouts/Footer";
export default class QrOrderDetails extends Component {
  state = {
    ordersData: [],
  };
  x = JSON.parse(localStorage.getItem("user"));
  static getInitialProps = ({ query: { id } }) => {
    return {
      id: id,
    };
  };
  componentDidMount() {
    let orderArray = [];
    firebase
      .firestore()
      .collection("orders")
      .doc(this.props.id)
      .onSnapshot((res) => {
        orderArray.push(res.data());
        this.setState({
          ordersData: orderArray,
        });
      });
    }


  render() {
    let { ordersData } = this.state;
    return (
      <React.Fragment>
        <TopHeader />
        <Navbar />
        <PageBanner
          pageTitle="Your Order Cart"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Your Order Cart"
        />
        {this.x === null ? (
           <section className="track-order-area ptb-100">
           <div className="container">
             <div className="track-order-content">
             <h5
                style={{
                  fontFamily: "Lato",
                  color: "#b54ced",
                  fontWeight: 600,
                }}
              >
                Please Login First
              </h5>

             </div>
           </div>
         </section>
        ) : (
          <QrCartTable orders={ordersData} orderid={this.props.id} />
        )}
        <FacilitySlider />
        <InstagramFeed />
        <Footer />
      </React.Fragment>
    );
  }
}
