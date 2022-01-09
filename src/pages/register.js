import React, { Component } from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';

export default class Register extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        mobNo:'',
        licenseNo:'',
        adharNo:'',
        userName:'',
        password:'',
        redirect: false,
        authError: false,
        isLoading: false,
    };

    handleEmailChange = event => {
        this.setState({ email: event.target.value });
    };
    handlePwdChange = event => {
        this.setState({ password: event.target.value });
    };
    handleFirstNameChange = event => {
        this.setState({ firstName: event.target.value });
    };

    handleLastNameChange = event => {
        this.setState({ lastName: event.target.value });
    };

    handleMobileChange = event => {
        this.setState({mobNo: event.target.value})
    }

    handleLicenceChange = event => {
        this.setState({licenseNo: event.target.value})
    }
    handleUserNameChange = event => {
        this.setState({userName: event.target.value})
    }

    handleAdharChange = event => {
        this.setState({adharNo: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({isLoading: true});
        const url = 'http://localhost:8090/register';

        let regObj = {
            "firstName": this.state.firstName,
            "lastName": this.state.lastName,
            "email": this.state.email,
            "mobNo": this.state.mobNo,
            "licenseNo": this.state.licenseNo,
            "adharNo": this.state.adharNo,
            "userName":this.state.userName,
            "password":this.state.password, 
        }
        axios.post(url, regObj)
            .then(result => {
                this.setState({isLoading: false});
                if (result.data.status !== 'fail') {
                    this.setState({redirect: true, authError: true});
                }else {
                    this.setState({redirect: false, authError: true});
                }
            })
            .catch(error => {
                console.log(error);
                this.setState({ authError: true, isLoading: false });
            });
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to="/" />
        }
    };

    render() {
        const isLoading = this.state.isLoading;
        return (
            <div className="container">
                <div className="card card-login mx-auto mt-5">
                    <div className="card-header">Register</div>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <div className="form-label-group">
                                    <input type="text" id="inputfirstName" className="form-control" placeholder="firstName"  name="firstName" onChange={this.handleFirstNameChange} required/>
                                    <label htmlFor="inputfirstName">First Name</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-label-group">
                                    <input type="text" id="inputLastName" className="form-control" placeholder="lastName"  name="lastName" onChange={this.handleLastNameChange} required/>
                                    <label htmlFor="inputLastName">Last Name</label>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="form-label-group">
                                    <input id="inputEmail" className={"form-control " + (this.state.authError ? 'is-invalid' : '')} placeholder="Email address" type="text" name="email" onChange={this.handleEmailChange} autoFocus required/>
                                    <label htmlFor="inputEmail">Email address</label>
                                    <div className="invalid-feedback">
                                        Please provide a valid Email. or Email Exis
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-label-group">
                                    <input type="text" id="mobNo" className="form-control" placeholder="mobNo"  name="mobNo" onChange={this.handleMobileChange} required/>
                                    <label htmlFor="mobNo">Mobile Number</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-label-group">
                                    <input type="text" id="licenseNo" className="form-control" placeholder="licenseNo"  name="licenseNo" onChange={this.handleLicenceChange} required/>
                                    <label htmlFor="licenseNo">License Number</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-label-group">
                                    <input type="text" id="adharNo" className="form-control" placeholder="adharNo"  name="adharNo" onChange={this.handleAdharChange} required/>
                                    <label htmlFor="adharNo">Adhar Number</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-label-group">
                                    <input type="text" id="userName" className="form-control" placeholder="userName"  name="userName" onChange={this.handleUserNameChange} required/>
                                    <label htmlFor="userName">User Name</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-label-group">
                                    <input type="password" className="form-control" id="inputPassword" placeholder="******"  name="password" onChange={this.handlePwdChange} required/>
                                    <label htmlFor="inputPassword">Password</label>
                                </div>
                            </div>

                            <div className="form-group">
                                <button className="btn btn-primary btn-block" type="submit" disabled={this.state.isLoading ? true : false}>Register &nbsp;&nbsp;&nbsp;
                                    {isLoading ? (
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    ) : (
                                        <span></span>
                                    )}
                                </button>
                            </div>
                        </form>
                        <div className="text-center">
                            <Link className="d-block small mt-3" to={''}>Login Your Account</Link>
                            <Link className="d-block small" to={'#'}>Forgot Password?</Link>
                        </div>
                    </div>
                </div>
                {this.renderRedirect()}
            </div>
        );
    }
}


