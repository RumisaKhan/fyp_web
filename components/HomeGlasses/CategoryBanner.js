import Link from 'next/link';

const CategoryBanner = () => {
    return(
        <section className="categories-banner-area pt-100 pb-70">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-categories-box left-categories hover-active">
                            <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647797935/gc2_z2qwmd.jpg" alt="image" />

                            <div className="content">
                                <span>50% OFF</span>
                                <h3>Aviators</h3>

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
                        <div className="single-categories-box left-categories hover-active ">
                            <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647797936/gc3_iaeip0.jpg" alt="image" />

                            <div className="content">
                                <span>40% OFF</span>
                                <h3>Cat Eyes</h3>
                                
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
                        <div className="single-categories-box left-categories hover-active ">
                            <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647797935/gc1_d1zoi0.jpg" alt="image" />

                            <div className="content">
                                <span>30% OFF</span>
                                <h3>Rounds</h3>
                                
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
                            <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647797937/gc4_hmqlel.jpg" alt="image" />

                            <div className="content">
                                <span>20% OFF</span>
                                <h3>Clud Master</h3>
                                
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