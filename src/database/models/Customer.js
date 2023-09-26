const mongoose = require("mongoose");
const { Schema, SchemaTypes, models } = mongoose;
const Settings = require("./Settings");

const customerSchema = new Schema({
  cust_id: SchemaTypes.ObjectId,
  fName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  settings: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Settings' }], // This specifies that we're storing ObjectIds
    ref: "Settings", // This points to the Settings model
    required: false,
  },
  ship_addr1: {
    type: String,
    required: false,
  },
  ship_addr2: {
    type: String,
    required: false,
  },
  ship_city: {
    type: String,
    required: false,
  },
  ship_state: {
    type: String,
    required: false,
  },
  ship_zip: {
    type: Number,
    required: false,
  },
  ship_country: {
    type: String,
    required: false,
  },
  bill_addr1: {
    type: String,
    required: false,
  },
  bill_addr2: {
    type: String,
    required: false,
  },
  bill_city: {
    type: String,
    required: false,
  },
  bill_state: {
    type: String,
    required: false,
  },
  bill_zip: {
    type: Number,
    required: false,
  },
  bill_country: {
    type: String,
    required: false,
  },
});

module.exports = models.Customer || mongoose.model("Customer", customerSchema);
