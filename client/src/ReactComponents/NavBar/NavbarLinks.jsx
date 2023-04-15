import { NavLink } from "react-router-dom";

const NavbarLinks = (props) => {
  return (
    <>
      {/* <a href={props.href} className={props.navLinkClass}>
      {props.icon}
      <h3>{props.NavLinkName}</h3>
    </a> */}

      <NavLink to={props.href} className={props.navLinkClass}>
        {props.icon}
        <h3>{props.NavLinkName}</h3>
      </NavLink>
    </>
  );
};

export default NavbarLinks;
