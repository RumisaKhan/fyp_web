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
            items: 4,
        },
        768: {
            items: 4,
        },
        1200: {
            items: 7,
        }
    }
}

class Partner extends Component {

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
            <div className="partner-area ptb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Partners</h2>
                    </div>
                    
                    {this.state.display ? <OwlCarousel 
                        className="partner-slides owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="partner-item">
                            <Link href="#">
                                <a>
                                    <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647760564/partner1_lkk4st.png" alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="partner-item">
                            <Link href="#">
                                <a>
                                    <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647760564/partner2_y9wyur.png" alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="partner-item">
                            <Link href="#">
                                <a>
                                    <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647760564/partner3_iqwqej.png" alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="partner-item">
                            <Link href="#">
                                <a>
                                    <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647760564/partner4_ebqhip.png" alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="partner-item">
                            <Link href="#">
                                <a>
                                    <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647760564/partner5_obppzl.png" alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="partner-item">
                            <Link href="#">
                                <a>
                                    <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647760564/partner6_dc7qxu.png" alt="image" />
                                </a>
                            </Link>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </div>
        );
    }
}

export default Partner;