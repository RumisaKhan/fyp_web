import React from 'react';
import Link from 'next/link';

const Banner = () => {
    return (
        <div className="jewelry-main-banner">
            <div className="jewelry-banner-content">
                <div className="line"></div>
                <span className="sub-title" style={{color:'black'}}>Trending Collection</span>
                <h1 style={{color:'black'}}>Glasses</h1>
                <p style={{color:'black'}}>Get 30% OFF on new Arrivals. </p>
                <Link href="#">
                    <a className="default-btn">Shop Now</a>
                </Link>
            </div>
        </div>
    )
}

export default Banner;