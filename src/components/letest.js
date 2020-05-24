import React, { Component } from "react";
import Post from "./post";
import axios from 'axios';

// handle button click of login form
async function recommended() {
    try {
      const response = await axios.get('http://127.0.0.1:5001/book/recommended');
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

// get age from access token -> data
async function recommendedByAge() {
    try {
      const response = await axios.get('http://127.0.0.1:5001/book/age/' + localStorage.getItem('email'));
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

// get country from access token -> data
async function recommendedByCountry() {
    try {
      const response = await axios.get('http://127.0.0.1:5001/book/country/' + localStorage.getItem('email'));
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  }


export default class Letest extends Component {

    state = {
        recommend: [],
        booksByAgs: [],
        booksByCountry: []
      }
    
      componentDidMount =()=>{
        recommended().then(response => {
          this.setState({
            recommend: response.data
          });
        });
        recommendedByAge().then(response => {
          this.setState({
            booksByAgs: response.data
          });
        });
        recommendedByCountry().then(response => {
          this.setState({
            booksByCountry: response.data
          });
        });
      }

render() {

return (
    <div>
    <Post name="Recommended" link="/account/single/" elements={this.state.recommend}></Post>
    <Post name="Users your age like this" link="/account/single/" elements={this.state.booksByAgs}></Post>
    <Post name="Users in your area like" link="/account/single/" elements={this.state.booksByCountry}></Post>
    </div>
);

}

}