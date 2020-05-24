import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "./nav";
import axios from 'axios';

// handle button click of login form
async function viewsBooks() {
    try {
      const response = await axios.get('http://127.0.0.1:5001/book/history/views/email/' + localStorage.getItem('email'));
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
}
async function titleBooks() {
    try {
      const response = await axios.get('http://127.0.0.1:5001/book/history/title/email/' + localStorage.getItem('email'));
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
}
async function authorBooks() {
    try {
      const response = await axios.get('http://127.0.0.1:5001/book/history/author/email/' + localStorage.getItem('email'));
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
}
async function tagBooks() {
    try {
      const response = await axios.get('http://127.0.0.1:5001/book/history/tag/email/' + localStorage.getItem('email'));
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
}

export default class History extends Component {

state = { value: 2,booksViews: [],booksTitle: [],booksAuthor: [],booksTag: [] };

componentDidMount =()=>{
	viewsBooks().then(response => {
	  this.setState({
		booksViews: response.data
	  });
	});
	titleBooks().then(response => {
	  this.setState({
		booksTitle: response.data
	  });
	});
	authorBooks().then(response => {
	  this.setState({
		booksAuthor: response.data
	  });
	});
	tagBooks().then(response => {
	  this.setState({
		booksTag: response.data
	  });
	});
}

render() {

const historyViews = this.state.booksViews.map((element) => 
	<div className="card mb-5 border-0 rounded-0 shadow-sm bg-light">
	<div className="row no-gutters">
		<div className="col-md-2">
			<img src={element[10]} class="card-img rounded-0" alt="..." />
		</div>
		<div className="col-md-10">
			<div className="card-body">
				<h5 className="card-title">{element[3]}</h5>
				<small className="text-muted">{element[4]}</small><br />
				<small className="text-muted">{element[5]}</small><br />
				<small className="text-muted">{element[6]}</small><br />
				<small className="text-muted">{element[7]}</small><br />
				<Link className="btn btn-primary btn-sm position-relative" to={"/panel/single/" + element[0]} style={{top: "35px"}}>Show more</Link>
			</div>
		</div>
	</div>
    </div>
);

const historyTitle = this.state.booksTitle.map((element) => 
	<div className="card mb-5 border-0 rounded-0 shadow-sm bg-light">
	<div className="row no-gutters">
		<div className="col-md-2">
			<img src={element[10]} class="card-img rounded-0" alt="..." />
		</div>
		<div className="col-md-10">
			<div className="card-body">
				<h5 className="card-title">{element[3]}</h5>
				<small className="text-muted">{element[4]}</small><br />
				<small className="text-muted">{element[5]}</small><br />
				<small className="text-muted">{element[6]}</small><br />
				<small className="text-muted">{element[7]}</small><br />
				<Link className="btn btn-primary btn-sm position-relative" to={"/panel/single/" + element[0]} style={{top: "35px"}}>Show more</Link>
			</div>
		</div>
	</div>
    </div>
);

const historyAuthor = this.state.booksAuthor.map((element) => 
	<div className="card mb-5 border-0 rounded-0 shadow-sm bg-light">
	<div className="row no-gutters">
		<div className="col-md-2">
			<img src={element[10]} class="card-img rounded-0" alt="..." />
		</div>
		<div className="col-md-10">
			<div className="card-body">
				<h5 className="card-title">{element[3]}</h5>
				<small className="text-muted">{element[4]}</small><br />
				<small className="text-muted">{element[5]}</small><br />
				<small className="text-muted">{element[6]}</small><br />
				<small className="text-muted">{element[7]}</small><br />
				<Link className="btn btn-primary btn-sm position-relative" to={"/panel/single/" + element[0]} style={{top: "35px"}}>Show more</Link>
			</div>
		</div>
	</div>
    </div>
);

const historyTag = this.state.booksTag.map((element) => 
	<div className="card mb-5 border-0 rounded-0 shadow-sm bg-light">
	<div className="row no-gutters">
		<div className="col-md-2">
			<img src={element[10]} class="card-img rounded-0" alt="..." />
		</div>
		<div className="col-md-10">
			<div className="card-body">
				<h5 className="card-title">{element[3]}</h5>
				<small className="text-muted">{element[4]}</small><br />
				<small className="text-muted">{element[5]}</small><br />
				<small className="text-muted">{element[6]}</small><br />
				<small className="text-muted">{element[7]}</small><br />
				<Link className="btn btn-primary btn-sm position-relative" to={"/panel/single/" + element[0]} style={{top: "35px"}}>Show more</Link>
			</div>
		</div>
	</div>
    </div>
);
	


return (
<div className="container">

<Nav name="History"></Nav>

<p className="lead text-sm-left">Type of history</p>

<nav className="mb-3">
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <a class="nav-item nav-link active" id="nav-view-tab" data-toggle="tab" href="#nav-view" role="tab" aria-controls="nav-cviewontact" aria-selected="true">View</a>
    <a class="nav-item nav-link text-muted" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="false">Title</a>
    <a class="nav-item nav-link text-muted" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Actor</a>
    <a class="nav-item nav-link text-muted" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Tag</a>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">

<div class="tab-pane fade show active" id="nav-view" role="tabpanel" aria-labelledby="nav-view-tab">
{historyViews}
</div>

<div class="tab-pane fade" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
{historyTitle}
</div>

<div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
{historyAuthor}
</div>

<div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
{historyTag}
</div>

</div>

</div>

);
}

}