const express = require("express");
const app = express();
const ejs = require("ejs");
app.set("view engine", "ejs");
let URI = process.env.MY_MONGO_URI || 4000
// an middleware was set
// this helps to split what is coming from front-end body
app.use(express.urlencoded({ extended: true }));

app.use(express.json()); // this serve as conversion/parse of json  
require("dotenv").config();
require("./mongo-connection/mongoose_connection");
const studentRouter = require("./router/student.route");
app.use("/student", studentRouter);

// here is the func to todo router
const todoRouter = require("./router/todo.route")
app.use("/todo", todoRouter);

app.listen(URI, () => {
  console.log("App is listing @ port: " +URI);
});

