import '../styles.scss';
import Head from "next/head";
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store/reducers/cartReducer';
import { ToastContainer } from 'react-toastify';
import Layout from '../components/_App/Layout';
import { checkUserLogin, addProducts } from '../store/actions/cartActions';
import "react-datetime/css/react-datetime.css";

const MyApp = ({Component, pageProps, store}) => {
    React.useEffect(() => {
        store.dispatch(checkUserLogin())
        store.dispatch(addProducts())
    });
    return (
        <Layout>
            <ToastContainer />
            <Provider store={store}>
            <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />
          <meta name="description" content="Description" />
          <meta name="keywords" content="Keywords" />

          <link rel="manifest" href="/manifest.json" />
          <link
            href="../public/icons/16.png"
            rel="icon"
            type="image/png"
            sizes="16x16"
          />
          <link
            href="../public/icons/32.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
          />
          <link rel="apple-touch-icon" href="../public/icons/16.png"></link>
          <link rel="apple-touch-icon" href="../public/icons/32.png"></link>
    
          <meta name="theme-color" content="#f5b8e3" />
        </Head>
                <Component {...pageProps} />
            </Provider>
        </Layout>
    );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
    let pageProps = {};
    if(Component.getInitialProps){
        pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
};


export default withRedux(initStore)(MyApp)