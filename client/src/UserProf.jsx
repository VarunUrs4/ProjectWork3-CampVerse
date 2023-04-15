import PUser from "../Images/profilePageUser.jpg";
import Upagraha from "../Images/upagraha.jpg";
import Prakruthi from "../Images/prakruthi.jpg";
import Protocol from "../Images/protocol.jpg";
import Roteract from "../Images/rotaract.jpg";
import Ieee from "../Images/ieee.png";
const UserProf = (props) => {
    return(
        <div className="centerArea">
            {/* <iframe src="https://bmsce.ac.in/home/Placement-Statistics" name="W3Schools" height="100%" width="100%" title="W3"></iframe> */}
            <div className="Pabout">
              <img className="Profile_image_aditya" src={PUser} alt="" />
            </div>
            <div className="Pdetails">
                <h3 class="heading">User Details</h3>
                <hr />
                <p>Name : {props.name}</p>
                <p>Dept : {props.dept}</p>
                <p>Year : {props.year}</p>
                <p>Section : {props.sec}</p>
                <p>MobNo : {props.mob}</p>
                <p>Personal Email: {props.mail}</p>
            </div>
            <div className="Adets">
                <h1 class="heading">Academic Details</h1>
                <hr />
                <p>USN : 1BM20CS193</p>
                <p>Current Semester : 5th</p>
                <p>Section : 5D</p>
                <p>Joining Year : 2020</p>
                <p>Passing Year : 2024</p>
                <p>GPA : 8.1</p>
                <div class="sideLine">
                    <p>Proctor Name : Full Name</p>
                    <p>College Email Id : name.cs20@bmsce.ac.in</p>
                    <p>Achievements : mentioned here</p>
                </div>
            </div>
            <div class="extradiv">
                <h1 class="heading">Clubs Active In</h1>
                <hr />
                <div class="div1">
                    <h1 class="heading">Club 1</h1>
                    <img src={Upagraha} class="clubimg" />
                </div>
                <div class="div2">
                    <h1 class="heading">Club 2</h1>
                    <img src={Roteract} class="clubimg" />
                </div>
                <div class="div3">
                    <h1 class="heading">Club 3</h1>
                    <img src={Protocol} class="clubimg" />
                </div>
                <div class="div4">
                    <h1 class="heading">Club 4</h1>
                    <img src={Ieee} class="clubimg" />
                </div>
                <div class="div5">
                    <h1 class="heading">Club 5</h1>
                    <img src={Prakruthi} class="clubimg" />
                </div>
            </div>
        </div>
    );
}
export default UserProf;