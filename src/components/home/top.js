import React, { Component } from "react";
import Post from "./post";
import Nav from "./nav";
import axios from 'axios';

// handle button click of login form
async function getTopData() {
    try {
      const response = await axios.get('http://127.0.0.1:5000/book/top');
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
}

export default class Top extends Component {

    state = {
        books: []
      }
    
      componentDidMount =()=>{
        getTopData().then(response => {
          this.setState({
            books: response.data
          });
        });
      }

render() {

return (
    <div>
        <Nav name="Top rating"></Nav>

    <Post name="Top rating" link="/book/single/" elements={this.state.books}></Post>
    </div>
);
}
}