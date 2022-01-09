import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";

export default class EditPage extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        id: '',
        redirect: false,
        isLoading: false
    };

    componentDidMount() {
        const id = this.props.location.search[4];
        this.state.id = id
        console.log(id)
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ isLoading: true });
        //  const token = localStorage.getItem('token');
        const url = 'http://localhost:8090/addPayment';
        let obj = {
            "bookingId": this.state.id,
            "cardNo": document.getElementById('cardNo').value,
            "cvv": document.getElementById('cvv').value,
            "amount": document.getElementById('amount').value


        }

        axios.post(url, obj)
            .then(result => {
                if (result.data.status) {
                    this.setState({ redirect: true, isLoading: false })
                }
            })
            .catch(error => {
                this.setState({ toDashboard: true });
                console.log(error);
            });
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/booking-details' />
        }
    };

    render() {
        const isLoading = this.state.isLoading;
        if (this.state.toDashboard === true) {
            return <Redirect to='/' />
        }
        return (
            <div>
                <Header />
                <div id="wrapper">
                    <Sidebar></Sidebar>
                    <div id="content-wrapper">
                        <div className="container-fluid">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to={'/dashboard'} >Dashboard</Link>
                                </li>
                                <li className="breadcrumb-item active">Make Payment</li>
                            </ol>
                        </div>
                        <div className="container-fluid">
                            <div className="card mx-auto">
                                <div className="card-header">Make Payment</div>
                                <div className="card-body">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <div className="form-row">
                                                <div className="col-md-6">
                                                    <div className="form-label-group">
                                                        <input type="number" id="cardNo" className="form-control" placeholder="Enter card number" required="required" autoFocus="autofocus" />
                                                        <label htmlFor="cardNo">Card Number</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-label-group">
                                                        <input type="number" id="cvv" className="form-control" placeholder="Enter cvv " required="required" />
                                                        <label htmlFor="cvv">Cvv</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-row">
                                                <div className="col-md-6">
                                                    <div className="form-label-group">
                                                        <input type="number" id="amount" className="form-control" placeholder="Total amount" required="required" />
                                                        <label htmlFor="amount">Enter total amount</label>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <button className="btn btn-primary btn-block" type="submit" disabled={this.state.isLoading ? true : false}>Make Payment &nbsp;&nbsp;&nbsp;
                                            {isLoading ? (
                                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            ) : (
                                                <span></span>
                                            )}
                                        </button>
                                    </form>
                                    {this.renderRedirect()}
                                </div>
                            </div>
                        </div>

                        <footer className="sticky-footer">
                            <div className="container my-auto">
                                <div className="copyright text-center my-auto">
                                    <span>Car rental System 2021</span>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        );
    }
}


