const express = require("express");
const sgMail = require("@sendgrid/mail");
const router = express.Router();
router.post("/api/mail", (req, res) => {
  sgMail.setApiKey(
    "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"
  );
  sgMail
    .send({
      to: req.body.email,
      from: "arshop38125@gmail.com",
      subject: "Order Confirmation",
      html: `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
          <style>
            @import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,200&display=swap");
      
            * {
              margin: 0 !important;
              padding: 0 !important;
              border: 0 !important;
              font-size: 19px !important;
              font-family: "sans-serif" !important;
              max-width: 800px !important;
              margin: 0 auto !important;
              text-decoration: none !important;
              
            }
            
           
            img {
              max-width: 100% !important;
            }
      
            header {
              background-color: #f0f6fb !important;
              width: 98% !important;
            }
      
            #logo {
              max-width: 120px !important;
              margin: 3% 0 3% 3% !important;
              float: left !important;
            }
      
            #wrapper {
              background-color: #f0f6fb !important;
            }
      
            #social {
              float: right !important;
              margin: 3% 2% 4% 3% !important;
              list-style-type: none !important;
            }
      
            #social > li {
              display: inline !important;
            }
      
            #social > li > a > img {
              max-width: 35px !important;
            }
      
            h1,h3,h4,
            p {
              color: black !important;
              margin: 3% !important;
            }
            .btn {
               
              float: right !important;
              margin: 0 2% 4% 0 !important;
              background-color: #b54ced !important;
              color: #f6faff !important;
              text-decoration: none !important;
              font-weight: 800 !important;
              padding: 8px 12px !important;
              border-radius: 8px !important;
              letter-spacing: 2px !important;
            }
            .btn:hover {
              background-color: white !important;
              color: #b54ced !important;
              border: 0.1px solid black !important;
            }
      
            hr {
              height: 1px !important;
              background-color: #b54ced !important;
              clear: both !important;
              width: 96% !important;
              margin: auto !important;
            }
           
      
            #contact {
               
              text-align: center !important;
              padding-bottom: 3% !important;
              line-height: 16px !important;
              font-size: 12px !important;
              color: #303840 !important;  
              text-decoration: none;
            }
            #contact span {
           
              text-align: center !important;
              padding-bottom: 3% !important;
              line-height: 16px !important;
              font-size: 12px !important;
              color: #303840 !important;  
              text-decoration: none;
            }
          </style>
        </head>
        <body>
          <div id="wrapper">
            <header>
              <div id="logo">
                <img
                  src="https://res.cloudinary.com/divzt1yq9/image/upload/c_scale,w_100/v1687020368/logo_ixpdvi.png"
                  alt=""
                />
              </div>
              <div>
                <ul id="social">
                  <li>
                    <a href="#" target="_blank"
                      ><img
                        src="https://mdbgo.io/dawidadach/responsiveemail/img/fb-color.png"
                        alt=""
                    /></a>
                  </li>
                  <li>
                    <a href="#" target="_blank"
                      ><img
                        src="https://mdbgo.io/dawidadach/responsiveemail/img/in-color.png"
                        alt=""
                    /></a>
                  </li>
                  <li>
                    <a href="#" target="_blank"
                      ><img
                        src="https://mdbgo.io/dawidadach/responsiveemail/img/tw-color.png"
                        alt=""
                    /></a>
                  </li>
                  <li>
                    <a href="#" target="_blank"
                      ><img
                        src="https://mdbgo.io/dawidadach/responsiveemail/img/yt-color.png"
                        alt=""
                    /></a>
                  </li>
                </ul>
              </div>
            </header>
            <div id="banner">
              <img
                src="https://res.cloudinary.com/lastshop802/image/upload/v1635612824/blog-slider1_oqtihx.jpg"
                width="1000"
                alt=""
              />
            </div>
            <div class="one-col">
              <h1 >Your Order is Confirmed, Ready to Dispatch</h1>
              <h3 >Your Currently booked order type is : ${req.body.type}</h3>
              <h4 >Your Order Tracking key is :  ${req.body.trackingkey}</h4>
      
              <p >
                Thanks for your Order <br/>
                This is your confirmation email. We'll be in touch soon let you know When <br/>
                your order has been shipped. Track your order by using the tracking key. <br>
                Love,ARShop. <br /><br /><br /><br />
                Scan QR Code to check Your Order Fake or Real.
              </p>
              <img src="https://chart.googleapis.com/chart?cht=qr&chl=https://lastshop.cf/QrOrderDetails/${req.body.id}&chs=275x250" alt="QrCode" width="275" height="250">
                
                  <a href="http://lastshop.cf/" class="btn">Shopping Continues</a>
              <hr />
      
              <footer>
                <p id="contact">
                  One of the most popular on the web is shopping. <br />
                 Mehran University Of Engineering And Technology Jamshoro<br />
                   <br />
                  <span style="text-decoration: none !important;margin: 3%">
                  arshop38125@gmail.com
                </span>
                </p>
              </footer>
            </div>
          </div>
        </body>
      </html>`,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
});

module.exports = router;