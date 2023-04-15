import React from 'react';
import Left_sidebar from "./Left_Sidebar/Left_sidebar";
import Navbar from "./NavBar/Navbar";
import Placement from './Placements';

const PlacementPage = () => {
  return (
    <>
        <Left_sidebar/>
        <Navbar/>
        <Placement/>
    </>
  )
}

export default PlacementPage;