import React from "react";
import Error404 from "../ReactComponents/Images/404page.jpeg"
import Navbar from "./NavBar/Navbar";

const ErrorPage = () => {
  return( <>
  <div className="nav404">
    <Navbar/>
  </div>
  <div className="errorPage">
  <img src={Error404} alt="404 Page" />
  <h1 className="errormsg" >Oops! This is not the web page you are looking for.</h1>
  </div>
  </>)
};

export default ErrorPage;
