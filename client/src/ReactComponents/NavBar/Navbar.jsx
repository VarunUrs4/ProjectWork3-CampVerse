import user from "../Images/user.png";
import NavbarLinks from "./NavbarLinks";
import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import { Outlet ,useNavigate} from "react-router-dom";
import ProfilePage from "../ProfilePage";
import varun  from "../Images/varun.jpg";

const Navbar = () =>{
  let curDate = new Date().toLocaleDateString();
  let curTime = new Date().toLocaleTimeString();
  
  const navigate = useNavigate();
  const [cTime,setCTime] = useState(curTime);
  const [cDate,setCDate] = useState(curDate);
  
  const showTime = () => {
    curTime = new Date().toLocaleTimeString();
    setCTime(curTime);
  }

const goToProfile = ()=>{
  navigate("/profile")
}

setInterval(showTime,1000);

return(
  (<>
        <div className="border_curve navbar">
        <div className="nav_links">
          <NavbarLinks href="/" navLinkClass="home" NavLinkName="Home" icon={<HomeIcon/>}/>
          <NavbarLinks href="/about" navLinkClass="about" NavLinkName="About" icon={<ContactsIcon/>}/>
          {/* <NavbarLinks href="#" navLinkClass="contact" NavLinkName="Contact" icon={<HeadsetMicIcon/>}/> */}
          <NavbarLinks href="/developers" navLinkClass="more" NavLinkName="Developers" icon={<DoubleArrowIcon/>}/>
        </div>
        {/* <div className="searchbar">
          <input type="text" className="search" placeholder="Search here " />
          <button className="search_icon"><SearchIcon/></button>
        </div> */}
        <div className="date_time">
          <div className="date">{curDate}</div>
          <div className="time">{cTime}</div>
        </div>
        <img className="avatar" src={user} alt="avatar" onClick={()=> goToProfile()}/>
      </div>
      <Outlet/>
        </>)
        
);
}

export default Navbar;