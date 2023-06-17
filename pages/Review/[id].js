
import TopHeader from "../../components/Layouts/TopHeader";
import Navbar from "../../components/Layouts/Navbar";
import Router from "next/router";
import PageBanner from "../../components/Common/PageBanner";
import FacilitySlider from "../../components/Common/FacilitySlider";
import InstagramFeed from "../../components/Common/InstagramFeed";
import Footer from "../../components/Layouts/Footer";
import Sentiment from "sentiment";
import { firebase } from "../../firebase";
import { toast } from "react-toastify";
import React, { useState} from "react";

const Review = (props) => {

    const [title, Settitle] = useState("");
    const [comment, Setcomment] = useState("");
    const [date, Setdate] = useState("");
    var x = JSON.parse(localStorage.getItem("user"))
    

  

const reviewdata = (e)=>{
    e.preventDefault();
    
 
        if (title === "" && comment === "" && date === "") {
            toast.warn("Form All Filed is Empty", {
              position: "bottom-left",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
          }
          else if(title === ""){
            toast.warn("Form Title Filed is Empty", {
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              });
          }
          else if(comment === ""){
            toast.warn("Form Comment Filed is Empty", {
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              });
        }
        else if(!date){
            toast.warn("Form Data Filed is Empty", {
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              });
        }
        else {
           
            var name = x.firstname+x.lastname
            const sentiment = new Sentiment();
            let result = sentiment.analyze(comment);

            if (result.score < 0) {
                
                firebase
                  .firestore()
                  .collection("CustomerReview")
                  .add({
                    productid: props.id,
                    name,
                    email:x.email,
                    date,
                    comment,
                    title,
                    generalSentiment: "Negative 😡😠",
                  })
                  .then(() => {
                    document.getElementById("review-date").value = "";
                    document.getElementById("review-title").value = "";
                    document.getElementById("review-body").value = "";
          
                    toast.success("Your Review Add", {
                      position: "bottom-left",
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                    });
                    Router.push('/Orderhistory')
                  });
              
              } else if (result.score > 0) {
                
                firebase
                  .firestore()
                  .collection("CustomerReview")
                  .add({
                    productid: props.id,
                    name,
                    email:x.email,
                    date,
                    comment,
                    title,
                    generalSentiment: "Positive 😍",
                  })
                  .then(() => {
                    document.getElementById("review-date").value = "";
                    document.getElementById("review-title").value = "";
                    document.getElementById("review-body").value = "";

                    toast.success("Your Review Add", {
                      position: "bottom-left",
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                    });
                    Router.push('/Orderhistory')
                  });
               
              } else {
                
                firebase
                  .firestore()
                  .collection("CustomerReview")
                  .add({
                    productid: props.id,
                    name,
                    email:x.email,
                    date,
                    comment,
                    title,
                    generalSentiment: "Newtral 😐",
                  })
                  .then(() => {

                    document.getElementById("review-date").value = "";
                    document.getElementById("review-title").value = "";
                    document.getElementById("review-body").value = "";

                    
                    toast.success("Your Review Add", {
                      position: "bottom-left",
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                    });
                    Router.push('/Orderhistory')
                  });
                
              }
        }
        
}






    return (
        <React.Fragment>
            <TopHeader />
            <Navbar />
            <PageBanner
                pageTitle="Review"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Review"
            />
            <section className="track-order-area ptb-100">
                <div className="container">
                    <div className="track-order-content">
                        <h2>Write a Review</h2>

                        <form onSubmit={reviewdata}>
                            <div className="row">
                           
                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <input
                                            value={title}
                                            onChange={(e) =>Settitle(e.target.value)}
                                            type="text"
                                            id="review-title"
                                            name="review-title"
                                            placeholder="Enter your review a title"
                                            className="form-control"
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <textarea
                                            value={comment}
                                            onChange={(e) =>Setcomment(e.target.value)}
                                            name="review-body"
                                            id="review-body"
                                            cols="30"
                                            rows="6"
                                            placeholder="Write your comments here"
                                            className="form-control"
                                        ></textarea>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <input
                                            id="review-date"
                                            type="date"
                                            value={date}
                                            onChange={(e) =>Setdate(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <button
                                        
                                        type="submit"
                                        
                                        className="default-btn"
                                    >
                                        Submit Review
                                  </button>
                                </div>
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
};
Review.getInitialProps = ({ query: { id } }) => {
    return {
        id,
    };
};
export default Review;