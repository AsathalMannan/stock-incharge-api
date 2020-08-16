module.exports = app => {
    const api = require("../controllers/api.controller.js");
  
    var router = require("express").Router();
  
    // Create a new api
    router.post("/", api.create);
  
    // Retrieve all api
    router.get("/", api.findAll);
  
    // Retrieve all published api
    router.get("/published", api.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", api.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", api.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", api.delete);
  
    // Create a new Tutorial
    router.delete("/", api.deleteAll);

    app.use('/stock/items', router);
};