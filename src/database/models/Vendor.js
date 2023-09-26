const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema({
  cust_id: mongoose.SchemaTypes.ObjectId,
  primary_contact_fName: {
    type: String,
    required: true,
  },
  primary_contact_lName: {
    type: String,
    required: true,
  },
  primary_contact_phone: {
    type: String,
    required: false,
  },
  primary_contact_email: {
    type: String,
    required: false,
  },
  vend_addr1: {
    type: String,
    required: true,
  },
  vend_addr2: {
    type: String,
    required: true,
  },
  vend_city: {
    type: String,
    required: true,
  },
  vend_state: {
    type: String,
    required: true,
  },
  vend_zip: {
    type: Number,
    required: true,
  },
  vend_country: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.models.Vendor || mongoose.model("Vendor", vendorSchema);
