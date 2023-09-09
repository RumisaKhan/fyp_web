import React, { Component } from "react";
import { firebase } from "../../firebase";
import TopHeader from "../../components/Layouts/TopHeader";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import FacilitySlider from "../../components/Common/FacilitySlider";
import InstagramFeed from "../../components/Common/InstagramFeed";
import Footer from "../../components/Layouts/Footer";

class ArView extends Component {
    state = {
        ArUrl: "",
      };
  static getInitialProps = ({ query }) => {
    return {
      id: query.id,
    };
  };
  componentDidMount() {
    let orderArray = [];
    firebase
      .firestore()
      .collection("products")
      .doc(this.props.id)
      .onSnapshot((res) => {
        orderArray.push(res.data());
        this.setState({ArUrl: orderArray[0].aR});
      });
  }

  render() {
      console.log(this.props.id);
    return (
      <React.Fragment>
        <TopHeader />
        <Navbar />
        <PageBanner
          pageTitle="AR View"
          homePageUrl="/"
          homePageText="Home"
          activePageText="AR View"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
              <iframe src={this.state.ArUrl} height="500" width="650" title="ArView"></iframe>
          </div>
        </div>
        <FacilitySlider />
        <InstagramFeed />
        <Footer />
      </React.Fragment>
    );
  }
}

export default ArView;