import React,{useEffect} from "react";
import Left_sidebar from "./Left_Sidebar/Left_sidebar";
import Navbar from "./NavBar/Navbar";
import Post from "./Central_Section/Post";
import Central_Section from "./Central_Section/Central_Section";
import Chart from "./Central_Section/Chart";
import Notifications from "./Notify/Notifications";
import { Outlet ,useNavigate} from "react-router-dom";
import "./GlobalVariables";

const ForumPage = () => {
  const navigate = useNavigate();
  // const callProfile = async () => {
  //   try {
  //     const res = await fetch("/forum", {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       credentials: "include",
  //     });

  //     const data = await res.json();
  //     console.log(data);

  //     if(!res.status === 200){
  //       const error = new Error(res.error);
  //       throw error;
  //     }

  //   } catch (error) {
  //     console.log(error);
  //     navigate("/login")
  //   }
  // };
  // useEffect(() => {
  //   // callProfile();
  // }, []);







  // const callProfile = async () => {
  //   try {
  //     const res = await fetch('/profile', {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       credentials: "include",
  //     });

  //     const data = await res.json();
  //     // alert(data)

  //     // // userArray = data.data;
  //     // setUserArray(data.data);  
  //     // let name = Object.keys(data.data[0])
  //     // let value = data.data[Object.keys(name)[1]] 
 
  //     const stud = data.data
  //     // console.log("name :" ,name)
  //     // console.log("value :" ,value)
  //     // setUserArray({...userArray, [name]: value});
 
  //     // console.log("profile token : ", stud); 
  //     // setStudentProfile(data);

  //     console.log(global.loginEmail)
  //     {stud.map((user, index) => {
  //       const ans = user.email === global.loginEmail;
  //       //  console.log("new :",ans) 

  //       if(ans){
  //         console.log("success")
  //          global.student1 = user;
  //         // console.log(global.student1) 
  //       }
        
  //     })}


  //     if (!res.status === 200) {
  //       const error = new Error(res.error);
  //       throw error;
  //     }
  //   } catch (error) { 
  //     console.log(error);
  //     // navigate("/login");
  //   }
  // };
  // useEffect(() => {
  //   // callProfile(); 
  // }, []);








  return (
    <>
      {/* Forum Page */}
      <Left_sidebar/>
      <Navbar/>
      <Central_Section />
      <Post />
      {/* <Chart /> */}
      <Notifications />
      <Outlet/>
      {/* <h1>hi</h1> */}
    </>
  );
};

export default ForumPage;
