import mongoose from "mongoose";

// Schema: What we want our data to look like (blueprint)
const todosSchema = new mongoose.Schema({
  text: String,
  isComplete: Boolean,
});

// Model: Way for us to interface with Database via js
const Todo = mongoose.model("todos", todosSchema);

export default Todo;