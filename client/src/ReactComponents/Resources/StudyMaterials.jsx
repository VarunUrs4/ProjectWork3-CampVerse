// import React from "react";
// import Folder from "../Images/Red.png";

// const StudyMaterials = () => {
//   return (
//     <>
//       <div className="files_container books_container">
//         <div className="folder">
//           <img className="Folder_icon" src={Folder} alt="#" />
//           <p className="folder_name">AI</p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default StudyMaterials;


import React, { useState } from "react";
import Folder from "../Images/Red.png";
import PdfFiles from "./PdfFiles";

const StudyMaterials = ({courseName,allFiles}) => {
  const OpenLab = () => {
    return (
      <>
        <div className="openfiles">
          <button className="close_btn_in_openedPDF_Files" onClick={toggleOpenFolder}> X </button>
          {allFiles.map((file, index) => {
            return (
              <PdfFiles fileName={file.fileName} url={file.url} />
            );
          })}
        </div>
      </>
    );
  };
  const [openfolder, setopenfolder] = useState(false);

  const toggleOpenFolder = () => {
    setopenfolder(!openfolder);
  };

  return (
    <>
      {openfolder ? <OpenLab /> : null}
      <button className="folder" onClick={toggleOpenFolder}>
        <img className="Folder_icon" src={Folder} alt="#" />
        <p className="folder_name">{courseName}</p>
      </button>
    </>
  );
};

export default StudyMaterials;
