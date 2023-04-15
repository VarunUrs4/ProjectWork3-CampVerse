const bodyParser = require("body-parser");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

require("../database/conn");
const Events = require("../models/eventsSchema");
const Questions = require("../models/questions");
const Answers = require("../models/answer");
const Student = require("../models/register");

const authenticate = require("../middleware/authenticate");
const cookieParser = require("cookie-parser");
router.use(cookieParser());

router.get("/", (req, res) => {
  res.send("HI from router");
});

router.use(bodyParser.json());

//// Using promises
// router.post("/events",(req,res)=>{
//     const {title,description,totalSeats,fees} = req.body;
//     console.log(title,description,totalSeats,fees);

//     Events.findOne({title:title}).then((eventExist)=>{
//         if(eventExist){
//             return res.status(422).json({error:"This event is already present"});
//         }

//         const newEvent = new Events(req.body);

//         newEvent.save().then(()=>{
//             res.status(201).json({message:"Event added successfully"})
//         }).catch((error)=>{
//             res.status(500).json({error:"Failed to add the event"})
//         })
//     }).catch((error)=>{
//         console.log(error)
//     })
// })

//using async-await
router.post("/events", async (req, res) => {
  const { title, description, totalSeats, fees } = req.body;

  try {
    const eventExist = await Events.findOne({ title: title });

    if (eventExist) {
      return res.status(422).json({ error: "Event is already present" });
    }

    const newEvent = new Events(req.body);
    await newEvent.save();

    res.status(201).json({ message: "Event added successfully" });
  } catch (error) {
    console.log(error);
  }
});

//post question
router.post("/questions", async (req, res) => {
  try {
    const newQ = new Questions(req.body);
    await newQ.save();
    res.status(201).json({ message: "Question added successfully" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Error while adding error" });
  }
});

//post answer
router.post("/answer", async (req, res) => {
  try {
    const newA = new Answers(req.body);
    await newA.save();
  } catch (e) {
    res.status(500).json({ message: "Error in adding question" });
  }
});

//post student registration
router.post("/register", async (req, res) => {
  const { name, usn, email, sem,password } = req.body;

  try { 
    const studentExist = await Student.findOne({ email: email });

    if (studentExist) {
      return res
        .status(422)
        .json({ error: "This Student is already registered" });
    } else {
      const newStudent = new Student(req.body);
      await newStudent.save();

      res.status(201).json({ message: "Student registered successfully" });
    }
  } catch (err) {
    console.log(err);
    res.status.json({ message: "Error in adding Student" });
  }
});
 
//login route
router.post("/login", async (req, res) => {
    // let token;
  try {
    const { email, password } = req.body;
 
    if (!email || !password) {
      return res.status(204).json({ error: "Fields cannot be empty!" });
    }

    const studentLogin = await Student.findOne({ email: email });
// console.log("auth :",studentLogin);
    if (studentLogin) {
      const isMatch = await bcrypt.compare(password, studentLogin.password);

      const token = await studentLogin.generateAuthToken();
      // console.log(token);

      res.cookie("jwtoken",token,{
        expires:new Date(Date.now()+25000000000),
        httpOnly:true,
        // connection:open
      })

      if (!isMatch) {
        res.status(400).json({ error: "Invalid credentials" });
      } else {
        res.status(200).json({ message: "User signin successful" });
        // res.send(studentLogin)
        // console.log(studentLogin);
      }
    } else {
      res.status(422).json({ error: "user login unsuccessful" });
    }
  } catch (err) {
    console.log(err);
  }
});





////////////////////////////////
const questionDB = require("../models/questions");

router.post("/questions", async (req, res) => {
  // console.log(req.body);

  try {
    await questionDB
      .create({
        questionName: req.body.questionName,
        questionUrl: req.body.questionUrl,
        user: req.body.user,
      })
      .then(() => {
        res.status(201).send({
          status: true,
          message: "Question added successfully",
        });
      })
      .catch((err) => {
        // console.log("hi en aitho?")
        res.status(400).send({
          staus: false,
          message: "Bad format",
        });
      });
  } catch (e) {
    res.status(500).send({
      status: false,
      message: "Error while adding question",
    });
  }
});

router.get("/questions", async (req, res) => {
  try {
    await questionDB
      .aggregate([
        {
          $lookup: {
            from: "answers", //collection to join
            localField: "_id", //field from input document
            foreignField: "questionId",
            as: "allAnswers", //output array field
          },
        }, 
      ]) 
      .exec()
      .then((doc) => {
        res.status(200).send(doc);
      })
      .catch((error) => {
        res.status(500).send({
          status: false,
          message: "Unable to get the question details",
        });
      });
  } catch (e) {
    res.status(500).send({
      status: false,
      message: "Unexpected error",
    });
  }
});



//////////////////////////////////
const answerDB = require("../models/answer");

router.post("/answers", async (req, res) => {
  try {
    await answerDB
      .create({
        answer: req.body.answer,
        questionId: req.body.questionId,
        user: req.body.user,
      })
      .then(() => {
        res.status(201).send({
          status: true,
          message: "Answer added successfully",
        });
      })
      .catch((e) => {
        res.status(400).send({
          status: false,
          message: "Bad request",
        });
      });
  } catch (e) {
    res.status(500).send({
      status: false,
      message: "Error while adding answer",
    });
  }
});


//////////////
// router.get('/profile',authenticate,(req,res)=>{
//   console.log(req.rootUser);
//   alert(req.rootUser)
// res.send(req.rootUser);
// })
router.get('/profile',async (req,res)=>{
  // res.send(req.rootUser);
    const sdata = await Student.find();
    return res.status(200).json({
      success: true,
      count: sdata.length,
      data: sdata
    });
});

// router.get('/developers',authenticate,(req,res)=>{
//   res.send(req.rootUser)
// })

// router.get('/about',authenticate,(req,res)=>{
//   res.send(req.rootUser)
//   })

// router.get('/forum',authenticate,(req,res)=>{
//   res.send(req.rootUser)
//   })
// router.get('/resources',authenticate,(req,res)=>{
//   res.send(req.rootUser)
//   })
// router.get('/placements',authenticate,(req,res)=>{
//   res.send(req.rootUser)
//   })
// router.get('/events',authenticate,(req,res)=>{
//   res.send(req.rootUser)
//   })


module.exports = router;
