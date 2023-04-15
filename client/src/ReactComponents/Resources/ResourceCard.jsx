import React from "react";
import { useState } from "react";
import FilesFolders from "./FilesFolders";
import { Lab, Books } from "./FilesFolders";
import { OpenBooks } from "./LabResources";
import Folder from "../Images/Red.png";

const ResourceCard = (props) => {
  const [show, setShow] = useState(false);
  const [topic, setTopic] = useState("Course");
  const [showFilesFolders, setshowFilesFolders] = useState(false);

  const ShowFiles = () => {
    return (
      <>
        {(show && props.sem === "SEM 5")?(
          <div className="showFiles">
            <button className="lab_btn" onClick={toggleShowFolders}>
              <h2>Lab</h2>
            </button>
            <button className="course_notes_btn" onClick={toggleShowFolders}>
              <h2>Course Notes</h2>
            </button>
            <div className="heading">{topic}</div>
            <button className="close_btn" onClick={() => setShow(!show)}>
              X
            </button>
            <div className="files_folders">
              {showFilesFolders ? <Lab /> : null}
              {!showFilesFolders ? <Books /> : null}
            </div>
          </div>
        ) : null}
      </>
    );
  };

  const displayTopic =()=>{
    if(topic === "Course") setTopic("Lab")
    else setTopic("Course")
  }

  const toggle = () => {
    setShow(!show);
  };
  const toggleShowFolders = () => {
    setshowFilesFolders(!showFilesFolders);
    displayTopic()
  };

  return (
    <>
      <ShowFiles />
      <div className="res_card" onClick={toggle}>
        {props.sem}
      </div>
    </>
  );
};

export default ResourceCard;
