import "./main.css";
import bgimg from "../Images/homepagebg.jpg"
import Logo from "../Images/logo1.png"
import { NavLink,Link } from "react-router-dom";
import Navbar from "../NavBar/Navbar";

export default function Main() {

  

  return (
    <>
    {/* <Navbar/> */}
    <div>
        <section className="header">
          <nav>
          <NavLink to="/">
              <img src={Logo} alt=""></img>
          </NavLink>
            <div className="navigation">
              <ul>
                <li>
                <NavLink to="/">
                    <i className="fa fa-home"></i>HOME

          </NavLink>
                </li>
                <li>
                <NavLink to="/login">
                    <i className="fa fa-user"></i>ABOUT
                </NavLink>
                </li>
                <li>

                <NavLink to="/login">
                    <i className=" fa fa-phone"></i>DEVELOPERS
                </NavLink>
                </li>
                <li>

                <Link to="/login" >
                {/* <a href="/src/ReactComponents/Login/signa.html">

                </a> */}
                    <i className="fa fa-sign-in"></i>LOG IN
                </Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="text">
            <h1 className="title">CAMPVERSE</h1>
            <p>Resources brought to life.</p>
            <h5>Log in to get started</h5>
          </div>
        </section>
      </div>
    </>
  );
}
