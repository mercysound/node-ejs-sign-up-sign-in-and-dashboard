var todoModel = require("../models/todo.model");

const getTodolandingPage = (req, res) => {
  todoModel
    .find()
    .then((result) => {
      res.render("todoapp", { result });
    })
    .catch((err) => {
      console.log(err);
    });
};

const getAddTodoPost = (req, res) => {
  let todoInfo = new todoModel(req.body);
  todoInfo
    .save()
    .then((result) => {
      console.log(req.body);
      res.redirect("/todo");
    })
    .catch((err) => {
      console.log(err);
    });
};

const getDeleteTodo = (req, res) => {
  // console.log(req.body.id);
  todoModel
    .findByIdAndDelete(req.body.id)
    .then((result) => {
      console.log("succesful delete");
      res.redirect("/todo");
      console.log(result);
    })
    .catch((error) => {
      console.log("Unable to delete successful");
      console.log(error);
    });
};

const getEditTodo = (req, res) => {
  console.log(req.body.id);
  todoModel
  .findOneAndUpdate(
    { _id: req.body.id },
    { $set: { todoname: req.body.newTodo} },
    { new: true }
    )
    .then((result) => {
      console.log(result);
      res.redirect("/todo");
    })
    .catch((err)=>{
      console.log(err);
      // if (err.name === "CastError") {
      //   // Handle invalid ID format
      //   res.status(400).json({ message: "Invalid ID format." });
      // } else if (err.name === "NotFound") {
      //   // Handle non-existent todo
      //   res.status(404).json({ message: "Todo not found." });
      // } else {
      //   // Handle generic error
      //   console.error(err);
      //   res.status(500).json({ message: "Internal server error." });
      // }
    })
};

module.exports = {getTodolandingPage, getAddTodoPost, getDeleteTodo, getEditTodo};