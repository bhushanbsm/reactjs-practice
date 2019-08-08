import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class FooterLinks extends Component {

    render() {
        let links = this.props.linkData.link.map((item, index) => (
            <li key={index}><a className="text-muted" href={item.link}>{item.title}</a></li>
        ));
        return (
            <div className="col-6 col-md">
                <h5>{this.props.linkData.title}</h5>
                <ul className="list-unstyled text-small">
                    {links}
                </ul>
            </div>
        );
    }
}

export default FooterLinks;