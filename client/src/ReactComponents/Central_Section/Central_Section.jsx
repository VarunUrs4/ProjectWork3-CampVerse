import ForumDept from "./ForumDept";
import ForumBody from "./ForumBody";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Central_Section = () => {
  const [allQuestions, setAllQuestions] = useState([]);

  useEffect(() => {
    axios
      .get("/questions")
      .then((res) => {
        console.log(res.data);
        setAllQuestions(res.data.reverse());
      })
      .catch((error) => {
        // console.log(error)
      });
  }, []);

  return (
    <>
      <div className="border_curve central_section">
        {/* <div className="forum_community">
          <ForumDept ForumClassName="dept CSE" dept="CSE" />
          <ForumDept ForumClassName="dept ECE" dept="ECE" />
          <ForumDept ForumClassName="dept ISE" dept="ISE" />
          <ForumDept ForumClassName="dept ML" dept="ML" />
        </div> */}
        <div className="forum_header">
          <h4>Forum</h4>
          <h4>Body</h4>
          <h4>Likes</h4>
        </div>
        {allQuestions.length > 0 ? allQuestions.map((post,index) => (
          <ForumBody key={index} post={post} />
        )):<div className="noConversation">No Conversation yet</div> }
      </div>
    </>
  );
};

export default Central_Section;
