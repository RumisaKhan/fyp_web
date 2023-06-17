import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='flaticon-left'></i>",
        "<i class='flaticon-right-arrow'></i>"
    ],
    responsive: {
        0: {
            items: 2,
        },
        576: {
            items: 3,
        },
        768: {
            items: 4,
        },
        1200: {
            items: 6,
        }
    }
}

class InstagramFeed extends Component {

    _isMounted = false;
    state = {
        display: false,
    }
    componentDidMount(){ 
        this._isMounted = true;
        this.setState({ display: true }) 
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <div className="instagram-area">
                <div className="container-fluid">
                    <div className="instagram-title">
                        <a href="#" target="_blank">
                            <i className='bx bxl-instagram'></i> Follow us on @LastShop
                        </a>
                    </div>

                    {this.state.display ? <OwlCarousel 
                        className="instagram-slides owl-carousel owl-theme"
                        {...options}
                    > 
                        <div className="single-instagram-post">
                            <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647760329/insta1_spxkp2.jpg" alt="image" />

                            <i className='bx bxl-instagram'></i>

                            <Link href="#">
                                <a target="_blank" className="link-btn"></a>
                            </Link>
                        </div>

                        <div className="single-instagram-post">
                            <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647760328/insta2_axnzku.jpg" alt="image" />

                            <i className='bx bxl-instagram'></i>

                            <Link href="#">
                                <a target="_blank" className="link-btn"></a>
                            </Link>
                        </div>

                        <div className="single-instagram-post">
                            <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647760328/insta3_vz7bo0.jpg" alt="image" />

                            <i className='bx bxl-instagram'></i>

                            <Link href="#">
                                <a target="_blank" className="link-btn"></a>
                            </Link>
                        </div>
                        
                        <div className="single-instagram-post">
                            <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647760329/insta4_a3p0p8.jpg" alt="image" />

                            <i className='bx bxl-instagram'></i>

                            <Link href="#">
                                <a target="_blank" className="link-btn"></a>
                            </Link>
                        </div>
                        
                        <div className="single-instagram-post">
                            <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647760328/insta5_fti9fr.jpg" alt="image" />

                            <i className='bx bxl-instagram'></i>

                            <Link href="#">
                                <a target="_blank" className="link-btn"></a>
                            </Link>
                        </div>
                        
                        <div className="single-instagram-post">
                            <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647760328/insta6_nsrnuz.jpg" alt="image" />

                            <i className='bx bxl-instagram'></i>

                            <Link href="#">
                                <a target="_blank" className="link-btn"></a>
                            </Link>
                        </div>
                        
                        <div className="single-instagram-post">
                            <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647760329/insta7_a7r4dy.jpg" alt="image" />

                            <i className='bx bxl-instagram'></i>

                            <Link href="#">
                                <a target="_blank" className="link-btn"></a>
                            </Link>
                        </div>
                        
                        <div className="single-instagram-post">
                            <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647760329/insta8_n0lwox.jpg" alt="image" />

                            <i className='bx bxl-instagram'></i>

                            <Link href="#">
                                <a target="_blank" className="link-btn"></a>
                            </Link>
                        </div>
                        
                        <div className="single-instagram-post">
                            <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647760329/insta9_o1ca53.jpg" alt="image" />

                            <i className='bx bxl-instagram'></i>

                            <Link href="#">
                                <a target="_blank" className="link-btn"></a>
                            </Link>
                        </div>
                        
                        <div className="single-instagram-post">
                            <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647760329/insta10_b6tb1b.jpg" alt="image" />

                            <i className='bx bxl-instagram'></i>

                            <Link href="#">
                                <a target="_blank" className="link-btn"></a>
                            </Link>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </div>
        );
    }
}

export default InstagramFeed;