import Link from 'next/link';

const CategoryBanner = () => {
    return(
        <section className="categories-banner-area pt-100 pb-70">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-categories-box left-categories hover-active">
                            <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647796740/ec5_nawuce.jpg" alt="image" />

                            <div className="content">
                                <span>20% OFF</span>
                                <h3>Huggies</h3>

                                <Link href="#">
                                    <a className="default-btn">Shop Now</a>
                                </Link>
                            </div>

                            <Link href="#">
                                <a className="link-btn"></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-categories-box left-categories hover-active">
                            <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647796723/ec1_y9ymuh.jpg" alt="image" />

                            <div className="content">
                                <span>20% OFF</span>
                                <h3>Hoops</h3>
                                
                                <Link href="#">
                                    <a className="default-btn">Shop Now</a>
                                </Link>
                            </div>
                            
                            <Link href="#">
                                <a className="link-btn"></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-categories-box left-categories hover-active">
                            <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647796745/ec3_uuoxaj.jpg" alt="image" />

                            <div className="content">
                                <span>30% OFF</span>
                                <h3>Drops</h3>
                                
                                <Link href="#">
                                    <a className="default-btn">Shop Now</a>
                                </Link>
                            </div>
                            
                            <Link href="#">
                                <a className="link-btn"></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-categories-box left-categories hover-active">
                            <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647796737/ec2_ge4hk5.jpg" alt="image" />

                            <div className="content">
                                <span>20% OFF</span>
                                <h3>Endless</h3>
                                
                                <Link href="#">
                                    <a className="default-btn">Shop Now</a>
                                </Link>
                            </div>
                            
                            <Link href="#">
                                <a className="link-btn"></a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CategoryBanner;