import React, { Component } from "react";
import Post from "./post";
import axios from 'axios';

// handle button click of login form
async function recommended() {
    try {
      const response = await axios.get('http://127.0.0.1:5001/book/recommended/' + localStorage.getItem('email'));
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

// get age from access token -> data
async function recommendedBySexe() {
  try {
    const response = await axios.get('http://127.0.0.1:5001/book/sexe/' + localStorage.getItem('email'));
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
        booksBySexe: [],
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
        recommendedBySexe().then(response => {
          this.setState({
            booksBySexe: response.data
          });
        });
      }
      
render() {

return (
    <div>
    <Post name="Recommandé pour vous" link="/book/single/" elements={this.state.recommend}></Post>
    <Post name="Utilisateurs de votre âge comme celui-ci" link="/book/single/" elements={this.state.booksByAgs}></Post>
    <Post name="Les utilisateurs de votre région aiment" link="/book/single/" elements={this.state.booksByCountry}></Post>
    <Post name="Utilisateurs de votre sexe comme celui-ci" link="/book/single/" elements={this.state.booksBySexe}></Post>
    </div>
);

}

}