import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class FooterLinks extends Component {

    render() {
        let links = this.props.linkData.link.map((item, index) => (
            <ul className="list-unstyled text-small">
                <li><a className="text-muted" href={item.link}>{item.title}</a></li>
            </ul>
        ));
        return (
            <div className="col-6 col-md">
                <h5>{this.props.linkData.title}</h5>
                {links}
            </div>
        );
    }
}

export default FooterLinks;