import React from "react";
import { Link } from "react-router-dom";

function NotLogin(){
  return <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="btn btn-sm btn-outline-success mr-2" to={"/login"}>Login</Link>
      </li>
      <li className="nav-item">
        <Link className="btn btn-sm btn-outline-success" to={"/signup"}>Sign up</Link>
      </li>
    </ul>
  </div>;
}

function HasLogin(){
  const red = () => {
        window.location.replace("/account")
  }
  
// handle button click of login form
const Logout = () => {
  localStorage.removeItem("tokeb");
  localStorage.removeItem("email");
  window.location.replace("/")
}

  return  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="btn btn-sm btn-outline-success mr-2" to={"/list"}><i class="fas fa-tv"></i> Show later</Link>
      </li>
      <li className="nav-item">
      <Link className="btn btn-sm btn-outline-success mr-2" to={"/history"}><i class="fas fa-history"></i> history</Link>
      </li>
      <li className="nav-item">
        <Link className="btn btn-sm btn-outline-success mr-2" to={"/abonnements"}><i class="far fa-bell"></i> Abonnements</Link>
      </li>
      <li className="nav-item">
        <button type="submit" className="btn btn-sm btn-outline-success mr-2" onClick={red}><i class="fas fa-user"></i> Account</button>
      </li>
      <li className="nav-item">
        <button type="submit" className="btn btn-sm btn-outline-success" onClick={Logout}><i class="fas fa-out"></i> Logout</button>
      </li>
    </ul>
  </div>;
}

function Navbar(props){

let visibvisibleComponentle = false;

if(localStorage.getItem('email')){
  visibvisibleComponentle = true;
}

return <div>

<nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
<Link className="navbar-brand font-weight-bold" to={"/"}><span className="text-dt-color font-weight-bolder">B</span>ooksLand <span className="text-dt-color font-weight-bolder">U</span>sthb</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <Link className="btn btn-sm btn-outline-success" to={"/"}>Home <span class="sr-only">(current)</span></Link>
      </li>
    </ul>

    { visibvisibleComponentle ? <HasLogin /> : <NotLogin /> }

  </div>
</nav>

</div>;

}

export default Navbar;