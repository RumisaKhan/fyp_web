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
                            <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647788576/insta1_beq3ap.jpg" alt="image" />

                            <i className='bx bxl-instagram'></i>

                            <Link href="#">
                                <a target="_blank" className="link-btn"></a>
                            </Link>
                        </div>

                        <div className="single-instagram-post">
                            <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647788576/insta2_m921d3.jpg" alt="image" />

                            <i className='bx bxl-instagram'></i>

                            <Link href="#">
                                <a target="_blank" className="link-btn"></a>
                            </Link>
                        </div>

                        <div className="single-instagram-post">
                            <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647788576/insta3_wxiggp.jpg" alt="image" />

                            <i className='bx bxl-instagram'></i>

                            <Link href="#">
                                <a target="_blank" className="link-btn"></a>
                            </Link>
                        </div>
                        
                        <div className="single-instagram-post">
                            <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647788576/insta4_hwjy5a.jpg" alt="image" />

                            <i className='bx bxl-instagram'></i>

                            <Link href="#">
                                <a target="_blank" className="link-btn"></a>
                            </Link>
                        </div>
                        
                        <div className="single-instagram-post">
                            <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647788576/insta5_uugsdp.jpg" alt="image" />

                            <i className='bx bxl-instagram'></i>

                            <Link href="#">
                                <a target="_blank" className="link-btn"></a>
                            </Link>
                        </div>
                        
                        <div className="single-instagram-post">
                            <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647788576/insta6_vdfjz1.jpg" alt="image" />

                            <i className='bx bxl-instagram'></i>

                            <Link href="#">
                                <a target="_blank" className="link-btn"></a>
                            </Link>
                        </div>
                        
                        <div className="single-instagram-post">
                            <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647788576/insta7_iekwt2.jpg" alt="image" />

                            <i className='bx bxl-instagram'></i>

                            <Link href="#">
                                <a target="_blank" className="link-btn"></a>
                            </Link>
                        </div>
                        
                        <div className="single-instagram-post">
                            <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647788577/insta8_w2p7wc.jpg" alt="image" />

                            <i className='bx bxl-instagram'></i>

                            <Link href="#">
                                <a target="_blank" className="link-btn"></a>
                            </Link>
                        </div>
                        
                        <div className="single-instagram-post">
                            <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647788577/insta9_bvbyj4.jpg" alt="image" />

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