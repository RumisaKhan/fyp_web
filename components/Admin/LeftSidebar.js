import React, { Component } from 'react';
import Link from '../../utils/ActiveLink';
import TopNavbar from './TopNavbar';

class LeftSidebar extends Component {
    state = {
        layoutCls: false,
    };

    handleLayoutCls = (e) => {
        this.setState({
            layoutCls: e
        });
    }

    render() {
        let {layoutCls} = this.state;
        return (
            <React.Fragment>
                <TopNavbar onChangeClass={this.handleLayoutCls} />
                <nav className={`admin-sidebar ${layoutCls ? 'active' : null}`}>
                    <ul>
                        <li className="nav-item">
                            <Link href="/admin/dashboard" activeClassName="active">
                                <a className="nav-link">
                                    <i className='bx bx-home-alt'></i>
                                    Dashboard
                                </a>
                            </Link> 
                        </li>
                        <li className="nav-item" title="Product">
                            <Link href="/admin/products" activeClassName="active">
                                <a className="nav-link">
                                    <i className='bx bx-cart'></i>
                                    Products
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item" title="Order">
                            <Link href="/admin/orders" activeClassName="active">
                                <a className="nav-link">
                                    <i className='bx bx-file-blank'></i>
                                    Orders
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item" title="Payment">
                            <Link href="/admin/payments" activeClassName="active">
                                <a className="nav-link">
                                    <i className='bx bx-money'></i>
                                    Payments
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item" title="Customer">
                            <Link href="/admin/customers" activeClassName="active">
                                <a className="nav-link">
                                    <i className='bx bx-user-circle'></i>
                                    Customers
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/" activeClassName="active">
                                <a target="_blank" className="nav-link">
                                    <i className='bx bx-link'></i>
                                    Storefront!
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </React.Fragment>
        );
    }
}

export default LeftSidebar;