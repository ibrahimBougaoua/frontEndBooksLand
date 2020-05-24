import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Tag extends Component {

render() {

const listItems = this.props.elements.map((element) =>
	<Link className="btn btn-outline-info btn-sm m-1" to={this.props.path + element}>{element}</Link>
);

return (
    
<div className="col-md-12">    
    <div className="row no-gutters">
       <div className="col-md-12 mt-3">
            <p className="lead text-sm-left">{this.props.name}</p>
                {listItems}
        </div>
    </div>
</div>

);
}
}