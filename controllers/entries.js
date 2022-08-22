const Entries = require("../models/Entries")

// description: get entry
// route: GET /travelmoire/entry
// access: public

const newEntry = async (req, res) => {
    try {
        res.json(await Entries.find({}));
    } catch (error) {
        res.status(400).json(error)
    };
};

// description: set entry
// route: POST /travelmoire/entry
// access: private
const setEntry = async (req, res) => {
    try {
        res.json(await Entries.create(req.body));
    }catch (error) {
        //send error
        res.status(400).json(error);
    };
};

// description: update task
// route: UPDATE /travelmoire/entry/:id
// access: public
const updateEntry = async (req,res) => {
    try {
        res.json(await Entries.findByIdAndUpdate(req.params.id, req.body));
    } catch (error) {
        res.status(400).json(error);
    }
};
// description: delete task
// route: DELETE /travelmoire/entry/:id
// access: public
const deleteEntry = async (req,res) => {
    try {
        res.json(await Entries.findByIdAndRemove(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
};

// export
module.exports = {
    newEntry, setEntry, updateEntry, deleteEntry,
};