import React from "react";
import { ToastContainer, toast, Flip } from "react-toastify";
import Router from "next/router";
import Link from "next/link";
import { firebase } from "../../firebase";

class Signup extends React.Component {
  state = {
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  };
  handleLogin = (e) => {
    // e.preventDefault();
    // this.props.userLogin();
    // Router.push("/");
    e.preventDefault();
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
        .collection("admin")
        .add({
          email: this.state.email,
          firstname: this.state.firstname,
          lastname: this.state.lastname,
        })
        .catch((error) => {
          toast.error(error.message, {
            position: "bottom-left",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          console.log(error);
        });
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
          toast.success("You are signed In successfully!", {
            position: "bottom-left",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          setTimeout(function () {
            Router.push("/admin/signin");
          }, 1500);
        })
        .catch(function (error) {
          toast.error(error.message, {
            position: "bottom-left",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          console.log(error);
        });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="admin-signup ptb-100">
          <div className="d-table">
            <div className="d-table-cell">
              <ToastContainer transition={Flip} />

              <div className="container">
                <div className="login-content">
                  <section className="signup-area">
                    <div className="container">
                      <div className="signup-content">
                        <h2>Admin Signup</h2>

                        <form
                          onSubmit={this.handleLogin}
                          className="signup-form"
                        >
                          <div className="form-group">
                            <label>First Name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="First Name"
                              id="fname"
                              name="fname"
                              onChange={(e) =>
                                this.setState({ firstname: e.target.value })
                              }
                            />
                          </div>

                          <div className="form-group">
                            <label>Last Name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Last Name"
                              id="lname"
                              name="lname"
                              onChange={(e) =>
                                this.setState({ lastname: e.target.value })
                              }
                            />
                          </div>

                          <div className="form-group">
                            <label>Email</label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Email"
                              id="name"
                              name="name"
                              onChange={(e) =>
                                this.setState({ email: e.target.value })
                              }
                            />
                          </div>

                          <div className="form-group">
                            <label>Password</label>
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Password"
                              id="password"
                              name="password"
                              onChange={(e) =>
                                this.setState({ password: e.target.value })
                              }
                            />
                          </div>

                          <button type="submit" className="default-btn">
                            Register
                          </button>

                          <div className="text-center">
                            <Link href="/admin/signin">
                              <a className="return-store">
                                Already have an account ?
                              </a>
                            </Link>
                          </div>
                        </form>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Signup;
