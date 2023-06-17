import React, { useState, useEffect } from "react";
import TopHeader from "../components/Layouts/TopHeader";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import FacilitySlider from "../components/Common/FacilitySlider";
import InstagramFeed from "../components/Common/InstagramFeed";
import Footer from "../components/Layouts/Footer";
import { firebase } from "../firebase";
const Orderhistory = () => {
  const [orderhistory, setOrderhistory] = useState([]);
  const [orderhistoryid, setOrderhistoryid] = useState([]);
  var x = JSON.parse(localStorage.getItem("user"));
  let customerorders = [];
  let idarray = [];
  useEffect(() => {
    let record = [];
    firebase
      .firestore()
      .collection("orders")
      .orderBy("createdAt", "desc")
      .get()
      .then((res) => {
        res.forEach((doc) => {
          let orderobj = doc.data();

          if (x.email === orderobj.customerDetails.email) {
            idarray.push(doc.id);
            const Data = doc.data();
            record.push(Data);
            
          }
        });

        setOrderhistoryid(idarray);
        setOrderhistory(record);
        
      })
      .catch((e) => console.log("error", e));

  }, []);
  const convertDateTime = (d) => {
    let t = new Date(1970, 0, 1);
    let time = t.setSeconds(d.seconds);

    const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(time);
    const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(time);
    const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(time);

    return ` ${da}/${mo}/${ye}`;
  };
  return (
    <div>
      <TopHeader />
      <Navbar />
      <PageBanner
        pageTitle="Order History"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Order History"
      />

      <section className="track-order-area ptb-100">
        <div className="container">
          <div className="track-order-content">
            <h2>Order History</h2>

            {x === null ? (
              <h5
                style={{
                  fontFamily: "Lato",
                  color: "#b54ced",
                  fontWeight: 600,
                }}
              >
                Please Login First
              </h5>
            ) : orderhistory.length === 0 ? (
              <h5
                style={{
                  fontFamily: "Lato",
                  color: "#b54ced",
                  fontWeight: 600,
                }}
              >
                Please order First
              </h5>
            ) : (
              orderhistory.map((item, i) => {
                return (
                  <React.Fragment key={i}>
                    <div className="container-fluid my-5 d-sm-flex justify-content-center">
                      <div className="card px-2">
                        <div className="card-header bg-white">
                          <div className="row justify-content-between">
                            <div className="col">
                              <p
                                className="text-muted"
                                style={{ marginRight: "65px" }}
                              >
                                {" "}
                                Order ID{" "}
                                <span className="font-weight-bold text-dark">
                                  {" "}
                                  {orderhistoryid[i]}
                                </span>
                              </p>
                              <p
                                className="text-muted"
                                style={{ marginRight: "165px" }}
                              >
                                {" "}
                                Place On{" "}
                                <span className="font-weight-bold text-dark">
                                  {" "}
                                  {convertDateTime(item.createdAt)}
                                </span>{" "}
                              </p>
                            </div>

                          </div>
                        </div>
                        <div className="card-body">
                          <div className="media flex-column flex-sm-row">
                            <div className="media-body ">
                              {
                                Object.keys(item.items).map((y, i) => {
                                 const x = item.items[y];
                                  return (
                                    <div style={{marginBottom:"20px",border:"1px silver solid"}} key={i}>

                                       <img
                                    // className="align-self-center img-fluid"
                                    // style={{ maxWidth: "37.5%" }}
                                    style={{ marginTop: "10px" }}
                                    src={`${x.imageUrl}`}
                                    width="180 "
                                    height="180"
                                  />
                                  <h6 className="ml-auto mr-4">
                                      {" "}
                                      <a href={`/product?id=${x.id}`}>
                                        View Details
                                      </a>{" "}
                                    </h6>
                                    <h5 className="bold">{x.title}</h5>
                                    <p className="text-muted">
                                      Qt: {x.quantity} Pair
                                    </p>
                                    <h4
                                      className="mt-3 mb-4 bold"
                                      style={{ fontFamily: "serif" }}
                                    >
                                      {" "}
                                      <span className="mt-5">&#x24;</span>{" "}
                                      {x.newPrice}
                                    </h4>
                                    <button
                                      type="button"
                                      style={{marginBottom:"10px"}}
                                      onClick={() => {
                                        window.location.href = `/Review/${
                                          x.id
                                        }`;
                                      }}
                                      className="default-btn"
                                    >
                                      Review Please
                                    </button>
                                      </div>
                                      )
                                })
                              }
                              <h4 className="mt-3 mb-4 bold">
                                {" "}
                                <span className="mt-5"></span>
                                <span className="small text-muted">
                                  {" "}
                                  via ({item.token.card.brand}{" "}
                                  {item.token.card.object}){" "}
                                </span>
                              </h4>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                );
              })
            )}

          </div>
        </div>
      </section>
      <FacilitySlider />
      <InstagramFeed />
      <Footer />
    </div>
  );
};
export default Orderhistory;
