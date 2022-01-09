import React, { Component } from 'react';
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
// import RazorpayCheckout from 'react-native-razorpay';

export default class Index extends Component {
    state = {
        vehical: [],
        toDashboard: false,
        isLoading: false,
        role:''
    };

    constructor(props) {
        super(props);
        this.url = 'http://localhost:8090/getBooking';
        //this.token = localStorage.getItem('token');
    }

    componentDidMount() {
        axios.get(this.url)
            .then(response => {
                const vehical = response.data;
                console.log(vehical)
                this.setState({ vehical });
            })
            .catch(error => {
                this.setState({ toDashboard: true });
                console.log(error);
            });
    }

   

    render() {
        const role = localStorage.getItem('currentUser')
        this.state.role = role;
        const isAdmin = this.state.role ==='"admin"';
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
                                <li className="breadcrumb-item active">Booking Details</li>
                                {/* <li className="ml-auto"><Link to={'add'}>Add Vehical</Link></li> */}
                            </ol>
                            <div className="card mb-3">
                                <div className="card-header"><i className="fas fa-table"></i>
                                    &nbsp;&nbsp;Booking List
                                </div>
                                <div className="card-body">
                                    <table className="table table-bordered">
                                        <thead>
                                        <tr>
                                            <th>id</th>
                                            <th>deposit</th>
                                            <th>startDate</th>
                                            <th>fromDate</th>
                                            <th>rent</th>
                                            <th>status</th>
                                            <th>totalAmount</th>
                                            <th>vechicalId</th>
                                           {!isAdmin && <th>Action</th> }
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.vehical.map((vehical , index)=>
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{vehical.deposit}</td>
                                                    <td>{vehical.startDate}</td>
                                                    <td>{vehical.fromDate}</td>
                                                    <td>{vehical.rent}</td>
                                                    <td>{vehical.status}</td>
                                                    <td>{vehical.totalAmount}</td>
                                                    <td>{vehical.vechicalId}</td>
                                                    {/* <td>{vehical.runningsStatus}</td> */}
                                                  { !isAdmin && <td className="text-center">
                                                        <Link className="btn btn-sm btn-info" to={{ pathname: 'add-payment', search: '?id=' + vehical.bookingId }}>Make Payment</Link>
                                                        {/* &nbsp; | &nbsp;
                                                        <button value={vehical.id} className="btn btn-sm btn-danger" disabled={ index === 0  ? true : false} onClick={this.handleClickDelete} >Delete</button> */}
                                                    </td> }
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
                                    <span>car rental system 2021</span>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        );
    }
}
