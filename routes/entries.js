// dependencies
const express = require("express");
const router = express.Router();
const { newEntry } = require("../controllers/entries");
const { setEntry } = require("../controllers/entries");
const { updateEntry } = require("../controllers/entries");
const { deleteEntry } = require("../controllers/entries");

// index route
 router.get('/get-entry', newEntry);
// create route
 router.post('/create-entry', setEntry);
 
// update route
//  router.put('/update/:id', updateTasks);
// delete route
 router.delete('/delete/:id', deleteEntry);

module.exports = router;
