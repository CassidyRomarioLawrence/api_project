const Van = require("../models/vans.model.js");

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Tutorial
  const vans = new Van({
    sneakerName: req.body.sneakerName,
    sneakerColor: req.body.sneakerColor,
    sneakerSize: req.body.sneakerSize,
    sneakerPrice: req.body.sneakerPrice
  });

  // Save Tutorial in the database
  Van.create(vans, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    else res.send(data);
  });
};

