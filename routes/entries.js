// dependencies
const express = require("express");
const router = express.Router();
const { newEntry } = require("../controllers/entries");
const { setEntry } = require("../controllers/entries");
const { updateEntry } = require("../controllers/entries");
const { deleteEntry } = require("../controllers/entries");

// index and create route
router.route("/").get(newEntry).post(setEntry);
// index route
//  router.get('/', newEntry);
// create route
//  router.post('/', setEntry);

// update and delete route
router.route("/:id").put(updateEntry).delete(deleteEntry);
// Update Route
//  router.put('/:id', updateTasks);
// Delete Route
//  router.delete('/:id', deleteTasks);

module.exports = router;
