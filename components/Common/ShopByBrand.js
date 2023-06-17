import React, { Component } from 'react';
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
            items: 7,
        }
    }
}

class ShopByBrand extends Component {
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
            <div className="brand-area ptb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Shop By Brand</h2>
                    </div>
                    
                    {this.state.display ? <OwlCarousel 
                        className="brand-slides owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="brand-item">
                            <a href="#"><img src="https://res.cloudinary.com/lastshop802/image/upload/v1647760915/brand1_kk46b9.png" alt="image" /></a>
                        </div>

                        <div className="brand-item">
                            <a href="#"><img src="https://res.cloudinary.com/lastshop802/image/upload/v1647760915/brand2_oksttr.png" alt="image" /></a>
                        </div>

                        <div className="brand-item">
                            <a href="#"><img src="https://res.cloudinary.com/lastshop802/image/upload/v1647760915/brand3_ldzsju.png" alt="image" /></a>
                        </div>

                        <div className="brand-item">
                            <a href="#"><img src="https://res.cloudinary.com/lastshop802/image/upload/v1647760915/brand4_ek0ak6.png" alt="image" /></a>
                        </div>

                        <div className="brand-item">
                            <a href="#"><img src="https://res.cloudinary.com/lastshop802/image/upload/v1647760915/brand5_qrrow5.png" alt="image" /></a>
                        </div>

                        <div className="brand-item">
                            <a href="#"><img src="https://res.cloudinary.com/lastshop802/image/upload/v1647760915/brand6_hcnqbo.png" alt="image" /></a>
                        </div>
                    </OwlCarousel> : null }
                </div>
            </div>
        );
    }
}

export default ShopByBrand;