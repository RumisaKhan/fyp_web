import React, { Component } from 'react';
import TopNavbar from '../../components/Admin/TopNavbar';
import LeftSidebar from '../../components/Admin/LeftSidebar';
import withAuth from '../../helpers/withAuth';

import { firebase } from '../../firebase';
import PaymentsTR from '../../components/Admin/payment/PaymentsTR';

class Payments extends Component {

    state = {
        ordersData: [],
        loading: true
    };
    componentDidMount(){
        const db = firebase.firestore();
        const dbOrderRef = db.collection('orders');
        let orderArray = [];
        dbOrderRef.get()
        .then(res => {
            res.forEach(doc => {
                let orderObj = doc.data();
                orderObj.id = doc.id;
                orderArray.push(orderObj)
            });
            this.setState({
                ordersData: orderArray
            })
            this.loading = false;
        })
        .catch(err => {
            console.log('error', err)
        });
    }

    render() {
        const { ordersData, loading } = this.state;
        return (
            <React.Fragment>
                <TopNavbar />
                <LeftSidebar />
 
                <div className="admin-main-content d-flex flex-column">
                    <div className="page-header">
                        <h2>Customers</h2>
                    </div>

                    <div className="admin-table height-555">
                        <div className="table-responsive">
                            <table className="table table-hover mb-0">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Customers</th>
                                        <th>Contact</th>
                                        <th>Payment Method</th>
                                        <th>Order ID</th>
                                        <th>Total Amount</th>
                                        <th>Created Date</th>
                                        <th>Card No</th>
                                        <th>Card brand</th>
                                        <th>Card expriy date</th>
                                        <th>Card funding</th>
                                        <th>Token Id</th>
                                        <th>Card Token Id</th>


                                    </tr>
                                </thead>
                                <tbody>

                                    { loading ? <PaymentsTR orders={ordersData} /> : 'Loading...' }
                                     
                                </tbody>
                            </table>
                        </div> 
                    </div>
                   
                   {/* Footer */}
                   <div className="flex-grow-1"></div>
                </div>
            </React.Fragment>
        );
    }
}


export default withAuth(Payments);