import { Todo } from "../models/todo.model.js";

export const addTodo = async (req, res) => {
  try {
    console.log(`Adding Todo`);
    const newTodo = new Todo(req.body);
    await newTodo.save();
    res.status(200).send(newTodo);
  } catch (error) {
    res.send(400).send(error);
  }
};

export const getTodos = async (req, res) => {
  try {
    console.log(`Getting Todos`);
    const todos = await Todo.find({});
    res.status(200).send(todos);
  } catch (error) {
    res.send(400).send(error);
  }
};

export const getTodosByID = async (req, res) => {
  const requestedID = req.params.id;
  try {
    console.log(`Getting Todos by ID`);
    const todo = await Todo.findById(requestedID);
    res.status(200).send(todo);
  } catch (error) {
    res.status(400).send(error);
  }
};
export const deleteTodo = async (req, res) => {
  const requestedID = req.params.id;
  try {
    console.log(`Deleting Todo`, requestedID);
    const todo = await Todo.deleteOne({ id: requestedID });

    // Check if the deletion was successful
    if (todo.deletedCount === 1) {
      console.log(`Todo with id ${requestedID} deleted successfully.`);
    } else {
      console.log(`Todo with id ${requestedID} not found.`);
    }

    res.status(200).send(todo);
  } catch (error) {
    res.send(400).send(error);
  }
};

export const updateTodo = async (req, res) => {
  const requestedId = req.params.id;

  try {
    console.log(`Updating todo`);
    const todo = await Todo.findOneAndUpdate({ id: requestedId }, req.body, {
      new: true,
    });
    res.status(200).send(todo);
  } catch (err) {
    res.status(400).send(err);
  }
};
