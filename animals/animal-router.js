const animalRouter = require('express').Router();
const Animals = require('./animal-model');

const restricted = require('../middleware/restricted-middleware');

const {
  validateAnimalId,
  validateAnimalPost
} = require('../middleware/validation');

// GET /animals - restricted
animalRouter.get('/', restricted(), (req, res) => {
  Animals.find()
    .then(animals => {
      res.status(200).json(animals)
    })
    .catch(err => {
      res.status(400).json({
        message: "You shall not pass!"
      })
    })
})

// POST - /animals - restricted
animalRouter.post('/', restricted(), validateAnimalPost(), (req, res) => {
  Animals.add(req.body)
    .then(animal => {
      res.status(201).json(animal)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

// PUT - /animals/:id - restricted
animalRouter.put('/:id', restricted(), validateAnimalId(), validateAnimalPost(), (req, res) => {
  Animals.update(req.params.id, req.body)
    .then(animal => {
      res.status(201).json(animal)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

// DELETE - /animals/:id - restricted
animalRouter.delete('/:id', restricted(), validateAnimalId(), (req, res) => {
  Animals.remove(req.params.id)
    .then(() => {
      res.status(200).json({
        message: "Animal was removed from DB."
      })
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

module.exports = animalRouter;