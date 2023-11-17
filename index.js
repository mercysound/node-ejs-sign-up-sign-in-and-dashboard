console.log("working");
const express = require('express')
const app = express()
const ejs = require("ejs")
app.set("view engine", "ejs")
app.get("/", (req, res) =>{
  res.render("index", {name:"kunle", gender: "male"});
  // res.sendFile(__dirname + "/index.html")
  // console.log(__dirname);
});

app.get("/signup", (req, res)=>{
  res.render("signup")
})

app.listen(4000, ()=>{
  console.log("you server started");
})