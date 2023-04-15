import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import ForumDept from "../ReactComponents/Central_Section/ForumDept";
import Logo from "./Images/Logo.png";

const About = () => {

  const navigate = useNavigate();
  const callProfile = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);
      // navigate("/about")

      if(!res.status === 200){
        const error = new Error(res.error);
        throw error;
      }

    } catch (error) {
      console.log(error);
      navigate("/login")
    }
  };
  useEffect(() => {
    // callProfile();
  }, []);
  return (<>
      <div className="border_curve aboutContainer">
              <center><h1>ABOUT THE PROJECT</h1></center>
        <div className="forum_community">
          <ForumDept ForumClassName="dept CSE" dept="HTML" />
          <ForumDept ForumClassName="dept ECE" dept="MONGO DB" />
          <ForumDept ForumClassName="dept ISE" dept="REACT" />
          <ForumDept ForumClassName="dept ML" dept="CSS" />
          <ForumDept ForumClassName="dept ML" dept="Java Script" />
        </div>
        <div className="forum_header">
          <h4>
            Above mentioned are the tools and technologies used in developing
            this project
          </h4>
        </div>
        <p>
          The motive behind developing this website was to create a forum where
          students can access different kind of study materials for their ease
        </p>

        <p>
          The wesite is strictly designed for BMSCE students and authorities
          only
        </p>
          <img src={Logo} alt="chart" />
        {/* <div className="chart">
        </div> */}
        <p style={{color:"red"}}>Why the term capmverse??</p>

        <p>
          This term was derived by us from the concept of multiverse where
          everything is accessible
        </p>
        
      </div>
    </>
  );
};

export default About;
