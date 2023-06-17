import React from 'react';
import { connect } from 'react-redux';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import Banner from '../components/HomeGlasses/Banner';
import CategoryBanner from '../components/HomeGlasses/CategoryBanner';
import Testimonials from '../components/HomeGlasses/Testimonials';
import BlogPost from '../components/HomeGlasses/BlogPost';
import InstagramFeed from '../components/Common/InstagramFeed';
import Footer from '../components/Layouts/Footer';
import RecentProducts from '../components/Shared/RecentProducts';
import PopularProducts from '../components/Shared/PopularProducts';
import BestSellingProducts from '../components/Shared/BestSellingProducts';

const Glasses = ({ products }) => {
    return (
       <React.Fragment>
            <TopHeader />
            <Navbar />
            <Banner />
            <RecentProducts products={products.slice(0, 6)} />
            <CategoryBanner />
            <PopularProducts products={products.slice(6, 10)} />
            <div className="testimonials-section">
                <Testimonials />
            </div>
            <BestSellingProducts products={products.slice(Math.floor(Math.random() * (products.length - 1) ), Math.floor(Math.random() * 1+(products.length - 1)))} />
            <BlogPost />
            <InstagramFeed />
            <Footer />
       </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products.filter( product => product.type == 'Glasses' )
    }
}

export default connect(mapStateToProps)(Glasses)