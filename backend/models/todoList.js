// todoList.js

const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    deadline: {
        type: Date,
    },
    description: {  // Added Description field
        type: String,
    },
    category: {  // Added Category field
        type: String,
        required: true, 
    },
});

const todoList = mongoose.model("todo", todoSchema);

module.exports = todoList;
