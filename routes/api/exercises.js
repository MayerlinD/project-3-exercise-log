const express = require('express')
const router = express.Router()
const exerciseCtrl = require('../../controllers/api/exercises')


// Index /api/exercises
router.get('/', exerciseCtrl.indexNotComplete, exerciseCtrl.jsonExercises)
// Index /api/exercises/completed
router.get('/completed', exerciseCtrl.indexComplete, exerciseCtrl.jsonExercises)
// Delete /api/exercises/:id
router.delete('/:id', exerciseCtrl.destroy, exerciseCtrl.jsonExercise)
// Update /api/exercises/:id
router.put('/:id', exerciseCtrl.update, exerciseCtrl.jsonExercise)
// Create /api/exercises
router.post('/', exerciseCtrl.create, exerciseCtrl.jsonExercise)
// Show /api/exercises/:id
router.get('/:id', exerciseCtrl.show, exerciseCtrl.jsonExercise)

module.exports = router


module.exports = router