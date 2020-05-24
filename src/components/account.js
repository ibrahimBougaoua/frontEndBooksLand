import React, { Component } from "react";
import '../panel.css';
import { BrowserRouter as Router,Switch,Route, Link } from "react-router-dom";
import axios from 'axios';
import Resultat from "./resultat";

import Letest from "./letest";

import Dashboard from "./dashboard";
import Abonnement from "./abonnement";
import History from "./history";
import List from "./list";
import Single from "./single";
import Profile from "./profile";

//import Setting from "./setting";
//import Favorite from "./favorite";
//import Recently from "./recently";
//import Most from "./most";
//import Top from "./top";

import Author from "./author";
import Tag from "./tag";
import Year from "./year";


// handle button click of login form
async function resultat(a,b) {
  try {
    const response = await axios.get('http://127.0.0.1:5001/book/search', {params : {search: a,  cate: b, email:localStorage.getItem('email')}})
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export default class Panel extends Component {

  componentDidMount =()=>{
    if(this.state.visible){
    resultat(this.state.search,this.state.cate).then(response => {
      this.setState({
        books: response.data
      });
    });
    }
  }

  constructor(props) {
    super(props);
    this.state = {visible: false,books: [],search: '',cate: 'title'};

    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.handleChangeCate= this.handleChangeCate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeSearch(event) {
    this.setState({search: event.target.value});
  }
  
  //event.target[event.target.selectedIndex].getAttribute('data-order')

  handleChangeCate(event) {
    this.setState({cate: event.target.options[event.target.selectedIndex].text});
  }

  handleSubmit(event) {
    resultat(this.state.search,this.state.cate).then(response => {
      this.setState({
        books: response.data
      });
      this.setState({
        visible: true
      });
    });
    event.preventDefault();
  }

render() {


// handle button click of login form
const searchBooks = () => {
  axios.get('http://127.0.0.1:5001/book/search', {params : {search: this.state.search,  cate:this.state.cate, email:localStorage.getItem('email')}})
  .then(function (response) {
    // setter
    //console.log(response)
    return response
  }).catch(function (error) {
    console.log(error);
  });

}

// handle button click of login form
const Logout = () => {
  localStorage.removeItem("tokeb");
  localStorage.removeItem("email");
  window.location.replace("/")
}

if(!localStorage.getItem('email')){
  window.location.replace("/")
}

const red = () => {
  window.location.replace("/")
}

console.log(searchBooks())

return (
<Router>
<div className="wrapper">

<nav id="sidebar">
    <div className="sidebar-header">
        <h3>BooksLand</h3>
    </div>

    <ul className="list-unstyled components">
        <li>
        <Link className="nav-link" to={"/account/letest"}><i class="fas fa-home"></i> Home</Link>
        </li>
        <li>
        <Link className="nav-link" to={"/account/dashboard"}><i class="far fa-chart-bar"></i> Dashboard</Link>
        </li>
        <li>
        <Link className="nav-link" to={"/account/abonnements"}><i class="far fa-bell"></i> Abonnements</Link>
        </li>
        <li>
        <Link className="nav-link" to={"/account/history"}><i class="fas fa-history"></i> History</Link>
        </li>
        <li>
        <Link className="nav-link" to={"/account/list"}><i class="fas fa-tv"></i> Show later</Link>
        </li>
        <li>
        <Link className="nav-link" to={"/account/profile"}><i class="fas fa-user"></i> Profile</Link>
        </li>
    </ul>
    
</nav>
<div id="content">

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">

    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <button type="submit" className="btn btn-sm btn-outline-success mr-2" onClick={red}>Home</button>
      </li>
      <li className="nav-item active">
        <form className="form-inline md-form form-sm mt-0" method="POST" onSubmit={this.handleSubmit}>
          <input className="form-control form-control-sm" name="search" value={this.state.search} onChange={this.handleChangeSearch}  type="text" placeholder="Search Title,Author,Genre..." aria-label="Search" style={{width:"25vw"}}/>          
          <select name="cate" class="form-control form-control-sm ml-2" value={this.state.cate} onChange={this.handleChangeCate}>
            <option value="title">title</option>
            <option value="author">author</option>
            <option value="tag">tag</option>
          </select>
          <button className="btn btn-sm btn-outline-success my-sm-0 ml-2" onClick={searchBooks} type="submit">Search</button>
        </form>
      </li>
    </ul>

    <ul className="navbar-nav ml-auto nav-flex-icons">


      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="aaa" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          <i className="fas fa-user"></i> {localStorage.getItem('email')}
        </a>
        <div className="dropdown-menu dropdown-menu-right dropdown-default"
          aria-labelledby="navbarDropdownMenuLink-333">
            <Link className="nav-link dropdown-item" to={"/account/profile"}>Profile</Link>
          <div className="dropdown-divider"></div>
          <button className="btn btn-sm btn-outline-success my-sm-0 ml-2" onClick={Logout}>Logout</button>
        </div>
      </li>
    </ul>

        </div>
    </nav>

    <div className="container p-3">

{
  this.state.visible
    ? <Resultat link="/account/single/" elements={this.state.books}></Resultat>
    : null
}

    <Switch>
        <Route path="/account" exact component={Letest} />
        <Route path="/account/letest" exact component={Letest} />
        <Route path="/account/dashboard" component={Dashboard} />
        <Route path="/account/abonnements" exact component={Abonnement} />
        <Route path="/account/history" exact component={History} />
        <Route path="/account/list" exact component={List} />
        <Route path="/account/profile" exact component={Profile} />
        <Route path="/account/single/:id" exact component={Single} />

        <Route path="/account/author/:author" exact component={Author} />
        <Route path="/account/tag/:tag" exact component={Tag} />
        <Route path="/account/year/:year" exact component={Year} />

    </Switch>
    </div>

</div>
</div>

</Router>
);
}
}