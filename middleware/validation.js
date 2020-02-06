const Animal = require('../animals/animal-model');

function validateAnimalId() {
  return (req, res, next) => {
    Animal.findById(req.params.id)
      .then(animal => {
        if (animal) {
          req.animal = animal
          next();
        } else {
          res.status(400).json({
            message: "Invalid Animal Id"
          })
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          message: "Error retrieving the animal."
        })
      })
  }
}

function validateAnimalPost() {
  return (req, res, next) => {
    if (!req.body.name) {
      return res.status(400).json({
        message: "Please provide a name for the animal"
      })
    }
    next();
  }
}

module.exports = {
  validateAnimalId,
  validateAnimalPost
}