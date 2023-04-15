const jwt = require("jsonwebtoken");
const Student = require("../models/register");

const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

    const rootUser = await Student.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    console.log("inside auth : ", rootUser);
    if (!rootUser) {
      throw new Error("Student not found!");
    } else {
      req.token = token;
      req.rootUser = rootUser;
      req.studentID = rootUser._id;
    }

    next();
  } catch (error) {
    res.status(401).send("Unauthorised: No token provided");
    console.log(error);
  }
};

module.exports = authenticate;
