import React, { Component } from "react";
import axios from 'axios';

export default class Login extends Component {Redirect
    

    constructor(props) {
        super(props);
        this.state = {email: '',password: '',errorMessage: '',loading: false};
    
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        //if(localStorage.getItem('email')){
        //    this.props.history.push('/panel')
        //}

      }
    
      handleChangeEmail(event) {
        this.setState({email: event.target.value});
      }
    
      handleChangePassword(event) {
        this.setState({password: event.target.value});
      }
    
      handleSubmit(event) {
        event.preventDefault();
      }

    render() {

// handle button click of login form
const handleLogin = () => {
    axios.get('http://localhost:5001/book/login', {params : {username: this.state.email,  password:this.state.password}})
    .then(response => {
        // setter
        this.setState({loading: true})
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('email', response.data.email)
        window.location.replace("/account")
      //this.props.history.push('/account')
    }).catch(error => {
        this.setState({errorMessage: 'username or password is wrong !'});
      });

}

if(localStorage.getItem('email')){
   window.location.replace("/account")
}

return (
<div className="container mt-2 mb-5 mt-5">
    <div className="row justify-content-center position-relative ">
    <div className="col-md-8">
{ this.state.errorMessage && <div class="alert alert-danger" role="alert">{ this.state.errorMessage }</div> }

            <div className="card border-0 shadow">
                <div className="card-header border-0 bg-dark text-light">Login</div>

                <div className="card-body">
                    <form method="POST" onSubmit={this.handleSubmit}>

                        <div className="form-group row">
                            <label for="email" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                            <div className="col-md-6">
                                <input id="email" type="text" value={this.state.email} onChange={this.handleChangeEmail} className="form-control" required/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label for="password" className="col-md-4 col-form-label text-md-right">Password</label>

                            <div className="col-md-6">
                                <input id="password" type="password" value={this.state.password} onChange={this.handleChangePassword} className="form-control" required/>
                            </div>
                        </div>

                        <div className="form-group row mb-0">
                            <div className="col-md-8 offset-md-4">
{
  this.state.loading
  ? <button class="btn btn-primary" type="button" disabled><span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...</button>
  : <button type="submit" className="btn btn-primary" onClick={handleLogin}>login</button>
}
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