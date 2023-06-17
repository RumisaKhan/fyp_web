import Link from 'next/link';

const CategoryBanner = () => {
    return(
        <section className="categories-banner-area pt-100 pb-70">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-categories-box hover-active">
                            <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647800039/cc1_ya5lhp.jpg" alt="image" />

                            <div className="content">
                                <span>Don’t Miss Today</span>
                                <h3>50% OFF</h3>

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
                        <div className="single-categories-box hover-active">
                            <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647800039/cc5_asfelf.jpg" alt="image" />

                            <div className="content">
                                <span>New Collection</span>
                                <h3>Need Now</h3>
                                
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
                        <div className="single-categories-box hover-active">
                            <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647800039/cc3_ebcjua.jpg" alt="image" />

                            <div className="content">
                                <span>Your Looks</span>
                                <h3>Must Haves</h3>
                                
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
                        <div className="single-categories-box hover-active">
                            <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647800039/cc2_zvos3d.jpg" alt="image" />

                            <div className="content ">
                                <span>Take 20% OFF</span>
                                <h3 className="text-white">Winter Spring!</h3>
                                
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