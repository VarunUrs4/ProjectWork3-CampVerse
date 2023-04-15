import { useEffect,useState,useContext } from "react";
// import Placement from "./Placements"
import Left_sidebar from "./Left_Sidebar/Left_sidebar";
import Navbar from "./NavBar/Navbar";
import UserProf from "./UserProf";
// import student from "./";
import { student } from "./student";
import { useNavigate } from "react-router-dom";
import {User} from "./Login/Login"
import axios from "axios";
import "./GlobalVariables";

import varun from "./Images/varun.jpg"

const ProfilePage = () => {
  let stud;
  const studPro = useContext(User)
  // console.log("Context : ",{studPro});
  const navigate = useNavigate();
  const [studentProfile, setStudentProfile] = useState();
  const [userArray, setUserArray] = useState(
    [{ 
      "name":"",
      "email":"",
      "usn":"",
      "password":"",
      "dept":"",
      "semester": null,
      "year":null,
      "section":"",
      "phone":null,
      "personalEmail":"",
      "joiningYear":null,
      "passingYear":null,
      "cgpa":null,
      "proctor":"",
      "achievements":"",
      "clubs":""
  } ]
  );
 const res = "";

///////////////////////


// useEffect(() => {
//   const getStudData = async () => {
//     res = await axios.get('/profile')
//     console.log(res.data)
//     alert(studPro)
//   }
//   getStudData()
// }, [])


///////////////////////

  const callProfile = async () => {
    try { 
      const res = await fetch('/profile', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        }, 
        credentials: "include",
      });

      const data = await res.json();
      // alert(data)

      // userArray = data.data;
      setUserArray(data.data);  
      let name = Object.keys(data.data[0])
      let value = data.data[Object.keys(name)[1]] 
 
      stud = data.data
      // console.log("name :" ,name)
      // console.log("value :" ,value)
      // setUserArray({...userArray, [name]: value});
 
      // console.log("profile token : ", stud); 
      setStudentProfile(data);

      console.log(global.loginEmail)
      {stud.map((user, index) => {
        const ans = user.email === global.loginEmail;
        //  console.log("new :",ans) 

        if(ans){
          console.log("success")
           global.student1 = user;  
          // console.log(global.student1) 
        }
        
      })}


      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) { 
      console.log(error);
      // navigate("/login");
    }
  };
  useEffect(() => {
    // callProfile(); 
  }, []);
  return (
    <>
      <Left_sidebar /> 
      <Navbar />
      {/* {student.name} */}
      {/* <Placement /> */}
{console.log("checking : ",global.student1.name )}
      {student.map((studDetails, index) => {
        {/* if(studDetails.email === global.userEmail){ */}
        return (
          <UserProf
            name={studDetails.name}
            email={studDetails.email}
            usn={studDetails.usn}
            dept={studDetails.dept}
            sem={studDetails.semester}
            year={studDetails.year}
            sec={studDetails.section}
            phone={studDetails.phone}
            joiningYear={studDetails.joiningYear}
            passingYear={studDetails.passingYear}
            cgpa={studDetails.cgpa}
            proctor={studDetails.proctor}
            achievements={studDetails.achievements}
            clubs={studDetails.clubs}
            img={studDetails.img}
          />
        );
        {/* }          <h1>Cannot display</h1> */}
 
      })}
          {/* <UserProf
            name={global.student1.name}
            email={global.student1.email}
            usn={global.student1.usn}
            dept={global.student1.department}
            sem={global.student1.semester}
            year={global.student1.year}
            sec={global.student1.section}
            phone={global.student1.phone}
            joiningYear={global.student1.joiningYear}
            passingYear={global.student1.passingYear}
            cgpa={global.student1.cgpa}
            proctor={global.student1.proctor}
            achievements={global.student1.achievements}
            clubs={global.student1.clubs}
            // img={global.student1.img}
            img={varun}
          /> */}

      {/* <UserProf name = {"Varun Urs M S"} dept={"CSE"} year={"3rd"} sec={"5D"} mob={"7019456792"}/>
      <UserProf name = {"Tushar B T"} dept={"CSE"} year={"3rd"} sec={"5D"} mob={"6879548621"}/>
      <UserProf name = {"Omar Abdulla Sheriff"} dept={"CSE"} year={"3rd"} sec={"5D"} mob={"9875648654"}/> */}
    </>
  );
};

export default ProfilePage;
