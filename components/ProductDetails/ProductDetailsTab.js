import React, { Component } from "react";
import Link from "next/link";
import Sentiment from "sentiment";
import { firebase } from "../../firebase";
import { toast } from "react-toastify";
import StarRatings from 'react-star-ratings';
class ProductDetailsTab extends Component {
  state = {
    name: "",
    email: "",
    title: "",
    comment: "",
    date: "",
    newReviews: [],
    newComment:"",
    newReviewsId: []
  };
  
  checkuser(d) {
    var x = JSON.parse(localStorage.getItem("user"))
    return x.email
  }
  x = JSON.parse(localStorage.getItem("user")) || null

  static getInitialProps = ({ query }) => {
    return {
      id: query.id,
    };
  };

  openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs-item");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("fadeInUp");
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    document.getElementById(tabNmae).style.display = "block";
    document.getElementById(tabNmae).className += " fadeInUp animated";
    evt.currentTarget.className += "current";
  };
  componentDidMount() {
    const sentiment = new Sentiment();
    var customerReivew = [];
    var customermessage = [];
    var newreviewsid = [];
    var commentvariable = " ";
    firebase
      .firestore()
      .collection("CustomerReview")
      .get()
      .then((res) => {
        res.forEach((doc) => {
          var orderObj = doc.data();
          if (this.props.id === orderObj.productid) {
            customerReivew.push(orderObj);
            customermessage.push(orderObj.comment);
            commentvariable += orderObj.comment +" "
            newreviewsid.push(doc.id)
          }
        });

        this.setState({ newReviews: customerReivew });
     
        this.setState({ newReviewsId: newreviewsid });
        
      for (let i = 0; i < customermessage.length; i++) {
        commentvariable += customermessage[i]+" "
        
      }
      this.setState({ newComment: commentvariable });
      });

      
      
    }
    
    render() {
      const sentiment = new Sentiment();
      
 
    return (
      <div className="tab products-details-tab">
        <ul className="tabs">
          <li
            onClick={(e) => {
              e.preventDefault();
              this.openTabSection(e, "tab1");
            }}
            className="current"
          >
            <a href="#">
              <div className="dot"></div> Description
            </a>
          </li>

          <li
            onClick={(e) => {
              e.preventDefault();
              this.openTabSection(e, "tab2");
            }}
          >
            <a href="#">
              <div className="dot"></div> Additional Information
            </a>
          </li>

          <li
            onClick={(e) => {
              e.preventDefault();
              this.openTabSection(e, "tab3");
            }}
          >
            <a href="#">
              <div className="dot"></div> Shipping
            </a>
          </li>

          <li
            onClick={(e) => {
              e.preventDefault();
              this.openTabSection(e, "tab4");
            }}
          >
            <a href="#">
              <div className="dot"></div> Why Buy From Us
            </a>
          </li>

          <li
            onClick={(e) => {
              e.preventDefault();
              this.openTabSection(e, "tab5");
            }}
          >
            <a href="#">
              <div className="dot"></div> Reviews
            </a>
          </li>
        </ul>

        <div className="tab-content">
          <div id="tab1" className="tabs-item">
            <div className="products-details-tab-content">
              <p>
                Design inspiration lorem ipsum dolor sit amet, consectetuer
                adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci
                magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam
                sit amet enim. Suspendisse id velit vitae ligula volutpat
                condimentum. Aliquam erat volutpat. Sed quis velit. Nulla
                facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam
                consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus
                nunc ullamcorper orci, fermentum bibendum enim nibh eget ipsum.
                Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper,
                lectus nunc ullamcorper orci, fermentum bibendum enim nibh eget
                ipsum. Nulla libero. Vivamus pharetra posuere sapien.
              </p>

              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <ul>
                    <li>Fabric 1: 100% Polyester</li>
                    <li>Fabric 2: 100% Polyester, Lining: 100% Polyester</li>
                    <li>Fabric 3: 75% Polyester, 20% Viscose, 5% Elastane</li>
                  </ul>
                </div>

                <div className="col-lg-6 col-md-6">
                  <ol>
                    <li>Fabric 3: 75% Polyester, 20% Viscose, 5% Elastane</li>
                    <li>Fabric 2: 100% Polyester, Lining: 100% Polyester</li>
                    <li>Fabric 1: 100% Polyester</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div id="tab2" className="tabs-item">
            <div className="products-details-tab-content">
              <div className="table-responsive">
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <td>Color:</td>
                      <td>Blue, Purple, White</td>
                    </tr>
                    <tr>
                      <td>Size:</td>
                      <td>20, 24</td>
                    </tr>
                    <tr>
                      <td>Material:</td>
                      <td>100% Polyester</td>
                    </tr>
                    <tr>
                      <td>Height:</td>
                      <td>180 cm - 5' 11”</td>
                    </tr>
                    <tr>
                      <td>Bust:</td>
                      <td>83 cm - 32”</td>
                    </tr>
                    <tr>
                      <td>Waist:</td>
                      <td>57 cm - 22”</td>
                    </tr>
                    <tr>
                      <td>Hips:</td>
                      <td>88 cm - 35</td>
                    </tr>
                    <tr>
                      <td>Shipping:</td>
                      <td>Free</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div id="tab3" className="tabs-item">
            <div className="products-details-tab-content">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>Shipping</td>
                      <td>This item Ship to USA</td>
                    </tr>

                    <tr>
                      <td>Delivery</td>
                      <td>
                        
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div id="tab4" className="tabs-item">
            <div className="products-details-tab-content">
              <p>Here are 5 more great reasons to buy from us:</p>

              <ol>
                <li>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </li>
                <li>
                  {" "}
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s.
                </li>
                <li>
                  When an unknown printer took a galley of type and scrambled it
                  to make a type specimen book.
                </li>
                <li>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </li>
                <li>
                  When an unknown printer took a galley of type and scrambled it
                  to make a type specimen book.
                </li>
              </ol>
            </div>
          </div>

          <div id="tab5" className="tabs-item">
            <div className="products-details-tab-content">
              <div className="products-review-form">
                <h3>Customer Reviews</h3>

                <div className="review-title">
                  <div className="rating">
                   
                    {this.state.newReviews.length === 0 ? (
                      <>
                        <i className="bx bx-star"></i>
                        <i className="bx bx-star"></i>
                        <i className="bx bx-star"></i>
                        <i className="bx bx-star"></i>
                        <i className="bx bx-star"></i>
                      </>
                    ) : sentiment.analyze(this.state.newComment).score <
                      0 ? (
                      <>
                      
                        <div>

                        
                        <StarRatings
                        rating={5*(sentiment.analyze(this.state.newComment).comparative * -1 )}
                        
                          // rating={1.5}
                          starDimension="21.5px"
                          starSpacing="1px"
                          starRatedColor="rgb(255,186,10)"
                          starEmptyColor="rgb(220,220,220)"
                          numberOfStars={5}
                        />
                        </div>
                        
                      </>
                    ) : sentiment.analyze(this.state.newComment).score >
                      0 ? (
                      <>
                        
                        <div style={{marginTop:"20px"}}>
                        <StarRatings
                           rating={5 * sentiment.analyze(this.state.newComment).comparative}
                        
                          starDimension="21.5px"
                          starSpacing="1px"
                          starRatedColor="rgb(255,186,10)"
                          starEmptyColor="rgb(220,220,220)"
                          numberOfStars={5}
                        />
                        </div>
                        
                      </>
                    ) : (
                      <>
                        
                        <StarRatings
                           rating={5 * sentiment.analyze(this.state.newComment).comparative}
                
                          starDimension="21.5px"
                          starSpacing="1px"
                          starRatedColor="rgb(255,186,10)"
                          starEmptyColor="rgb(220,220,220)"
                          numberOfStars={5}
                        />
                       
                      </>
                    )}
                  </div>
                  <p>Based on {this.state.newReviews.length} reviews</p>

                </div>

                <div className="review-comments">
                  <div className="review-item">
                
                    {this.state.newReviews.map((item, i) => {
                      return (
                        <React.Fragment key={i}>
                          <h3>{item.generalSentiment}</h3>
                          {this.x === null ? <h3>{item.title}</h3> : item.email === this.x.email ?

                            <h3>{item.title} <i style={{ color: "#b54ced", cursor: "pointer" }} onClick={() => window.location.href = `/Editreview/${this.state.newReviewsId[i]}`} className="bx bx-edit-alt"></i></h3>


                            : <h3>{item.title}</h3>}

                          <span>
                            <strong>
                              {item.name} on {item.date}
                            </strong>
                          </span>

                          <p>{item.comment}</p>
                        </React.Fragment>
                      );
                    })}
                  </div>

                  {/* <div className="review-item">
                    <>
                      <h3>{this.review.generalSentiment}</h3>
                      <h5>{this.review.title}</h5>
                      <span>
                        <strong>
                          {this.review.name} {this.review.date}
                        </strong>
                      </span>
                      <p>{this.review.comment}</p>
                    </>
                  </div> */}
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetailsTab;
