import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";
import { connect } from "react-redux";
import { userLogin } from "../store/actions/cartActions";
import TopHeader from "../components/Layouts/TopHeader";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import FacilitySlider from "../components/Common/FacilitySlider";
import InstagramFeed from "../components/Common/InstagramFeed";
import Footer from "../components/Layouts/Footer";
import { firebase } from "../firebase";
import { toast } from "react-toastify";

class Signup extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };
  handleLogin = (e) => {
    e.preventDefault();
    let userdataall = [];
    //let flag = 0;
    //const { firstname, lastname, email, password } = this.state;
    if (
      this.state.firstname === "" &&
      this.state.lastname === "" &&
      this.state.email === "" &&
      this.state.password === ""
    ) {
      toast.warn("Form All Filed is Empty", {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else if (this.state.firstname === "") {
      toast.warn("Form FirstName Filed is Empty", {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else if (this.state.lastname === "") {
      toast.warn("Form LastName Filed is Empty", {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else if (this.state.email === "") {
      toast.warn("Form Email Filed is Empty", {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else if (this.state.password === "") {
      toast.warn("Form Password Filed is Empty", {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      firebase
        .firestore()
        .collection("userdata")
        .get()
        .then((res) => {
          res.forEach((doc) => {
            var orderObj = doc.data();
            userdataall.push(orderObj);
          });
          const found = userdataall.filter((e) => e.email == this.state.email);
          if (found.length === 0) {
            const { firstname, lastname, email, password } = this.state;
            firebase
              .firestore()
              .collection("userdata")
              .add({
                email,
                firstname,
                lastname,
                password,
              })
              .then(() => {
                toast.success("You SuccessFully SignUp 😁", {
                  position: "bottom-left",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                });
              })
              .catch((e) => {
                console.log("Error: ", e);
                toast.error("Please Check Internet", {
                  position: "bottom-left",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                });
              });
          } else {
            toast.warn("This Email is Already Use", {
              position: "bottom-left",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
          }
        });
    }

    //this.props.userLogin();
    Router.push("/login");
  };

  render() {
    return (
      <React.Fragment>
        <TopHeader />
        <Navbar />
        <PageBanner
          pageTitle="My Account"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Login"
        />

        <section className="signup-area ptb-100">
          <div className="container">
            <div className="signup-content">
              <h2>Create an Account</h2>

              <form onSubmit={this.handleLogin} className="signup-form">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    value={this.state.firstname}
                    placeholder="Enter FirstName"
                    onChange={(e) =>
                      this.setState({ firstname: e.target.value })
                    }
                    className="form-control"
                    id="fname"
                    name="fname"
                  />
                </div>

                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    value={this.state.lastname}
                    placeholder="Enter LastName"
                    onChange={(e) =>
                      this.setState({ lastname: e.target.value })
                    }
                    className="form-control"
                    id="lname"
                    name="lname"
                  />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={this.state.email}
                    placeholder="Enter Email"
                    onChange={(e) => this.setState({ email: e.target.value })}
                    className="form-control"
                    id="name"
                    name="name"
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    value={this.state.password}
                    placeholder="Enter Password"
                    onChange={(e) =>
                      this.setState({ password: e.target.value })
                    }
                    className="form-control"
                    id="password"
                    name="password"
                  />
                </div>

                <button type="submit" className="default-btn">
                  Signup
                </button>

                <div className="text-center">
                  <Link href="/">
                    <a className="return-store">or Return to Store</a>
                  </Link>
                </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: () => {
      dispatch(userLogin());
    },
  };
};

export default connect(null, mapDispatchToProps)(Signup);
