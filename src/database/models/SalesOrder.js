const mongoose = require("mongoose");
const { Schema, SchemaTypes, models } = mongoose;

const salesOrderSchema = new Schema({
  so_id: SchemaTypes.ObjectId,
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item",
      required: true,
    },
  ],
  sub_total: {
    type: Number,
    required: true,
  },
  delivery_cost: {
    type: Number,
    required: true,
  },
  cust_id: {
    type: String,
    required: false,
  },
  taxes: {
    type: Number,
    required: false,
  },
  total: {
    type: Number,
    required: false,
  },
  shipment_date: {
    type: Date,
    required: false,
  },
});

module.exports = models.SalesOrder || mongoose.model("SalesOrder", salesOrderSchema);
