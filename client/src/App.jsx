import React from "react";
import Left_sidebar from "./ReactComponents/Left_Sidebar/Left_sidebar";
import Navbar from "./ReactComponents/NavBar/Navbar";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import About from "./ReactComponents/About";
import ErrorPage from "./ReactComponents/ErrorPage";
import Developers from "./ReactComponents/Developers";
import ForumPage from "./ReactComponents/ForumPage";
import ResourcesPage from "./ReactComponents/ResourcesPage";
import EventsPage from "./ReactComponents/EventsPage";
import Home from "./ReactComponents/Home";
import ProfilePage from "./ReactComponents/ProfilePage";
import PlacementPage from "./ReactComponents/PlacementPage";
import Login from "./ReactComponents/Login/Login";
import Register from "./ReactComponents/Register";
// import { Outlet } from "react-router-dom";
// import Left_sidebar from "./ReactComponents/Left_Sidebar/Left_sidebar";
// import Navbar from "./ReactComponents/NavBar/Navbar";
// import Post from "./ReactComponents/Central_Section/Post";
// import Central_Section from "./ReactComponents/Central_Section/Central_Section";
// import Chart from "./ReactComponents/Central_Section/Chart";
// import Notifications from "./ReactComponents/Notify/Notifications";


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          {/* <Route path="/" element={<Home/>} /> */}
          <Route path="/about" element={<><Left_sidebar/><About/><Navbar/></>} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/forum" element={<ForumPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/placement" element={<PlacementPage/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter> 
    </>
  );
};

export default App;
