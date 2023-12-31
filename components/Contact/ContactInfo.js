import React, { Component } from 'react';
import Link from 'next/link';

class ContactInfo extends Component {
    render() {
        return (
            <div className="contact-info">
                <h3>Here to Help</h3>
                <p>Have a question? You may find an answer in our <Link href="/faqs"><a>FAQs</a></Link>. But you can also contact us.</p>

                <ul className="contact-list">
                    <li>
                        <i className='bx bx-map'></i> 
                        Location: Mehran University of Engineering And Technology Jamshoro
                    </li>
                    <li>
                        <i className='bx bx-phone-call'></i> 
                        Call Us: +92389299090
                    </li>
                    <li>
                        <i className='bx bx-envelope'></i> 
                        Email Us: arshop38125@gmail.com
                    </li>
                    <li>
                        <i className='bx bx-microphone'></i> 
                        Fax: +123456789
                    </li>
                </ul>

                <h3>Opening Hours:</h3>
                <ul className="opening-hours">
                    <li><span>Monday:</span> 8AM - 6AM</li>
                    <li><span>Tuesday:</span> 8AM - 6AM</li>
                    <li><span>Wednesday:</span> 8AM - 6AM</li>
                    <li><span>Thursday - Friday:</span> 8AM - 6AM</li>
                    <li><span>Sunday:</span> Closed</li>
                </ul>

                <h3>Follow Us:</h3>
                <ul className="social">
                    <li>
                        <Link href="#">
                            <a target="_blank">
                                <i className='bx bxl-facebook'></i>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a target="_blank">
                                <i className='bx bxl-twitter'></i>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a href="#" target="_blank">
                                <i className='bx bxl-instagram'></i>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a target="_blank">
                                <i className='bx bxl-linkedin'></i>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a target="_blank">
                                <i className='bx bxl-skype'></i>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a target="_blank">
                                <i className='bx bxl-pinterest-alt'></i>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a target="_blank">
                                <i className='bx bxl-youtube'></i>
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default ContactInfo;