const mongoose = require("mongoose");

const eventsSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  totalSeats: {
    type: Number,
  },
  fees: {
    type: Number,
  },
});

const Events = mongoose.model("EVENTS", eventsSchema);

module.exports = Events;
