import React from 'react';
import { connect } from 'react-redux';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import Banner from '../components/HomeNecklace/Banner';
import CategoryBanner from '../components/HomeNecklace/CategoryBanner';
import Partner from '../components/Common/Partner';
import BlogPost from '../components/HomeNecklace/BlogPost';
import InstagramFeed from '../components/Common/InstagramFeed';
import Footer from '../components/Layouts/Footer';
import RecentProducts from '../components/HomeNecklace/RecentProducts';
import PopularProducts from '../components/HomeNecklace/PopularProducts';
import BestSellingProducts from '../components/HomeNecklace/BestSellingProducts';

const Necklace = ({ products }) => {
    return (
       <div className="grocery-demo">
            <TopHeader />
            <Navbar />
            <Banner />
            <RecentProducts products={products.slice(0, 6)} />
            <CategoryBanner />
            <PopularProducts products={products.slice(6, 10)} />
            <Partner />
            <BestSellingProducts products={products.slice(Math.floor(Math.random() * (products.length - 1) ), Math.floor(Math.random() * 1+(products.length - 1)))} />
            <BlogPost />
            <InstagramFeed />
            <Footer />
       </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products.filter( product => product.type == 'Necklace' )
    }
}

export default connect(mapStateToProps)(Necklace)