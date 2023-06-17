import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="zxx">
        <Head>
          {/* <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" /> */}
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
          <link rel="apple-touch-icon" href="../public/icons/32.png"></link>
          <link rel="apple-touch-icon" href="../public/icons/16.png"></link>
          <meta name="theme-color" content="#b54ced" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {/* <link
            rel="icon"
            type="image/png"
            href={require("../images/icon.png")}
          ></link> */}
          <link
            rel="icon"
            type="image/png"
            href="https://res.cloudinary.com/divzt1yq9/image/upload/c_scale,w_100/v1687020368/logo_ixpdvi.png"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;