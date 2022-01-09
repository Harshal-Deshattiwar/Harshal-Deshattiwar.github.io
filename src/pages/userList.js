import React, { Component } from 'react';
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';

export default class Index extends Component {
    state = {
        user: [],
        toDashboard: false,
        isLoading: false,
        role:''
    };

    constructor(props) {
        super(props);
        this.url = 'http://localhost:8090/getAllUser';
        //this.token = localStorage.getItem('token');
    }

    componentDidMount() {
        axios.get(this.url)
            .then(response => {
                const user = response.data;
                console.log(user)
                this.setState({ user });
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
                                <li className="breadcrumb-item active">User Details</li>
                            </ol>
                            <div className="card mb-3">
                                <div className="card-header"><i className="fas fa-table"></i>
                                    &nbsp;&nbsp;User List
                                </div>
                                <div className="card-body">
                                    <table className="table table-bordered">
                                        <thead>
                                        <tr>
                                            <th>id</th>
                                            <th>firstName</th>
                                            <th>lastName</th>
                                            <th>userName</th>
                                            <th>password</th>
                                            <th>adharNo</th>
                                            <th>licenseNo</th>
                                            <th>mobNo</th>
                                            <th>status</th>
                                          
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.user.map((user , index)=>
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{user.firstName}</td>
                                                    <td>{user.lastName}</td>
                                                    <td>{user.userName}</td>
                                                    <td>{user.password}</td>
                                                    <td>{user.adharNo}</td>
                                                    <td>{user.licenseNo}</td>
                                                    <td>{user.mobNo}</td>
                                                    <td>{user.status}</td>
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
