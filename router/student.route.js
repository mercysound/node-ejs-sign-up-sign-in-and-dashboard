const express = require("express");
const studentRouter = express.Router();
const {getStudentLandingPage, getStudentSignUpPage, postStudentSignInPage, postStudentSignUpPage, getStudentSignInPage, getDeleteStudent, getEditStudent, getDashboard} = require("../controller/student.controller");

studentRouter.get("/", getStudentLandingPage);

studentRouter.get("/signup", getStudentSignUpPage);

studentRouter.post("/signup", postStudentSignUpPage);

studentRouter.get("/signin", getStudentSignInPage);

studentRouter.post("/signin", postStudentSignInPage);

studentRouter.post("/delete", getDeleteStudent);

studentRouter.post("/edit", getEditStudent);

studentRouter.get("/dashboard", getDashboard);


module.exports = studentRouter;
