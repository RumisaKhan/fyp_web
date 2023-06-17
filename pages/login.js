import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";
import { connect } from "react-redux";
import TopHeader from "../components/Layouts/TopHeader";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import FacilitySlider from "../components/Common/FacilitySlider";
import InstagramFeed from "../components/Common/InstagramFeed";
import Footer from "../components/Layouts/Footer";
import { userLogin } from "../store/actions/cartActions";
import { firebase } from "../firebase";
import { toast } from "react-toastify";
class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  handleLogin = (e) => {
    e.preventDefault();
    let datauserall = [];
    if (this.state.email === "" && this.state.password === "") {
      toast.warn("Form All Filed is Empty", {
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
      

      firebase.firestore()
        .collection("userdata")
        .get()
        .then((res) => {
          res.forEach((doc) => {
            let orderObj = doc.data();
            datauserall.push(orderObj);
          })
           var founduser = datauserall.filter((e) => e.email == this.state.email );
           
          
          if (founduser.length === 0) {

            toast.warn("This User Not Register yet Please Register", {
              position: "bottom-left",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
          }
          else {
            const { email,password } = this.state;
            let orderdata = []
            let emailchecker = []
            firebase.firestore().collection("orders").get()
              .then((res) => {
                res.forEach((doc) => {
                  let orderObj = doc.data();
                  if (orderObj.token.email === email ) {
                    
                    emailchecker.push(orderObj.token.email)
                    orderdata.push(orderObj)
                    
                 
   
                  }
               
                  
                })
                if (emailchecker.length > 0 || founduser[0].password === password) {
                
                  
                  localStorage.setItem("user", JSON.stringify({"firstname":founduser[0].firstname,"lastname":founduser[0].lastname,"email":founduser[0].email
                }));
                

                     toast.success("Login SuccessFully 😃", {
                      position: "bottom-left",
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                    });
                   
                     this.props.userLogin();
                    Router.push('/');
                 }
                 else{
                  toast.warn("Please Check Email and Password", {
                    position: "bottom-left",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                  });
                 }
              })
              .catch((e) => {
                console.log("error", e)
                toast.error("Please Check Internet", {
                  position: "bottom-left",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                });
              })


          }
        })
    }
   
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

        <section className="login-area ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="login-content">
                  <h2>Login</h2>

                  <form onSubmit={this.handleLogin} className="login-form">
                    <div className="form-group">
                      <input
                        type="email"
                        value={this.state.email}
                        onChange={(e) =>
                          this.setState({ email: e.target.value })
                        }
                        className="form-control"
                        placeholder="demo@example.com"
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="password"
                        value={this.state.password}
                        onChange={(e) =>
                          this.setState({ password: e.target.value })
                        }
                        className="form-control"
                        placeholder="demo"
                      />
                    </div>

                    <button type="submit" className="default-btn">
                      Login
                    </button>

                    <div className="text-center">
                      <Link href="/forgot-password">
                        <a className="forgot-password">Lost your password?</a>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="new-customer-content">
                  <h2>New Customer</h2>

                  <span>Create an Account</span>
                  <p>
                    Sign up for a free account at our store. Registration is
                    quick and easy. It allows you to be able to order from our
                    shop. To start shopping click register.
                  </p>

                  <Link href="/signup">
                    <a className="optional-btn">Create an Account</a>
                  </Link>
                </div>
              </div>
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

export default connect(null, mapDispatchToProps)(Login);
