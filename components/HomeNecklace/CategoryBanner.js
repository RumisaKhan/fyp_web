import Link from 'next/link';

const CategoryBanner = () => {
    return(
        <section className="categories-banner-area pt-100 pb-70">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-categories-box left-categories">
                            <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647798309/nc1_d6h1to.jpg" alt="image" />

                            <div className="content">
                                <span>10% OFF</span>
                                <h3>Chokers</h3>

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
                        <div className="single-categories-box left-categories">
                            <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647798310/nc8_jnjio6.jpg" alt="image" />

                            <div className="content">
                                <span>10% OFF</span>
                                <h3>Double Chains</h3>
                                
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
                        <div className="single-categories-box left-categories">
                            <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647798309/nc5_vnhbyc.jpg" alt="image" />

                            <div className="content">
                                <span>10% OFF</span>
                                <h3>Simple as You</h3>
                                
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
                        <div className="single-categories-box left-categories">
                            <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647798310/nc6_aunmrp.jpg" alt="image" />

                            <div className="content">
                                <span>10% OFF</span>
                                <h3>TC Chains</h3>
                                
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