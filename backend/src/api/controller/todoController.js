const Todo = require("../model/todo");

module.exports = {
    async show(req, res) {
        let todo = await Todo.find();

        return res.json(todo);
    },

    async create(req, res) {
        const { description } = req.body;

        let todo = await Todo.create({
            description
        });

        return res.json(todo);
    },

    async update(req, res) {
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        return res.json(todo);
    },

    async destroy(req, res) {
        const todo = await Todo.findByIdAndDelete(req.params.id);

        return res.json(todo);
    }
};
