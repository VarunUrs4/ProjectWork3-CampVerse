import React from "react";
import ResourceCard from "./ResourceCard";

const ResourcesInner = () => {
  return (
    <>
      <div className="resources_div">
        <ResourceCard sem="SEM 1" />
        <ResourceCard sem="SEM 2" />
        <ResourceCard sem="SEM 3" /> 
        <ResourceCard sem="SEM 4" />
        <ResourceCard sem="SEM 5" />
        <ResourceCard sem="SEM 6" />
        <ResourceCard sem="SEM 7" />
        <ResourceCard sem="SEM 8" />
      </div>
    </> 
  );
};

export default ResourcesInner;
