import React, { Component } from 'react';
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import {Link,Redirect} from 'react-router-dom';
import axios from 'axios';

export default class Index extends Component {
    state = {
        vehical: [],
        toDashboard: false,
        isLoading: false,
        user:'',
        role:''
    };

    constructor(props) {
        super(props);
        this.url = 'http://localhost:8090/getVechical';
        this.user = localStorage.getItem('user');

    }

    componentDidMount() {
        axios.get(this.url)
            .then(response => {
                const vehical = response.data;
                this.setState({ vehical });
            })
            .catch(error => {
                this.setState({ toDashboard: true });
                console.log(error);
            });
    }

    handleClickDelete = param => e => {
        console.log(param)
         
    };

    render() {
        const role = localStorage.getItem('currentUser')
        this.state.role = role;
        const isAdmin = this.state.role ==='"admin"';
        console.log("Dipak",isAdmin)
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
                                <li className="breadcrumb-item active">Vehical Details</li>
                               {isAdmin && <li className="ml-auto"><Link to={'add'}>Add Vehical</Link></li>}
                            </ol>
                            <div className="card mb-3">
                                <div className="card-header"><i className="fas fa-table"></i>
                                    &nbsp;&nbsp;vehical List
                                </div>
                                <div className="card-body">
                                    <table className="table table-bordered">
                                        <thead>
                                        <tr>
                                            <th>id</th>
                                            <th>Vehical Type</th>
                                            <th>Company</th>
                                            <th>Model No</th>
                                            <th>Mobile Number</th>
                                            <th>color</th>
                                            <th>Deposite</th>
                                            <th>Rent</th>
                                            <th>Runnings Status</th>
                                            {/* <th>Deposite</th> */}
                                           { !isAdmin && <th className="text-center">Action</th> }
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.vehical.map((vehical , index)=>
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{vehical.vechicalType}</td>
                                                    <td>{vehical.company}</td>
                                                    <td>{vehical.modelNo}</td>
                                                    <td>{vehical.mobNo}</td>
                                                    <td>{vehical.color}</td>
                                                    <td>{vehical.deposit}</td>
                                                    <td>{vehical.rent}</td>
                                                    <td>{vehical.runningsStatus}</td>
                                                   { !isAdmin && <td className="text-center">
                                                        <Link className="btn btn-sm btn-info" to={{ pathname: 'edit', search: '?id=' + vehical.vechicalId }}>Book</Link>
                                            
                                                        {/* <button className="btn btn-sm btn-danger" onClick={this.handleClickDelete(vehical)} >Book</button> */}
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
