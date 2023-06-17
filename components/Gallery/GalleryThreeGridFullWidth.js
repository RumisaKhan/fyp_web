import React, { Component } from 'react';
import Link from 'next/link';
import Lightbox from 'react-image-lightbox';

const images = [
    "https://res.cloudinary.com/lastshop802/image/upload/v1647789209/gallery1_fgp2n3.jpg",
    "https://res.cloudinary.com/lastshop802/image/upload/v1647789199/gallery2_gmrrqb.jpg",
    "https://res.cloudinary.com/lastshop802/image/upload/v1647789200/gallery3_ywdj7c.jpg",
    "https://res.cloudinary.com/lastshop802/image/upload/v1647789212/gallery4_iucs4d.jpg",
    "https://res.cloudinary.com/lastshop802/image/upload/v1647789207/gallery5_hckayu.jpg",
    "https://res.cloudinary.com/lastshop802/image/upload/v1647789206/gallery6_zqnaxg.jpg",
    "https://res.cloudinary.com/lastshop802/image/upload/v1647789203/gallery7_uqdy6i.jpg",
    "https://res.cloudinary.com/lastshop802/image/upload/v1647789202/gallery8_zcbjmu.jpg",
    "https://res.cloudinary.com/lastshop802/image/upload/v1647789204/gallery9_zb9yxs.jpg",
    "https://res.cloudinary.com/lastshop802/image/upload/v1647789206/gallery10_vkthtm.jpg",
    "https://res.cloudinary.com/lastshop802/image/upload/v1647789211/gallery11_g7sfgz.jpg",
    "https://res.cloudinary.com/lastshop802/image/upload/v1647789208/gallery12_qf7jl1.jpg",
]

class GalleryThreeGridFullWidth extends Component {
    state = {
        photoIndex: 0,
        isOpenImage: false
    }
    render() {
        const { photoIndex, isOpenImage } = this.state;
        return (
            <section className="gallery-area ptb-100">
                <div className="container-fluid">
                    <div className="row">
                        {isOpenImage && (
                            <Lightbox
                                mainSrc={images[photoIndex]}
                                nextSrc={images[(photoIndex + 1) % images.length]}
                                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                onCloseRequest={() => this.setState({ isOpenImage: false })}
                                onMovePrevRequest={() =>
                                this.setState({
                                    photoIndex: (photoIndex + images.length - 1) % images.length,
                                })
                                }
                                onMoveNextRequest={() =>
                                    this.setState({
                                        photoIndex: (photoIndex + 1) % images.length,
                                    })
                                }
                            />
                        )}

                        <div className="col-lg-4 col-md-6">
                            <div className="single-gallery-item">
                                <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647789209/gallery1_fgp2n3.jpg" alt="image" />

                                <div className="gallery-content">
                                    <span>SHIRT</span>
                                    <h3>Long Sleeve Leopard T-Shirt</h3>
                                </div>

                                <Link href="#">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true,  photoIndex: 0 })}}
                                    ></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-gallery-item">
                                <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647789199/gallery2_gmrrqb.jpg" alt="image" />

                                <div className="gallery-content">
                                    <span>TWIST SHIRT</span>
                                    <h3>Causal V-Neck Soft Raglan</h3>
                                </div>

                                <Link href="#">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true,  photoIndex: 1 })}}
                                    ></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-gallery-item">
                                <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647789200/gallery3_ywdj7c.jpg" alt="image" />

                                <div className="gallery-content">
                                    <span>ECOSMART</span>
                                    <h3>Hanes Men's Pullover</h3>
                                </div>

                                <Link href="#">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true,  photoIndex: 2 })}}
                                    ></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-gallery-item">
                                <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647789212/gallery4_iucs4d.jpg" alt="image" />

                                <div className="gallery-content">
                                    <span>SMART SHIRT</span>
                                    <h3>Gildan Men's Crew T-Shirt</h3>
                                </div>

                                <Link href="#">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true,  photoIndex: 3 })}}
                                    ></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-gallery-item">
                                <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647789207/gallery5_hckayu.jpg" alt="image" />

                                <div className="gallery-content">
                                    <span>T-SHIRT</span>
                                    <h3>Yidarton Women's Comfy</h3>
                                </div>

                                <Link href="#">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true,  photoIndex: 4 })}}
                                    ></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-gallery-item">
                                <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647789206/gallery6_zqnaxg.jpg" alt="image" />

                                <div className="gallery-content">
                                    <span>T-SHIRT</span>
                                    <h3>Tbmpoy Men's Tapered</h3>
                                </div>

                                <Link href="#">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true,  photoIndex: 5 })}}
                                    ></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-gallery-item">
                                <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647789203/gallery7_uqdy6i.jpg" alt="image" />

                                <div className="gallery-content">
                                    <span>ECOSMART</span>
                                    <h3>Womens Tops Color</h3>
                                </div>

                                <Link href="#">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true,  photoIndex: 6 })}}
                                    ></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-gallery-item">
                                <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647789202/gallery8_zcbjmu.jpg" alt="image" />

                                <div className="gallery-content">
                                    <span>SMART SHIRT</span>
                                    <h3>Open Front Knit Sweaters</h3>
                                </div>

                                <Link href="#">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true,  photoIndex: 7 })}}
                                    ></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-gallery-item">
                                <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647789204/gallery9_zb9yxs.jpg" alt="image" />

                                <div className="gallery-content">
                                    <span>TWIST SHIRT</span>
                                    <h3>Sunnyme Women's Ponchos</h3>
                                </div>

                                <Link href="#">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true,  photoIndex: 8 })}}
                                    ></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-gallery-item">
                                <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647789206/gallery10_vkthtm.jpg" alt="image" />

                                <div className="gallery-content">
                                    <span>SHIRT</span>
                                    <h3>Block Striped Draped</h3>
                                </div>

                                <Link href="#">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true,  photoIndex: 9 })}}
                                    ></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-gallery-item">
                                <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647789211/gallery11_g7sfgz.jpg" alt="image" />

                                <div className="gallery-content">
                                    <span>T-SHIRT</span>
                                    <h3>Women's Modern-Skinny</h3>
                                </div>

                                <Link href="#">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true,  photoIndex: 10 })}}
                                    ></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-gallery-item">
                                <img src="https://res.cloudinary.com/lastshop802/image/upload/v1647789208/gallery12_qf7jl1.jpg" alt="image" />

                                <div className="gallery-content">
                                    <span>T-SHIRT</span>
                                    <h3>Fleece Hooded Sweatshirt</h3>
                                </div>

                                <Link href="#">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true,  photoIndex: 11 })}}
                                    ></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default GalleryThreeGridFullWidth;