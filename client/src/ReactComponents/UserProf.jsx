import PUser from "./Images/profilePageUser.jpg";
import Upagraha from "./Images/upagraha.jpg";
import Prakruthi from "./Images/prakruthi.jpg";
import Protocol from "./Images/protocol.jpg";
import Roteract from "./Images/rotaract.jpg";
import Ieee from "./Images/ieee.jpg";
import { useEffect,useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import {User} from "../ReactComponents/Login/Login"

const UserProf = (props) => {
    const navigate = useNavigate();
    const studPro = useContext(User)
    const [studentProfile,setStudentProfile] = useState();
  const callProfile = async () => {
    try {
      const res = await fetch("/profile", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);
      setStudentProfile(data);

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

  return (
    <div className="centerArea">
      {/* <iframe src="https://bmsce.ac.in/home/Placement-Statistics" name="W3Schools" height="100%" width="100%" title="W3"></iframe> */}
      <form method="GET">
      <div className="Pabout">
        <img className="Profile_image_aditya" src={props.img} alt="" />
      </div>
      <div className="Pdetails">
        <h3 class="heading">User Details</h3>
        <hr className="userProfhr" />
        <p>Name : {props.name}</p>
        <p>Dept : {props.dept}</p>
        <p>Year : {props.year}</p>
        <p>Section : {props.sec}</p>
        <p>MobNo : {props.phone}</p>
        <p>Personal Email: varunursms@gmail.com</p>
      </div>
      <div className="Adets">
        <h1 class="heading">Academic Details</h1>
        <hr className="userProfhr" />
        <p>USN :{props.usn}</p>
        <p>Current Semester : {props.sem}</p>
        <p>Section : {props.sec}</p>
        <p>Joining Year : {props.joiningYear}</p>
        <p>Passing Year : {props.passingYear}</p>
        <p>GPA : {props.cgpa}</p>
        <div class="sideLine">
          <p>Proctor Name : {props.proctor}</p>
          <p>College Email Id : {props.email}</p>
          <p>Achievements : {props.achievements}</p>
        </div>
      </div>
      <div class="extradiv">
        <h1 class="heading">Clubs Active In</h1>
        <hr className="userProfhr" />
        <div class="div1">
          <h1 class="heading">Club 1</h1>
          <img src={Upagraha} class="clubimg" />
        </div>
        <div class="div2">
          <h1 class="heading">Club 2</h1>
          <img src={Roteract} class="clubimg" />
        </div>
        <div class="div3">
          <h1 class="heading">Club 3</h1>
          <img src={Protocol} class="clubimg" />
        </div>
        <div class="div4">
          <h1 class="heading">Club 4</h1>
          <img src={Ieee} class="clubimg" />
        </div>
        <div class="div5">
          <h1 class="heading">Club 5</h1>
          <img src={Prakruthi} class="clubimg" />
        </div>
      </div>
      </form>
    </div>
  );
};
export default UserProf;
