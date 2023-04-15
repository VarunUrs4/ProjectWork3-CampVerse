import React from "react";
import logo from "../Images/Logo.png";
import Category from "./Category";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ForumIcon from '@mui/icons-material/Forum';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LogoutIcon from '@mui/icons-material/Logout';
import { Outlet,useNavigate } from "react-router-dom";

const Left_sidebar = () => {
  const navigate = useNavigate();
const logout = ()=>{
  navigate('/login');
}

  return (
    <>
      <div className="border_curve left_sidebar">
        <div className="logo">
          <img className="logo_img" src={logo} alt="logo" />
          <h3 className="logo_title">CampVerse</h3>
        </div>
        <div className="category">
          <Category href="/forum" categoryClass="forum" categoryName="Forum" icon={<ForumIcon/>}/>
          <Category href="/resources" categoryClass="resources" categoryName="Resources" icon={<LibraryBooksIcon/>}/>
          <Category href="/placement" categoryClass="placements" categoryName="Placements" icon={<BusinessCenterIcon/>}/>
          <Category href="/events" categoryClass="events" categoryName="Events" icon={<EmojiEventsIcon/>}/>
        </div>
        <div className="signout_container">
          {/* <div class="signout_icon"></div> */}
          <button className="signout_btn"  onClick={logout} ><LogoutIcon/> Sign Out</button>
        </div>
      </div>
      <Outlet/>
    </>
  );
};

export default Left_sidebar;
