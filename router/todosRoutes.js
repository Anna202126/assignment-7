const router = require("express").Router();

const { asyncErrorHandler } = require("../utils");
const TodoController = require("../controllers/todosController");
const { verifyToken } = require("../controllers/authController");

router
  .route("/")
  .post(verifyToken, asyncErrorHandler(TodoController.addTodo))
  .get(verifyToken, asyncErrorHandler(TodoController.allTodosByUser));

router
  .route("/:todoId")
  .patch(verifyToken, asyncErrorHandler(TodoController.editTodo))
  .delete(verifyToken, asyncErrorHandler(TodoController.deleteTodo));

router
  .route("/:todoId/complete")
  .patch(verifyToken, asyncErrorHandler(TodoController.toggleCompleted));

module.exports = router;
