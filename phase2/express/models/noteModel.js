const { default: mongoose } = require("mongoose");

const noteSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
        default:"No description",
    },


},{timestamps:true})


const Note = mongoose.model("notes",noteSchema)
module.exports = Note

// {
//     title"test",
//     description:"test2"
//     createdAt: new Date(),
//     updatedAt: new Date(),
//     __v: 0
// }