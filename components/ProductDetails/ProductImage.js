import React, { Component } from 'react';
import Slider from "react-slick";

class ProductImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }
    
    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    renderSliderMainImages = () => {
        return DEFAULT_PROPS.map(({id, image}) => {
            return (
                <div key={id}>
                    <div className="item">
                        <img src={this.props.imageUrl} alt="image" />
                    </div>
                </div>
            )
        })
    }

    renderSliderSubImages = () => {
        return DEFAULT_PROPS.map(({id, image}) => {
            return (
                <div key={id}>
                    <div className="item">
                        <img src={this.props.imageUrl} alt="image" />
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="products-page-gallery">
                <div className="product-page-gallery-main">
                    <div>
                        <Slider
                            asNavFor={this.state.nav2}
                            ref={slider => (this.slider1 = slider)}
                        >
                            {
                                this.renderSliderMainImages()
                            }
                        </Slider>
                    </div>
                </div>

                <div className="product-page-gallery-preview">
                    <div>
                        <Slider
                            asNavFor={this.state.nav1}
                            ref={slider => (this.slider2 = slider)}
                            slidesToShow={5}
                            swipeToSlide={true}
                            focusOnSelect={true}
                            arrows={false}
                            dots={false}
                        >
                            {
                                this.renderSliderSubImages()
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

const DEFAULT_PROPS = [
    {
        id: 1,
        image: "https://res.cloudinary.com/lastshop802/image/upload/v1647802404/img3_ncm4qd.jpg"
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/lastshop802/image/upload/v1647802404/img4_jyhig6.jpg"
    },
    {
        id: 3,
        image: "https://res.cloudinary.com/lastshop802/image/upload/v1647802846/img-hover4_jgrmhg.jpg"
    },
    {
        id: 4,
        image: "https://res.cloudinary.com/lastshop802/image/upload/v1647802846/img-hover3_dccxdc.jpg"
    },
    {
        id: 5,
        image: "https://res.cloudinary.com/lastshop802/image/upload/v1647802846/img7_rnxroa.jpg"
    },
];

export default ProductImage;
