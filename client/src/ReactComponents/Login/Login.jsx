import "./login.css";
import bg from "../Images/bg.svg";
import avatar from "../Images/avatars.png";
import wave from "../Images/wave.png";
import { useState ,useEffect,useContext, createContext} from "react";
import Home from "../Home";
import { NavLink, Link ,useNavigate} from "react-router-dom";
import ForumPage from "../ForumPage";

const User = createContext();
const Login=()=> {
    // const User = createContext();
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    email: "",
    password: "",
  });

  global.loginEmail = student.email;

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setStudent({...student, [name]: value});
  };

  const checkSignin = async (e) => {
    e.preventDefault(); 

    const { email, password } = student;

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      })
    });
    const data = await res.json();

    if (!data || res.status === 422) {
      window.alert("Student Signin unsuccessful");
      setStudent({email:"",password:""});
    } 
    else if (!data || res.status === 400) {
      window.alert("Invalid credentials");
      setStudent({email:"",password:""});
    }
    else if (!data || res.status === 204) {
      window.alert("Fields cannot be empty!");
      setStudent({email:"",password:""});
    }
    else if (res.status === 200) {
      console.log(res.status);
      // console.log(data);
      // const d = fetch('/login', async(req,res)=>{
      //   method="GET"
      // })
      navigate("/forum")
    }
    else {
      // window.alert(data);
      console.log(data);
      console.log(res.status);
      setStudent({email:"",password:""});
    }
  };

  return (
    <>
    <User.Provider value={"hello"}>
    {console.log(student.email)}
    {/* <h1>{User}</h1> */}
    <div className="goback">
      <h2 onClick={()=>navigate("/")}>Go back</h2>
    </div>
      <img class="wave" src={wave} ></img>
      <div class="container">
      
        <div class="img">
          <img src={bg} />
        </div>
        <div class="login-content">
          <form name="myForm" method="POST">
            <img src={avatar} />
            <h2 class="title">LOGIN</h2>
            <div class="input-div one">
              <div class="i">
                <i class="fas fa-user"></i>
              </div>
              <div class="div">
                {/* <h5> Username</h5> */}
                <input
                  type="text"
                  class="input"
                  name="email"
                  value={student.email}
                  onChange={handleInputs}
                  placeholder="Official Mail ID"
                />
              </div>
            </div>
            <div class="input-div pass">
              <div class="i">
                <i class="fas fa-lock"></i>
              </div>
              <div class="div">
                {/* <h5>Password</h5> */}
                <input
                  type="password"
                  class="input"
                  name="password"
                  value={student.password}
                  onChange={handleInputs}
                  placeholder="Password"
                />
              </div>
            </div>
            {/* <a href="#">Forgot Password?</a> */}
            <input type="submit" class="btn" onClick={checkSignin} />
          </form>
        </div>
      </div>
    </User.Provider>
    </>
  );
}


export default Login;
export {User};
  