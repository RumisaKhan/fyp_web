import React, { Component } from "react";
import { firebase } from "../../firebase";
import TopHeader from "../../components/Layouts/TopHeader";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import FacilitySlider from "../../components/Common/FacilitySlider";
import InstagramFeed from "../../components/Common/InstagramFeed";
import Footer from "../../components/Layouts/Footer";
import Axios from "axios";

const maxVideoSize = 200

class ArView extends Component {
  state = {
    ArUrl: "",
    processing: false,
    isIntervalActive: false,
  };
  videoElement = React.createRef();
  canvasEl = React.createRef();
  static getInitialProps = ({ query }) => {
    return {
      id: query.id,
    };
  };
  componentDidMount() {
    let orderArray = [];
    firebase
      .firestore()
      .collection("products")
      .doc(this.props.id)
      .onSnapshot((res) => {
        orderArray.push(res.data());
        this.setState({ ArUrl: orderArray[0].aR });
      });
    const u = this;
    async function load() {
      const videoLoaded = await u.initializeCamera()
      videoLoaded.play()
      return videoLoaded
    }
    load()
    const { isIntervalActive } = this.state;
    if (!isIntervalActive) {
      this.startPictureInterval()
    }

  }

  componentWillUnmount() {
    clearInterval(this.sendingPicInterval);
    if(this.videoStream){
      this.videoStream.getTracks().forEach(track => {
        if (track.readyState == 'live' && track.kind === 'video') {
          track.stop();
        }
      });
    }
    this.setState({ isIntervalActive: false })
  }

  startPictureInterval = () => {
    this.setState({ isIntervalActive: true })
    this.sendingPicInterval = setInterval(() => {
      this.sendPic()
    }, 1000)
  }

  initializeCamera = async () => {
    this.videoElement.current.width = 650
    this.videoElement.current.height = 500
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          facingMode: 'user',
          width: 650,
          height: 500,
        },
      })
      this.videoStream = stream;
      this.videoElement.current.srcObject = stream

      return new Promise((resolve) => {
        this.videoElement.current.onloadedmetadata = () => {
          resolve(this.videoElement.current)
        }
      })
    }
    const errorMessage =
      'this device does not have a camera'
    alert(errorMessage)
    return Promise.reject(errorMessage)
  }

  sendPic = async () => {
    this.setState({ processing: true })

    const ctx = this.canvasEl.current.getContext('2d')
    ctx.drawImage(this.videoElement.current, 0, 0, 650, 500)
    const imgData = ctx.getImageData(0, 0, maxVideoSize, maxVideoSize)
    var imgURL = this.canvasEl.current.toDataURL();
    // Axios.post("http://localhost:5000/test_video", { "imageBase64": imgURL }).then((res) => {
    Axios.post("https://api.lastshop.cf/test_video", { "imageBase64": imgURL }).then((res) => {
      console.log(res)
    }).catch((Err) => {
      console.log(Err)
    })
    this.setState({ processing: false })

  }

  render() {
    console.log(this.props.id);
    const { processing } = this.state;

    return (
      <React.Fragment>
        <TopHeader />
        <Navbar />
        <PageBanner
          pageTitle="AR View"
          homePageUrl="/"
          homePageText="Home"
          activePageText="AR View"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflow: 'hidden',
          }}
        >
          {
            this.state.ArUrl === "" ? (
              <section className="track-order-area ptb-100">
                <div className="container">
                  <div className="track-order-content">
                    <h5
                      style={{
                        fontFamily: "Lato",
                        color: "#b54ced",
                        fontWeight: 600,
                      }}
                    >
                      Ar Model Coming Soon
                    </h5>

                  </div>
                </div>
              </section>
            ) :
              <div>
                <iframe src={this.state.ArUrl} height="505" width="655" title="ArView"></iframe>
              </div>
          }
        </div>
        <div
          style={{
            display: "none",
          }}
        >
          <video className="video" playsInline ref={this.videoElement} />
          <canvas
            ref={this.canvasEl}
            width={650}
            height={500}
          ></canvas>
        </div>

        <FacilitySlider />
        <InstagramFeed />
        <Footer />
      </React.Fragment>
    );
  }
}

export default ArView;
