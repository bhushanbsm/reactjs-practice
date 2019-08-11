import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class CardModal extends Component {

    constructor() {
        super();
        this.state = { showModal: false };
    }

    componentDidMount() {
        this.setState({ showModal: this.props.showModal });
    }

    toggleModal = () => this.props.toggleModal();

    render() {
        return (
            <div className="modal show" id="cardModal" tabIndex="-1" role="dialog" style={{ display: this.state.showModal ? 'block' : 'none' }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{this.props.cardData.title}e</h5>
                            <button type="button" onClick={(e) => this.toggleModal()} className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body" style={{ textAlign: "left" }}>
                            <img style={{ width: 100 + 'px' }} src={this.props.cardData.thumbnailUrl} alt="Card image cap" />
                            <span style={{ marginLeft: 10 }}>{this.props.cardData.title}</span>
                        </div>
                        <div className="modal-footer">
                            {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                            <button type="button" onClick={(e) => this.toggleModal()} className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardModal;