import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { connect } from 'react-redux';
import { userLogout } from '../../store/actions/cartActions';
import WishlistModal from '../Modals/WishlistModal';
import { toast } from "react-toastify";


class TopHeaderTwo extends Component {

    state = {
        WishlistModal: false,
        firstName:"",
        lastName:""
    };
    componentDidMount (){
    

        var x = JSON.parse(localStorage.getItem("user"))
    
        if (x==null) {
            
            this.setState({firstName:""})
            this.setState({lastName:""})
        }
        else{
            this.setState({firstName:x.firstname})
            this.setState({lastName:x.lastname})
        }
    
    
    }
    toggleModalWishlist = () => {
        this.setState({
            WishlistModal: !this.state.WishlistModal
        });
    }

    handleLogout = () => {
        this.props.userLogout();
        toast.success(`GoodBuy 😴 ${this.state.firstName}${this.state.lastName}`, {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        localStorage.clear();
        Router.push('/');
    }

    render() {
        const { user } = this.props;
        return (
            <React.Fragment>
                <div className="top-header">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-12">
                                <ul className="header-contact-info">
                                    <li>Welcome to ARShop</li>
                                    <li>Call: +92389299090</li>

                                    {/* <li>
                                        <div className="dropdown language-switcher d-inline-block">
                                            <button className="dropdown-toggle" type="button">
                                                <img src={require("../../images/us-flag.jpg")} alt="image" />
                                                <span>Eng <i className='bx bx-chevron-down'></i></span>
                                            </button>

                                            <div className="dropdown-menu">
                                                <Link href="#">
                                                    <a className="dropdown-item d-flex align-items-center">
                                                        <img src={require("../../images/germany-flag.jpg")} className="shadow-sm" alt="flag" />
                                                        <span>Ger</span>
                                                    </a>
                                                </Link>

                                                <Link href="#">
                                                    <a className="dropdown-item d-flex align-items-center">
                                                        <img src={require("../../images/france-flag.jpg")} className="shadow-sm" alt="flag" />
                                                        <span>Fre</span>
                                                    </a>
                                                </Link>

                                                <Link href="#">
                                                    <a className="dropdown-item d-flex align-items-center">
                                                        <img src={require("../../images/spain-flag.jpg")} className="shadow-sm" alt="flag" />
                                                        <span>Spa</span>
                                                    </a>
                                                </Link>

                                                <Link href="#">
                                                    <a className="dropdown-item d-flex align-items-center">
                                                        <img src={require("../../images/russia-flag.jpg")} className="shadow-sm" alt="flag" />
                                                        <span>Rus</span>
                                                    </a>
                                                </Link>

                                                <Link href="#">
                                                    <a className="dropdown-item d-flex align-items-center">
                                                        <img src={require("../../images/italy-flag.jpg")} className="shadow-sm" alt="flag" />
                                                        <span>Ita</span>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </li> */}
                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-12">
                                <div className="top-header-discount-info">
                                    <p><strong>50% OFF</strong> all new collections! <Link href="#"><a>Discover Now!</a></Link></p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-12">
                                <ul className="header-top-menu">
                                    <li>
                                        <Link href="/login">
                                            <a>
                                                <i className='bx bxs-user'></i> My Account
                                            </a>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="#toggleModalWishlist">
                                            <a onClick={this.toggleModalWishlist}>
                                                <i className='bx bx-heart'></i> Wishlist
                                            </a>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/compare">
                                            <a>
                                                <i className='bx bx-shuffle'></i> Compare
                                            </a>
                                        </Link>
                                    </li>

                                    <li>
                                        {user ? (
                                            <Link href="#">
                                                <a onClick={e => {e.preventDefault(); this.handleLogout();}}>
                                                    <i className='bx bx-log-in'></i> Logout {this.state.firstName}{this.state.lastName}
                                                </a>
                                            </Link>
                                        ) : (
                                            <Link href="/login">
                                                <a>
                                                    <i className='bx bx-log-in'></i> Login
                                                </a>
                                            </Link>
                                        )}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wishlist Modal */}
                <WishlistModal 
                    onClick={this.toggleModalWishlist} 
                    active={this.state.WishlistModal ? 'active' : ''} 
                />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        user: state.login
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLogout: () => {dispatch(userLogout())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopHeaderTwo);