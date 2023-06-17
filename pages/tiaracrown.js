import React from 'react';
import { connect } from 'react-redux';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import Banner from '../components/HomeTiaracrown/Banner';
import CategoryBanner from '../components/HomeTiaracrown/CategoryBanner';
import Partner from '../components/Common/Partner';
import BlogPost from '../components/HomeTiaracrown/BlogPost';
import InstagramFeed from '../components/Common/InstagramFeed';
import Footer from '../components/Layouts/Footer';
import RecentProducts from '../components/Shared/RecentProducts';
import PopularProducts from '../components/HomeNecklace/PopularProducts';
import BestSellingProducts from '../components/HomeNecklace/BestSellingProducts';

const Tiaracrown = ({ products }) => {
    return (
       <React.Fragment>
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
       </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products.filter( product => product.type == 'Tiaracrown' )
    }
}

export default connect(mapStateToProps)(Tiaracrown)