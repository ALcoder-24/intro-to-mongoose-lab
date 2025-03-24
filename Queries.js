/*------------------------------- Starter Code -------------------------------*/
import "dotenv/config";
import mongoose from "mongoose";
import Todo from "./models/todo.js";

const connect = async () => {
  // Connect to MongoDB using the MONGODB_URI specified in our .env file.
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB");

  // Call the runQueries function, which will eventually hold functions to work
  // with data in our db.
  await runQueries();

  // Disconnect our app from MongoDB after our queries run.
  await mongoose.disconnect();
  console.log("Disconnected from MongoDB");

  // Close our app, bringing us back to the command line.
  process.exit();
};

const createTodo = async () => {
  const todoData = {
    text: "Learn Python",
    isComplete: false,
  };

  const todo = await Todo.create(todoData);
  console.log("New todo:", todo);
};

const findTodos = async () => {
  const todos = await Todo.findOne({ isComplete: false });
  console.log("All todos:", todos);

  // const todo = await Todo.findById("67ddb184e165096c8a9e5716");
  // console.log("Todo:", todo);
};

const updateTodo = async () => {
  const updatedTodo = await Todo.findByIdAndUpdate(
    "67ddaca5bc8de19bec070459",
    { isComplete: true },
    { new: true }
  );

  console.log("Updated todo:", updatedTodo);
};

const runQueries = async () => {
  console.log("Queries running.");

  // await createTodo();
  // await findTodos();
  await updateTodo();
};

connect();
/*------------------------------ Query Functions -----------------------------*/