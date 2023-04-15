import React from "react";
import Left_sidebar from "./Left_Sidebar/Left_sidebar";
import Navbar from "./NavBar/Navbar";
import ResourcesOuter from "./Resources/ResourcesOuter";

const ResourcesPage = () => {
  return (
    <>
      {/* Resources page */}
      <Left_sidebar />
      <Navbar />
      <ResourcesOuter />
    </>
  );
};

export default ResourcesPage;
