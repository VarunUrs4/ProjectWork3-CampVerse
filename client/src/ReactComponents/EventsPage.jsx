import React,{useEffect} from "react";
import Left_sidebar from "./Left_Sidebar/Left_sidebar";
import Navbar from "./NavBar/Navbar";
import EventsContainer from "./EventsPage/EventsContainer";
import { useNavigate } from "react-router-dom";

const EventsPage = () => {
  const navigate = useNavigate();
  const callProfile = async () => {
    try {
      const res = await fetch("/events", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);

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
    <>
      {/* Events Page */}
      <Left_sidebar />
      <Navbar />
      <EventsContainer />
    </>
  );
};

export default EventsPage;
