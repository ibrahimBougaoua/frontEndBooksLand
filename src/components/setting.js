import React, { Component } from "react";
import axios from 'axios';
import Nav from "./nav";

export default class Setting extends Component {
    
    constructor(props) {
        super(props);
        this.state = {name: '',email: '',password: '',newpassword: ''};
    
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeConfirmePassword = this.handleChangeConfirmePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChangeName(event) {
        this.setState({name: event.target.value});
      }
    
      handleChangeEmail(event) {
        this.setState({email: event.target.value});
      }
    
      handleChangePassword(event) {
        this.setState({password: event.target.value});
      }

      handleChangeConfirmePassword(event) {
        this.setState({newpassword: event.target.value});
      }
    
      handleSubmit(event) {
        alert(this.state.password + this.state.email);
        event.preventDefault();
      }

    render() {

// handle button click of signin form
const handleSignin = () => {
    axios.post('http://127.0.0.1:8000/api/auth/register', {
        name    : this.state.name,
        email    : this.state.email,
        password    : this.state.password,
    }).then(function (response) {
      // setter
      const token = localStorage.setItem('token', response.data.access_token)
      const user = localStorage.setItem('user', response.data.user)
      // route for profile
      console.log(token+user)
    }).catch(function (error) {
        console.log(error);
    });
}

return (
<div className="container-fluid m-0 p-0">

<Nav name="Setting"></Nav>

    <div className="row justify-content-center position-relative">
        <div className="col-md-12">
            <div className="card border-0 shadow">
                <div className="card-header border-0 bg-secondary text-white">Settings</div>

                <div className="card-body">
                    <form method="POST" onSubmit={this.handleSubmit}>

                        <div className="form-group row">
                            <label for="name" className="col-md-4 col-form-label text-md-right">Name</label>
                            <div className="col-md-6">
                                <input id="name" type="text" value={this.state.name} onChange={this.handleChangeName} className="form-control" name="name" required/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label for="email" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                            <div className="col-md-6">
                                <input id="email" type="email" value={this.state.email} onChange={this.handleChangeEmail} className="form-control" name="email" required/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label for="password" className="col-md-4 col-form-label text-md-right">Password</label>
                            <div className="col-md-6">
                                <input id="password" type="password" value={this.state.password} onChange={this.handleChangePassword} className="form-control" name="password" required/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label for="password-confirm" className="col-md-4 col-form-label text-md-right">Confirm Password</label>
                            <div className="col-md-6">
                                <input id="password-confirm" type="password" value={this.state.newpassword} onChange={this.handleChangeConfirmePassword} className="form-control" name="password_confirmation" required/>
                            </div>
                        </div>

                        <div className="form-group row mb-0">
                            <div className="col-md-6 offset-md-4">
                                <button type="submit" className="btn btn-primary" onClick={handleSignin}>
                                    Update
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
        );
    }
}