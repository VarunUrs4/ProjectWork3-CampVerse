import axios from "axios";
import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import varun  from "../Images/varun.jpg";

import user from "../Images/user.png";

const Post = () => {
  const navigate = useNavigate();
  const [question, setQuestion] = useState("");

  const handleSubmit = async () => {
    if (question !== "") {
      const config = { 
        headers: {
          "Content-type": "application/json",
        },
      };
      const body = {
        questionName: question,
        // questionUrl: inputUrl
      };
      await axios
        .post("/questions", body, config)
        .then((res) => {
          console.log(res.data);
          // alert(res.data.message);
          window.location.href = "/forum";
          // navigate("/forum")
        })
        .catch((e) => {
          console.log(e);
          alert("Error in adding question!!!!!");
        });
    }
  };

  return ( 
    <>
      <div className="border_curve post">
        <div className="user_name">Name</div>
        <img className="avatar" alt="" src={user} />
        <input
          type="text"
          className="post_msg"
          placeholder="Type your comment"
          value={question}
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
        />
        <button className="post_btn" onClick={handleSubmit}>
          Post
        </button>
      </div>
    </>
  );
};

export default Post;
