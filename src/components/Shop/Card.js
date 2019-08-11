import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CardModal from './CardModal';

class Card extends Component {

    constructor() {
        super();
        this.state = { showModal: false };
    }

    toggleModal = () => this.setState({ showModal: !this.state.showModal });

    render() {
        return (
            <div className="card" style={{ width: 18 + 'rem', marginTop: 10 + 'px' }}>
                <img className="card-img-top" src={this.props.cardData.thumbnailUrl} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{this.props.cardData.title}</h5>
                    <p className="card-text">{this.props.cardData.title}</p>
                    <a href="#" onClick={(e) => this.toggleModal()} className="btn btn-primary" data-toggle="modal" data-target="#cardModal">View</a>
                </div>
                {this.state.showModal ? <CardModal toggleModal={this.toggleModal} showModal={this.state.showModal} cardData={this.props.cardData} /> : null}
            </div>
        );
    }
}

export default Card;