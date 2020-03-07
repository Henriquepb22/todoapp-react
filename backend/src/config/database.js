const mongoose = require("mongoose");

module.exports = mongoose.connect("mongodb://localhost:27017/todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
