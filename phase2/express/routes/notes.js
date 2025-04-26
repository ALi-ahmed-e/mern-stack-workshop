const router = require('express').Router();

const { createNote, deleteNote,getNotes, updateNote } = require('../controllers/notes')


router.post('/create-note', createNote)

router.delete('/delete-note',deleteNote )

router.get('/get-note',getNotes )

router.put('/update-note',updateNote )





module.exports = router;