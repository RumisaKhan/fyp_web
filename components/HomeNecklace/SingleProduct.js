import React, { Component } from 'react';
import Link from 'next/link';

class SingleProduct extends Component {
    state = {
        QuickViewModal: false
    }

    handleAddToCart = (id) => {
        this.props.onHandleAddToCart(id); 
    }

    toggleModal = () => {
        this.setState({
            QuickViewModal: !this.state.QuickViewModal
        });
        this.props.ontoggleModal(this.state.QuickViewModal); 
    }

    handleModalProduct = (product) => {
        this.props.onhandleModalProduct(product); 
    }
    render(){
        let {product, styleCls, styleClsTwo} = this.props;
        return(
            <div className={styleCls}>
                <div className={styleClsTwo || "single-products-box"}>
                    <div className="products-image">
                        <Link href={`/product?id=${product.id}`}>
                            <a>
                                <img src={product.imageUrl}  className="main-image" alt="image" />
                                <img src={product.imageHoverUrl} className="hover-image" alt="image" />
                            </a>
                        </Link>

                        {/* <div className="products-button">
                            <ul>
                                <li>
                                    <div className="wishlist-btn">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()}>
                                                <i className='bx bx-heart'></i>
                                                <span className="tooltip-label">Add to Wishlist</span>
                                            </a>
                                        </Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="compare-btn">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()}>
                                                <i className='bx bx-refresh'></i>
                                                <span className="tooltip-label">Compare</span>
                                            </a>
                                        </Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="quick-view-btn">
                                        <Link href="#">
                                            <a 
                                                onClick={ e => {
                                                    e.preventDefault();
                                                    this.toggleModal();
                                                    this.handleModalProduct(product);
                                                }}
                                            >
                                                <i className='bx bx-search-alt'></i>
                                                <span className="tooltip-label">Quick View</span>
                                            </a>
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </div> */}

                        {
                            product.onSale == true ? (
                                <div className="sale-tag">Sale!</div>
                            ) : null
                        }

                        {
                            product.newProduct == true ? (
                                <div className="new-tag">New!</div>
                            ) : null
                        }

                    </div>

                    <div className="products-content">
                        <h3><a href={`/product?id=${product.id}`}>{product.title}</a></h3>
                        <div className="price">
                            {
                                product.offer ? (
                                    <React.Fragment>
                                        <span className="old-price">${product.oldPrice}</span>
                                        <span className="new-price">${product.newPrice}</span>
                                    </React.Fragment>
                                ) : (
                                    <span className="new-price">${product.oldPrice}</span>
                                )
                            }
                        </div>
                        {/* <div className="star-rating">
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                        </div> */}
                        <a 
                            className="add-to-cart"
                            onClick={(e) => {
                                e.preventDefault(); this.handleAddToCart(product.id)
                            }}
                        >
                            Add To Cart
                        </a>
                    </div>
                    {product.discount == true ? (
                        <span className="products-discount">
                            <span>
                                {product.discountOff}% OFF
                            </span>
                        </span>
                    ): null}
                </div>
            </div>
        )
    }
}

export default SingleProduct;