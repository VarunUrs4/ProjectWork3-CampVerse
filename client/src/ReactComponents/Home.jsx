import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Main from "./HomePage/Main";
import Navbar from './NavBar/Navbar';


const Home = () => {
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
    {/* <Navbar/> */}
        <Main/>
    </>
  )
}

export default Home