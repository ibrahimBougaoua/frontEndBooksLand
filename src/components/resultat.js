import React from "react";
import { Link } from "react-router-dom";

function Resultat(props){

const listItems = props.elements.map((element) =>
<div className="card mb-5 border-0 rounded-0 shadow-sm bg-light">
	<div className="row no-gutters">
	<div className="col-md-3">
		<img src={element[13]} class="card-img rounded-0" alt="..." />
	</div>
	<div className="col-md-9">
	<div className="card-body">
	<h5 className="card-title">{element[3]}</h5>
	<small className="text-muted">{element[4]}</small><br />
	<small className="text-muted">{element[11]}</small><br />
	{element[7].split(',').map((element) => <Link className="btn btn-sm btn-outline-info mr-2 mt-2 mb-2" to={"/account/tag/" + element}>{element}</Link>)}<br />
	</div>
	</div>
	</div>
	</div>
);

return <div className="container mt-3">
<p className=" text-sm-left">Resultat</p>
<div className="row">
    {listItems}
</div>
</div>;

}

export default Resultat;