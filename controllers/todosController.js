const Todo = require("../models/Todo");
const AppError = require("../utils/error");
const { todosValidator } = require("../utils/validators");

class TodoController {
  static async getTodo(req, _res, next) {
    const { todoId } = req.params;
    let todo = await Todo.findById({ _id: todoId, userId: req.user });

    // checking if todo exists
    if (!todo) {
      return next(AppError.notFound(`Todo with ID ${todoId} not found.`));
    }

    // checking if the user is the owner
    if (String(todo.userId) !== String(req.userId)) {
      return next(
        AppError.forbidden("You are not permitted to perform this operation")
      );
    }
    return todo;
  }

  static async allTodosByUser(req, res, _next) {
    const todos = await Todo.find({ userId: req.userId });
    res.status(200).json({ todos });
  }

  static async addTodo(req, res, _next) {
    await todosValidator.validate(req.body);
    const { text } = req.body;
    const todo = await Todo.create({ text, userId: req.userId });
    res.status(201).json({ todo });
  }

  static async editTodo(req, res) {
    await todosValidator.validate(req.body);
    let todo = await this.getTodo();

    const { text } = req.body;
    todo = await Todo.findByIdAndUpdate(todoId, { text }, { new: true });
    res.status(200).json({ todo });
  }

  static async deleteTodo(req, res) {
    const { todoId } = req.params;
    await this.getTodo();

    await Todo.findByIdAndDelete(todoId);
    res.status(200).json({ message: "Todo deleted." });
  }

  static async toggleCompleted(req, res) {
    const { todoId } = req.params;
    let todo = await this.getTodo();

    if (todo.completed) {
      todo = await Todo.findByIdAndUpdate(
        todoId,
        { completed: false },
        { new: true }
      );
    } else {
      todo = await Todo.findByIdAndUpdate(
        todoId,
        { completed: true },
        { new: true }
      );
    }
    res.status(200).json({ todo });
  }
}

module.exports = TodoController;
