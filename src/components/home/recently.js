import React, { Component } from "react";
import Post from "./post";
import Nav from "./nav";
import axios from 'axios';

// handle button click of login form
async function recently() {
    try {
      const response = await axios.get('http://127.0.0.1:5001/book/top');
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
}

export default class Recently extends Component {

    state = {
        recently: []
       }
     
       componentDidMount =()=>{
        recently().then(response => {
           this.setState({
            recently: response.data
           });
         });
       }

render() {

return (
    <div>
<Nav name="Trending"></Nav>

    <Post name="Recently added" link="/book/single/" elements={this.state.recently}></Post>
    </div>
);
}
}