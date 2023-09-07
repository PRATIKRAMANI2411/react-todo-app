const { text } = require('express');
const ToDoModel = require('../models/ToDoModel');

module.exports.getToDo = async (req, resp) => {
    const toDo = await ToDoModel.find()
    resp.send(toDo)
}

module.exports.SaveToDo = async (req, resp) => {
    const text = req.body
    ToDoModel.create(text)
        .then((data) => {
            console.log('Added Successfully...');
            console.log(data);
            resp.send(data);
        })
}

module.exports.UpdateToDo = async (req, resp) => {
    const _id = req.body._id
    const text = req.body.text
    ToDoModel
    .findByIdAndUpdate(_id, {text})
    .then(() => resp.send("Updated Successfully...."))
    .catch((err)=> console.log(err))
}

module.exports.DeleteToDo = async (req, resp) =>{
    const id = req.body
    ToDoModel
    .findByIdAndDelete(id)
    .then(()=> resp.send("Deleted Successfully..."))
    .catch((err)=> console.log(err))
}