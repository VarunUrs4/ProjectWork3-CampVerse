import React, { useState } from "react";
import { subjectFiles,labFiles } from "./files";
import LabResources from "./LabResources";
import StudyMaterials from "./StudyMaterials";

const Lab = () => {
  return (
    <div className="files_container lab_container">
    {labFiles.map((course)=>{
      return(<LabResources courseName={course.courseName} allFiles={course.pdfFilesArray}/>)
    })}
    </div>
  );
};

const Books = () => {
  return (
    <div className="files_container books_container">
    {subjectFiles.map((course)=>{
      return(<StudyMaterials courseName={course.courseName} allFiles={course.pdfFilesArray}/>)
    })}
      {/* <StudyMaterials />
      <StudyMaterials />
      <StudyMaterials />
      <StudyMaterials /> */}
    </div>
  );
};

const FilesFolders = () => {
  return <></>;
};

export default FilesFolders;
export { Lab, Books };
