const Note = require("../models/noteModel")




const createNote = async (req, res) => {
    const { title, description } = req.body

    try {


        if (!title || !description) {
            return res.status(400).json({ message: 'Please provide all the fields' })
        }


        const note = await Note.create({
            title,
            description
        })






        return res.json(note)
    } catch (error) {



        console.log(error)


        return res.json({ message: error.message })
    }





}


const deleteNote = async (req, res) => {
    const { id } = req.body

    try {


        if (!id) {
            return res.status(400).json({ message: 'Please provide ID' })
        }


        const note = await Note.findByIdAndDelete(id)






        return res.json({ note, message: 'Note deleted successfully' })
    } catch (error) {



        console.log(error)


        return res.json({ message: error.message })
    }





}

const getNotes = async (req, res) => {


    try {
        
        const notes = await Note.find()

        return res.json(notes)

    } catch (error) {
        console.log(error)
        return res.json({ message: error.message })
        
    }


}

const updateNote = async (req, res) => {

    const { id, title, description } = req.body

    try {


        if (!id || !title || !description) {
            return res.status(400).json({ message: 'Please provide all the fields' })
        }


        const note = await Note.findByIdAndUpdate(id, {
            title,
            description
        }, { new: true })




        return res.json(note)
    } catch (error) {



        console.log(error)


        return res.json({ message: error.message })
    }
}




module.exports = {
    createNote,
    deleteNote,
    getNotes,
    updateNote
}