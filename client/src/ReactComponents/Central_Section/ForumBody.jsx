import { useState, useEffect } from "react";
import other_user from "../Images/other_user.png";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import axios from "axios";
import ProfilePage from "../ProfilePage";
import varun  from "../Images/varun.jpg";

// import ReactHtmlParser from "body-parser";

// const getUpvoteCount = ()=>{
//   const count = localStorage.getItem("UpvoteCount")
//   if(count !== undefined){
//     return (JSON.parse(localStorage.getItem("UpvoteCount")));
//   }else{return 0}
// }

const ForumBody = ({ post }) => {
  const [answer, setAnswer] = useState("");
  const [submitAns, setSubmitAns] = useState(false);
  const [upvote, setUpvote] = useState(0);
  const [downvote, setDownvote] = useState(0);

  // useEffect(() => {
  //   const a =getUpvoteCount();
  //   setUpvote(a);
  // }, [])

  const getUpvoteCount = () => {
    var a = localStorage.getItem("UpvoteCount");
    console.log("first : ", a);
    if (a === undefined || a === null) {
      localStorage.setItem("UpvoteCount", "0");
      console.log("second : ", a);
      a = "0";
    }

    a = JSON.parse(localStorage.getItem("UpvoteCount"));
    localStorage.setItem("UpvoteCount", upvote);
    a = JSON.parse(localStorage.getItem("UpvoteCount"));
    console.log("a : ", a);
    // setUpvote(a+1)
    return a;
  };

  // useEffect(() => {
  //   // setUpvote(getUpvoteCount()+1)
  // }, [upvote])

  const toggleUpvote = () => {
    if (upvote === 0) setUpvote(upvote + 1);
    if (upvote === 1) setUpvote(upvote - 1);
  };

  const toggleDownvote = () => {
    if (downvote === 0) setDownvote(downvote + 1);
    if (downvote === 1) setDownvote(downvote - 1);
  };

  const toggle = () => {
    setSubmitAns(!submitAns);
  };

  const handleSubmit = async () => {
    if (post?._id && submitAns !== "") {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = {
        answer: answer,
        questionId: post?._id,
        upVote: upvote, 
        // user: user,
      };
      await axios
        .post("/answers", body, config)
        .then((res) => {
          console.log(res.data);
          // alert("Answer added succesfully");
          setSubmitAns(!submitAns);
          window.location.href = "/forum";
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <>
      <div className="forum_body">
        <div className="posted_user_name">Name</div>
        {/* <button className="forum_icons bookmark">
          Bookmark <BookmarkIcon />
        </button>
        <button className="forum_icons follow">
          Follow <PersonAddAlt1Icon />
        </button> */}
        <div className="posted_date_time">
          <h3>Posted on </h3>
          <div className="time">
            {new Date(post.createdAt).toLocaleString()}
          </div>
        </div>
        <img className="avatar" alt="" src={other_user} />
        <div className="posted_msg_body">{post.questionName}</div>
        <button
          className="forum_icons upvote"
          target="page"
          onClick={() => toggleUpvote()}
        >
          <ThumbUpIcon />
          <div className="upcount">{upvote}</div>
        </button>
        <button
          className="forum_icons downvote"

          onClick={() => toggleDownvote()}
        >
          <ThumbDownIcon />
          <div className="upcount">{downvote}</div>
        </button>
        <button className="answerPost" onClick={toggle}>
          Answer
        </button>
      </div>
      {post.allAnswers.length > 0 ? (
        <>
          <br />
          <div className="answerCount">{post.allAnswers.length} answer(s)</div>
          {/* {console.log(post?.allAnswers.reverse())} */}
          {post?.allAnswers?.map((_a) => (
            <>
              <div className="answers">
                <div className="answerBox">{_a?.answer}</div>
                <div className="answer_time"> {new Date(_a.createdAt).toLocaleString()}</div>
              </div>
            </>
          ))}
        </>
      ) : null}
      <hr />

      <>
        {submitAns ? (
          <>
            <div className="ansModal">
              <textarea
                rows="5"
                cols="60"
                name="text"
                placeholder="Enter your answer"
                className="postAnswer"
                value={answer}
                onChange={(e) => {
                  // console.log(e.target.value)
                  setAnswer(e.target.value);
                }}
              ></textarea>
              <button className="post_btn_answer" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </>
        ) : null}
      </>
    </>
  );
};

export default ForumBody;
