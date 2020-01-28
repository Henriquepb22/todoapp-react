const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
module.exports = mongoose.connect("mongodb://192.168.99.100:27017/todo", {
  useMongoClient: true
});
