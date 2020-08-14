const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trackerSchema = new Schema({});

const tracker = mongoose.model("tracker", trackerSchema);

module.exports = tracker;
