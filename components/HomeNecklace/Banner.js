import React from 'react';
import Link from 'next/link';

const Banner = () => {
    return (
        <div className="grocery-main-banner">
            <div className="grocery-banner-content" style={{textAlign:'left'}} >
                <h1>Get Your Necklace</h1>
                <p>Beautiful and Eligent</p>
                <h2>10% OFF</h2>
                <Link href="#">
                    <a className="default-btn">Shop Now</a>
                </Link>
            </div>
        </div> 
    )
}

export default Banner;