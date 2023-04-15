import "./teams.css";
import CardOfDevs from "./CardOfDevs";
import tushar from "../Images/tushar.jpg";
import aditya from "../Images/Aditya.jpg";
import omar from "../Images/OMAR.jpeg";
import varun from "../Images/varun.jpg"

export default function Teams() {
  return (
    <div className="containerTeam">
      <h1 className="devs">Developers </h1>
      <CardOfDevs img={tushar} name="Tushar B T" role="Backend Designer"  github="https://github.com/TusharBT15" fb="https://www.facebook.com/" linkedin="https://github.com/TusharBT15" instagram="https://instagram.com/tushar._.bt?utm_medium=copy_link6" />
      <CardOfDevs img={varun} name="Varun Urs M S" role="Full Stack Developer"  github="http://github.com/VarunUrs4/" fb="https://www.facebook.com/" linkedin="https://www.linkedin.com/" instagram="https://www.instagram.com/?hl=en" />
      <CardOfDevs img={aditya} name="Aditya B N" role="Web Designer"  github="" fb="" linkedin="" instagram="" />
      <CardOfDevs img={omar} name="Omar Abdulla" role="Frontend Developer"  github="https://github.com/o83-program" fb="" linkedin="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin" instagram="https://www.instagram.com/invites/contact/?i=y3fcjvww3vcd&utm_content=2yuv3hd" />
    </div>
  );
}

