const NewEntry = require("../models/Entries");

// description: get entry
// route: GET /travelmoire/entries
// access: public
const newEntry = async (req, res) => {
  try {
    res.json(await NewEntry.find({}));
  } catch (error) {
    res.status(400).json(error);
  }
};

// description: set entry
// route: POST /travelmoire/entries
// access: private
const setEntry = async (req, res) => {
  try {
    res.json(await NewEntry.create(req.body));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
};

// description: update entry
// route: UPDATE /travelmoire/entries/:id
// access: public
const updateEntry = async (req, res) => {
  try {
    res.json(await NewEntry.findByIdAndUpdate(req.params.id, req.body));
  } catch (error) {
    res.status(400).json(error);
  }
};
// description: delete task
// route: DELETE /travelmoire/entries/:id
// access: public
const deleteEntry = async (req, res) => {
  try {
    res.json(await NewEntry.findByIdAndRemove(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
};

// export
module.exports = {
  newEntry,
  setEntry,
  updateEntry,
  deleteEntry,
};
