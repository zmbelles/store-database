const mongoose = require("mongoose");
const { Schema, SchemaTypes, models } = mongoose;

const employeeSchema = new Schema({
  emp_id: SchemaTypes.ObjectId,
  emp_fname: {
    type: String,
    required: true,
  },
  emp_lname: {
    type: String,
    required: true,
  },
  emp_title: {
    type: String,
    required: true,
  },
  emp_email: {
    type: String,
    required: true,
  },
  emp_phone: {
    type: String,
    required: true,
  },
  emp_pay: {
    type: Number,
    required: true,
  },
  pay_freq: {
    type: String,
    required: true,
  },
  emp_addr1: {
    type: String,
    required: true,
  },
  emp_addr2: {
    type: String,
    required: true,
  },
  emp_city: {
    type: String,
    required: true,
  },
  emp_zip: {
    type: Number,
    required: true,
  },
  emp_social: {
    type: String,
    required: true,
  },
  site_access: {
    type: Number,
    required: true,
  },
  hire_date: {
    type: Date,
    required: true,
  },
  isTerminated: {
    type: Boolean,
    required: true,
  },
  termination_date: {
    type: Date,
    required: true,
  },
});

module.exports = models.Employee || mongoose.model("Employee", employeeSchema);
