import React from "react";
// import tushar from "../Images/tushar.jpg"
// import tushar from "../Images/tushar.jpg"
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const CardOfDevs = (props) => {
  return (
    <>
      <div className="card">
        <div className="box">
          <div className="content">
            <div className="imgBx">
              <img src={props.img} alt=""></img>
            </div>
            <div className="contentBx">
              <h3>
                {props.name}
                <br />
                <span>{props.role}</span>
                <br />
                <br />
                <br />
                <br />
              </h3>
              <ul className="sci">
                <li style={{ fontSize: "--i:1" }}>
                  <a href={props.fb}>
                    <FacebookIcon />
                  </a>
                </li>
                <li style={{ fontSize: "--i:2" }}>
                  <a href={props.github}>
                    <GitHubIcon />
                  </a>
                </li>
                <li style={{ fontSize: "--i:3" }}>
                  <a href={props.instagram}>
                    <InstagramIcon />
                  </a>
                </li>
                <li style={{ fontSize: "--i:4" }}>
                  <a href={props.linkedin}>
                    <LinkedInIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardOfDevs;
