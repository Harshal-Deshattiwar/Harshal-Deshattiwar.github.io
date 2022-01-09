import React, { Component } from 'react';
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';

export default class Index extends Component {
    state = {
        payment: [],
        toDashboard: false,
        isLoading: false
    };

    constructor(props) {
        super(props);
        this.url = 'http://localhost:8090/getAllPayment';
        //this.token = localStorage.getItem('token');
    }

    componentDidMount() {
        axios.get(this.url)
            .then(response => {
                const payment = response.data;
                console.log(payment)
                this.setState({ payment });
            })
            .catch(error => {
                this.setState({ toDashboard: true });
                console.log(error);
            });
    }

   

    render() {
        if (this.state.toDashboard === true) {
            return <Redirect to='/' />
        }
        return (
            <div>
                <Header/>
                <div id="wrapper">
                    <Sidebar/>
                    <div id="content-wrapper">
                        <div className="container-fluid">
                            <ol className="breadcrumb">
                                {/* <li className="breadcrumb-item">
                                    <Link to={'/index'} >Vehical Details</Link>
                                </li> */}
                                <li className="breadcrumb-item active">Payment Details</li>
                                {/* <li className="ml-auto"><Link to={'add'}>Add Vehical</Link></li> */}
                            </ol>
                            <div className="card mb-3">
                                <div className="card-header"><i className="fas fa-table"></i>
                                    &nbsp;&nbsp;Paymnet List
                                </div>
                                <div className="card-body">
                                    <table className="table table-bordered">
                                        <thead>
                                        <tr>
                                            <th>id</th>
                                            <th>cardNo</th>
                                            <th>cvv</th>
                                            <th>amount</th>
                                            <th>bookingId</th>
                                            <th>createdDate</th>
                                            {/* <th>Action</th> */}
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.payment.map((payment , index)=>
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{payment.cardNo}</td>
                                                    <td>{payment.cvv}</td>
                                                    <td>{payment.amount}</td>
                                                    <td>{payment.bookingId}</td>
                                                    <td>{payment.createdDate}</td>
                                                    {/* <td>{payment.totalAmount}</td>
                                                    <td>{payment.vechicalId}</td> */}
                                                    {/* <td>{vehical.runningsStatus}</td> */}
                                                    {/* <td className="text-center">
                                                        <Link className="btn btn-sm btn-info" to={{ pathname: 'add-payment', search: '?id=' + vehical.bookingId }}>Make Payment</Link>
                                                        &nbsp; | &nbsp;
                                                        <button value={vehical.id} className="btn btn-sm btn-danger" disabled={ index === 0  ? true : false} onClick={this.handleClickDelete} >Delete</button>
                                                    </td> */}
                                                </tr>)
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                            </div>
                        </div>
                        <footer className="sticky-footer">
                            <div className="container my-auto">
                                <div className="copyright text-center my-auto">
                                    <span>Copyright © Your Website 2019</span>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        );
    }
}
