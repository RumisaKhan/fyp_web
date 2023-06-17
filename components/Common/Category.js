import React, { Component } from 'react';

class Category extends Component {
    render(){
        return(
            <section className="categories-banner-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="single-categories-box">
                                <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647750871/categories1_ouptey.jpg" alt="image" />

                                <div className="content text-white">
                                    <span>Don’t Miss Today</span>
                                    <h3>50% OFF</h3>
                                    <a href="#" className="default-btn">Discover Now</a>
                                </div>
                                <a href="#" className="link-btn"></a>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="single-categories-box">
                                <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647750871/categories2_bnpfd4.jpg" alt="image" />

                                <div className="content">
                                    <span>New Collection</span>
                                    <h3>Need Now</h3>
                                    <a href="#" className="default-btn">Discover Now</a>
                                </div>
                                <a href="#" className="link-btn"></a>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="single-categories-box">
                                <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647750871/categories3_nxq8fu.jpg" alt="image" />

                                <div className="content">
                                    <span>Your Looks</span>
                                    <h3>Must Haves</h3>
                                    <a href="#" className="default-btn">Discover Now</a>
                                </div>
                                <a href="#" className="link-btn"></a>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="single-categories-box">
                                <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647750871/categories4_l7qxxa.jpg" alt="image" />

                                <div className="content text-white">
                                    <span>Take 20% OFF</span>
                                    <h3>Winter Spring!</h3>
                                    <a href="#" className="default-btn">Discover Now</a>
                                </div>
                                <a href="#" className="link-btn"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Category;