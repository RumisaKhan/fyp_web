import React, { Component } from 'react';
import Link from 'next/link';

class CategoriesBanner extends Component {
    render() {
        return (
            <section className="categories-banner-area pt-100 pb-70">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="categories-box">
                                <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647750871/categories5_pvpuec.jpg" alt="image" />

                                <div className="content">
                                    <h3>New Collections!</h3>
                                </div>
                                <Link href="/products-left-sidebar">
                                    <a className="link-btn"></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="categories-box">
                                        <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647750871/categories6_q94ryw.jpg" alt="image" />
            
                                        <div className="content">
                                            <h3>Our Popular Products</h3>
                                        </div>

                                        <Link href="/products-left-sidebar">
                                            <a className="link-btn"></a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="categories-box">
                                        <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647750872/categories7_f69v9q.jpg" alt="image" />
            
                                        <div className="content">
                                            <h3>Hot Trending Products</h3>
                                        </div>

                                        <Link href="/products-left-sidebar">
                                            <a className="link-btn"></a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="categories-box">
                                        <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647750872/categories8_rosjwk.jpg" alt="image" />
            
                                        <div className="content">
                                            <h3>Winter Collections!</h3>
                                        </div>

                                        <Link href="/products-left-sidebar">
                                            <a className="link-btn"></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default CategoriesBanner;