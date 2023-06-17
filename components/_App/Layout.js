import React from 'react';
import Head from "next/head";
import GoTop from '../Shared/GoTop';

const Layout = ({ children }) => {
    const [loader, setLoader] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => setLoader(false), 2000);
    }, [])


    return (
        <React.Fragment>
            <Head>
                <title>ARShop</title>
                <meta name="description" content="LastShop - React Next eCommerce Template & AugmenticReality" />
                <meta name="og:title" property="og:title" content="LastShop - React Next eCommerce Template & AugmenticReality"></meta>
                <meta name="twitter:card" content="LastShop - React Next eCommerce Template & AugmenticReality"></meta>
                <link rel="canonical" href="https://lastshop.cf/"></link>
                <meta property="og:image" content="https://res.cloudinary.com/lastshop802/image/upload/v1635612824/blog-slider1_oqtihx.jpg" />
            </Head>
            {loader ? <div className="loading-container">
                <div className="spinner-border spin-purple" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div> : children}
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </React.Fragment>
    );
}

export default Layout;