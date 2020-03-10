const { Router } = require("express");

const TodoController = require("../api/controller/todoController");

const routes = Router();

routes.get("/todo", TodoController.show);
routes.get("/todos", TodoController.search);
routes.post("/todo", TodoController.create);
routes.put("/todo/:id", TodoController.update);
routes.delete("/todo/:id", TodoController.destroy);

module.exports = routes;
