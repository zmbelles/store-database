const mongoose = require("mongoose");
const { Schema, SchemaTypes, models } = mongoose;

const settingsSchema = new Schema({
  color_theme: {
    type: String,
    required: false,
  },
  currency_type: {
    type: String,
    required: false,
  },
  time_zone: {
    type: String,
    required: false,
  },
});

module.exports = models.Settings || mongoose.model("Settings", settingsSchema);
