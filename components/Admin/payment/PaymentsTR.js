import React, { Component } from 'react';
import faker from 'faker';

class PaymentsTR extends Component {
    convertDateTime = (d) => {
        let t = new Date(1970, 0, 1);
        let time = t.setSeconds(d.seconds);
        const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(time);
        const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(time);
        const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(time);
        return `${da}-${mo}-${ye}`;
    }
    render() {
        let { orders } = this.props;
        return (
            <React.Fragment>
                {
                    orders.map((order, i) => {
                        return(
                            <tr key={i}>
                                <td><strong>#{i + 1}</strong></td>
                                <td className="customer">
                                <strong>
                                    {/* <img src={faker.image.avatar()} alt="Image" />  */}
                                    {order.customerDetails.firstName + " " + order.customerDetails.lastName}
                                </strong>
                                </td>
                                <td>{order.customerDetails.phone}</td>
                                <td>Stripe</td>
                                <td><strong>#{order.id}</strong></td>
                                <td>${order.amount}</td>
                                <td>{this.convertDateTime(order.createdAt)}</td>
                                <td>************{order.token.card.last4}</td>
                                <td>{order.token.card.brand}</td>
                                <td>{order.token.card.exp_month}-{order.token.card.exp_year}</td>
                                <td>{order.token.card.funding}</td>
                                <td><strong>{order.token.id}</strong></td>
                                <td><strong>{order.token.card.id}</strong></td>
                            </tr>
                        )
                    })
                }
                
            </React.Fragment>
        );
    }
}

export default PaymentsTR;