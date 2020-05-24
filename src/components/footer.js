import React from "react";
import { Link } from "react-router-dom";

function Footer(props){
    
    return <div>

<footer className="theme font-small unique-color-dark mt-5">

<div className="col-md-12">
   <div className="row">
    <div className="col-md-3 p-4"> 
      <p className="text-sm-left text-white">About us</p>
      <p className="text-sm-left text-white">Harry Potter's life is miserable. His parents are dead and he's stuck with his heartless relatives, who force him to live in a tiny closet under the stairs. But his fortune changes.</p>
    </div>
    <div className="col-md-3 p-4"> 
      <p className="text-sm-left text-white">About us</p>
      <p className="btn btn-outline-success btn-sm mr-2"><Link className="text-white" to={"/movie/tag/adventure"} >Adventure</Link></p>
      <p className="btn btn-outline-success btn-sm mr-2"><Link className="text-white" to={"/movie/tag/animation"} >Animation</Link></p>
      <p className="btn btn-outline-success btn-sm mr-2"><Link className="text-white" to={"/movie/tag/children"} >Children</Link></p>
      <p className="btn btn-outline-success btn-sm mr-2"><Link className="text-white" to={"/movie/tag/comedy"} >Comedy</Link></p>
      <p className="btn btn-outline-success btn-sm mr-2"><Link className="text-white" to={"/movie/tag/fantasy"} >Fantasy</Link></p>
      <p className="btn btn-outline-success btn-sm mr-2"><Link className="text-white" to={"/movie/tag/romance"} >Romance</Link></p>
      <p className="btn btn-outline-success btn-sm mr-2"><Link className="text-white" to={"/movie/tag/Drama"} >Drama</Link></p>
      <p className="btn btn-outline-success btn-sm mr-2"><Link className="text-white" to={"/movie/tag/action"} >Action</Link></p>
      <p className="btn btn-outline-success btn-sm mr-2"><Link className="text-white" to={"/movie/tag/crime"} >Crime</Link></p>
      <p className="btn btn-outline-success btn-sm mr-2"><Link className="text-white" to={"/movie/tag/thriller"} >Thriller</Link></p>
      <p className="btn btn-outline-success btn-sm mr-2"><Link className="text-white" to={"/movie/tag/horror"} >Horror</Link></p>
      <p className="btn btn-outline-success btn-sm mr-2"><Link className="text-white" to={"/movie/tag/mystery"} >Mystery</Link></p>
      <p className="btn btn-outline-success btn-sm mr-2"><Link className="text-white" to={"/movie/tag/sci-Fi"} >Sci-Fi</Link></p>
      <p className="btn btn-outline-success btn-sm mr-2"><Link className="text-white" to={"/movie/tag/documentary"} >Documentary</Link></p>
      <p className="btn btn-outline-success btn-sm mr-2"><Link className="text-white" to={"/movie/tag/imax"} >Imax</Link></p>
    </div>
    <div className="col-md-6 p-4"> 
        <div className="jumbotron jumbotron-fluid p-0">
            <div className="container">
                <h1 className="display-4 text-center text-white font-weight-bold">Read of books.</h1>
                <p className="lead text-white text-center"><span className="text-dt-color font-weight-bold">R</span>ead thousands of full-length books for free with limited ads.</p>
                <img src="book.svg" className="mt-2 rounded position-relative" alt="" style={{width: "5vw",height: "100%",left: "20vw"}}/>
            </div>
        </div>
    </div>
   </div>
  </div>

  <div className="footer-copyright text-center text-white py-3" id="mainNav">© 2020 Copyright:
    <a href="https://datalake.com/" className="text-white"> datalake.com</a>
  </div>

</footer>

    </div>;
    
    }
    
export default Footer;