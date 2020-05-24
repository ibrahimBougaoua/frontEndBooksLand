import React, { Component } from "react";
import { Link } from "react-router-dom";

import axios from 'axios';

// handle button click of login form
async function listBooks() {
    try {
      const response = await axios.get('http://127.0.0.1:5001/book/showlater/' + localStorage.getItem('email'));
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

export default class Abonnement extends Component {

    state = {
        books: []
      }
    
      componentDidMount =()=>{
        listBooks().then(response => {
          this.setState({
            books: response.data
          });
        });
      }

render() {

const list = this.state.books.map((element) => 
<div className="col-md-12">
<div className="card mb-5 border-0 rounded-0 shadow-sm bg-light">
<div className="row no-gutters">
    <div className="col-md-2">
        <img src={element[13]} class="card-img rounded-0" alt="..." />
    </div>
    <div className="col-md-10">
        <div className="card-body">
            <h5 className="card-title">{element[3]}</h5>
            <small className="text-muted">{element[4]}</small><br />
            <small className="text-muted">{element[5]}</small><br />
            <small className="text-muted">{element[6]}</small><br />
            <small className="text-muted">{element[7]}</small><br />
            <Link className="btn btn-primary btn-sm position-relative" to={"/book/single/" + element[0]} style={{top: "35px"}}>Show more</Link>
        </div>
    </div>
</div>
</div>
</div>
);

return (
    <div>

    <div className="container mt-5">

    <div className="row">
    {list}
    </div>

    </div>

    </div>
);
}
}