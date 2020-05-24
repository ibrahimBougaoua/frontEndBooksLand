import React, { Component } from "react";
import Post from "./post";
import Nav from "./nav";

export default class Year extends Component {

render() {

return (
    <div>
        <Nav name="Years"></Nav>

    <Post name="Movies by year" link="/book/year/"></Post>
    </div>
);
}
}