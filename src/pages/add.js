import React, {Component} from 'react';
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import {Link, Redirect} from "react-router-dom";
import axios from 'axios';

export default class AddPage extends Component {

    state = {
        redirect: false,
        toDashboard: false,
        isLoading: false
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState({isLoading: true});
        const url = 'http://localhost:8090/saveVechical';
        const vechicalType = document.getElementById('vechicalType').value;
        const company = document.getElementById('company').value;
        const modelNo = document.getElementById('modelNo').value;
        const mobNo = document.getElementById('mobNo').value;
        const color = document.getElementById('color').value;
        const imagePath = document.getElementById('imagePath').value;
        const deposit = document.getElementById('deposit').value;
        const rent = document.getElementById('rent').value;
        const runningsStatus = document.getElementById('runningsStatus').value;

        let saveObj = {
            vechicalType: vechicalType,
            company:company,
            modelNo: modelNo,
            mobNo:mobNo,
            color:color,
            imagePath:imagePath,
            deposit:deposit,
            rent: rent,
            runningsStatus:runningsStatus,
            status : "Active"
        }

        console.log(saveObj)
        axios.post(url, saveObj)
            .then(result => {
                if (result.data.status) {
                    this.setState({redirect: true, isLoading: false})
                }
            })
            .catch(error => {
                this.setState({ toDashboard: true });
                console.log(error);
            });
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/index' />
        }
    };

    render() {
        const isLoading = this.state.isLoading;
        if (this.state.toDashboard === true) {
            return <Redirect to='/' />
        }
        return (
            <div>
                <Header/>
                <div id="wrapper">
                    <Sidebar></Sidebar>
                    <div id="content-wrapper">
                        <div className="container-fluid">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to={'/index'} >Vehical Details</Link>
                                </li>
                                <li className="breadcrumb-item active">Add</li>
                            </ol>
                        </div>
                        <div className="container-fluid">
                            <div className="card mx-auto">
                                <div className="card-header">Vehical Add</div>
                                <div className="card-body">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <div className="form-row">
                                                <div className="col-md-6">
                                                    <div className="form-label-group">
                                                        <input type="text" id="vechicalType" className="form-control" placeholder="Enter vehical type" required="required" autoFocus="autofocus" />
                                                        <label htmlFor="vechicalType">Vehical Type</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-label-group">
                                                        <input type="text" id="company" className="form-control" placeholder="Enter company" required="required" />
                                                        <label htmlFor="company">Enter company</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-row">
                                                <div className="col-md-6">
                                                    <div className="form-label-group">
                                                        <input type="text" id="modelNo" className="form-control" placeholder="Model Number" required="required" />
                                                        <label htmlFor="modelNo">Model Number</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-label-group">
                                                        <input type="text" id="color" className="form-control" placeholder="Enter Color" required="required"/>
                                                        <label htmlFor="color">Enter Color</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-row">
                                                <div className="col-md-6">
                                                    <div className="form-label-group">
                                                        <input type="number" id="mobNo" className="form-control" placeholder="Enter mobile number" required="required" />
                                                        <label htmlFor="mobNo">Enter Mobile number</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-label-group">
                                                        <input type="file" id="imagePath" className="form-control" placeholder="Add Image" required="required"/>
                                                        <label htmlFor="imagePath">Upload image</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-row">
                                                <div className="col-md-6">
                                                    <div className="form-label-group">
                                                        <input type="number" id="deposit" className="form-control" placeholder="Enter deposite" required="required" />
                                                        <label htmlFor="deposit">Enter deposit</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-label-group">
                                                        <input type="number" id="rent" className="form-control" placeholder="Enter rent" required="required"/>
                                                        <label htmlFor="rent">Enter Rent</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-row">
                                                <div className="col-md-6">
                                                    <div className="form-label-group">
                                                        <input type="text" id="runningsStatus" className="form-control" placeholder="Enter Running status" required="required" />
                                                        <label htmlFor="runningsStatus">Enter Running status</label>
                                                    </div>
                                                </div>
                                                {/* <div className="col-md-6">
                                                    <div className="form-label-group">
                                                        <input type="number" id="rent" className="form-control" placeholder="Enter rent" required="required"/>
                                                        <label htmlFor="rent">Enter Rent</label>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>
                                        <button className="btn btn-primary btn-block" type="submit" disabled={this.state.isLoading ? true : false}>Add Vehical &nbsp;&nbsp;&nbsp;
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
                                    <span>car rental system 2021 <div>{(new Date().getFullYear())}</div></span>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        );
    }
}
