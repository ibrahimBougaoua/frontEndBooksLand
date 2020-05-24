import React, { Component } from "react";
import Post from "./post";
import Nav from "./nav";

export default class Favorite extends Component {

render() {

return (
    <div>
<Nav name="Favorite"></Nav>

    <Post name="Favorite" link="/account/single/"></Post>
    </div>
);
}
}