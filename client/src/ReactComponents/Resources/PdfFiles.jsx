import React from "react";
import PDF from "../Images/pdf.jpeg";
import { NavLink } from "react-router-dom";

const PdfFiles = ({ fileName, url }) => {
  return (
    <>
      {/* {url.map((links) => {
        return (
          <>
            <button className="pdf_file" onClick={() => window.open(links.url)}>
              <img className="pdf_icon" src={PDF} alt="#" />
              <p className="pdf_name">{links.fileName}</p>
            </button>
          </>
        );
      })} */}

      <button className="pdf_file" onClick={() => window.open(url)}>
              <img className="pdf_icon" src={PDF} alt="#" />
              <p className="pdf_name">{fileName}</p>
            </button>
    </>
  );
};

export default PdfFiles;
