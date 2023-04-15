import React from "react";
import ResourcesInner from "./ResourcesInner";

const ResourcesOuter = () => {
  return (
    <>
      <div className="ResourcesOuter">
        <div className="res_heading">
          <h1>Resources Page</h1>
        </div>
        <ResourcesInner />
      </div>
    </>
  );
};

export default ResourcesOuter;
