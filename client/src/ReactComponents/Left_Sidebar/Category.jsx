import React from "react";
import { NavLink } from "react-router-dom";

const Category = (props) => {
  return (
    <>
      {/* <a href={props.href} className={props.categoryClass}>
        <div className="icon">{props.icon}</div> <h3>{props.categoryName}</h3>
      </a> */}
      <NavLink to={props.href} className={props.categoryClass}>
        <div className="icon">{props.icon}</div> <h3>{props.categoryName}</h3>
      </NavLink>
    </>
  );
};

export default Category;
