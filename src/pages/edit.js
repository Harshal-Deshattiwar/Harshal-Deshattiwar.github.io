import React, { Component } from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import moment from 'moment';

export default class EditPage extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        id: '',
        redirect: false,
        isLoading: false,
        bookingId:'',
        userId:'',
        user:{},
        vehical:[],
        selectedDays: 1,
        startDate: '',
        endDate: ''

    };

    componentDidMount() {
        const id = this.props.location.search[4];
        this.state.id = id
        console.log(id);
        // alert(id);
       
        // this.url = `http://localhost:8090/getBookingById/suresh/${this.state.id}`;
        // console.log(this.url);
        // axios.get(this.url)
        //     .then(response => {
        //         const vehical = response.data;
        //         console.log("AKhsyay")
        //         console.log(vehical)
        //         this.setState({ vehical });
        //     })
        //     .catch(error => {
        //         // this.setState({ toDashboard: true });
        //         // console.log(error);
        //     });

        this.url = `http://localhost:8090/getVechical`;
        axios.get(this.url)
            .then(response => {
                const vehical = response.data;
                let vehicalData = vehical.filter((item, index) => {
                    if(item.vechicalId == id)
                    return item;
                })

                console.log(vehicalData);

                this.setState({ vehical: vehicalData });
            })
            .catch(error => {
                // this.setState({ toDashboard: true });
                // console.log(error);
            });

         this.state.user = JSON.parse(localStorage.getItem('user'))
        this.state.userId = this.state.user.userId;
        
     }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({isLoading: true});
       const token = localStorage.getItem('token');
         const url = 'http://localhost:8090/saveBooking';
         let obj ={
            "custId":this.state.userId,
            "vechicalId":this.state.id,
            "deposit":document.getElementById('deposit').value,
            "rent":document.getElementById('rent').value,
            "totalAmount":document.getElementById('totalAmount').value,
            "startDate":document.getElementById('startDate').value,
            "fromDate":document.getElementById('fromDate').value
        
         }

        axios.post(url, obj)
            .then(result => {
                if (result.data.status) {
                    this.state.bookingId = result.data.bookingId;
                    localStorage.setItem('bookingId', this.state.bookingId)
                    console.log(this.state.bookingId)
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
            return <Redirect to='/add-payment' />
        //    return <Redirect to='/bookingbyid' />
        }
    };

    handleStartDate = (e) => {
        this.setState({
            startDate: e.target.value
        })
    }

    handleEndDate = (e) => {
        this.setState({
            endDate: e.target.value
        })

        var diffTime = new Date(e.target.value).getTime() - new Date(this.state.startDate).getTime();

        var diffDays = diffTime / (1000 * 60 * 60 * 24); 

        this.setState({
            selectedDays: diffDays
        })
    }

    

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
                                {/* <li className="breadcrumb-item">
                                    <Link to={'/dashboard'} >Dashboard</Link>
                                </li> */}
                                <li className="breadcrumb-item active">Book Vehical</li>
                            </ol>
                        </div>
                        <div className="container-fluid">
                            <div className="card mx-auto">
                                <div className="card-header">Book Vehical</div>
                                <div className="card-body">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <div className="form-row">
                                                <div className="col-md-6">
                                                    <div className="form-label-group">
                                                        {
                                                            this.state.vehical.length > 0 ?
                                                            <input id="deposit" disabled className="form-control" placeholder="Enter deposite" autoFocus="autofocus" value={this.state.vehical[0].deposit || null} />
                                                            :
                                                            null
                                                        }
                                                        
                                                        <label htmlFor="deposit">deposit</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-label-group">
                                                    {
                                                            this.state.vehical.length > 0 ?
                                                            <input type="number" id="rent" disabled className="form-control" placeholder="Enter Rent" required="required" value={this.state.vehical[0].rent || null} />
                                                            :
                                                            null
                                                    }
                                                        <label htmlFor="rent">Rent</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-row">
                                                <div className="col-md-6">
                                                    <div className="form-label-group">
                                                        <input type="date" id="startDate" className="form-control" placeholder="Enter Date" required="required" onChange={(e) => this.handleStartDate(e)} />
                                                        <label htmlFor="startDate">Start date</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-label-group">
                                                        <input type="date" id="fromDate" className="form-control" placeholder="End Date" required="required" onChange={(e) => this.handleEndDate(e)}/>
                                                        <label htmlFor="fromDate">End Date</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-row">
                                                
                                                <div className="col-md-6">
                                                    <div className="form-label-group">
                                                    {
                                                            this.state.vehical.length > 0 ?
                                                            <input type="input" id="totalAmount" disabled className="form-control" placeholder="Total amount" required="required" value={this.state.vehical[0].rent * (this.state.selectedDays + 1) + this.state.vehical[0].deposit}/>
                                                            :
                                                            null
                                                    }
                                                        <label htmlFor="totalAmount">Total Amount</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary btn-block" type="submit" disabled={this.state.isLoading ? true : false}>Book vehical &nbsp;&nbsp;&nbsp;
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


