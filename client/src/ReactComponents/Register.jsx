import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [student, setStudent] = useState({
      email: "",
      password: "",
    });
  
    let name, value;
    const handleInputs = (e) => {
      name = e.target.name;
      value = e.target.value;
  
      setStudent({...student, [name]: value});
    };

    const checkSignin = async (e) => {
        e.preventDefault();
    
        const { email, password } = student;
    console.log("inside checkSignin email:",email);
    const res = await fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password,
        })
    });
    console.log("inside checkSignin out email:",email);
        const data = await res.json();
    
        if (!data || data.status === 422) {
          window.alert("Student Signin unsuccessful");
        } else {
        //   window.alert(data);
          console.log("i am data",data);
          // navigate("/home")
        }
      };

  return (
    <>
        <form name="myForm" method="POST">
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
    </>
  )
}

export default Register