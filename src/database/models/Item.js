const mongoose = require("mongoose");
const { Schema, SchemaTypes, models } = mongoose;

const itemSchema = new Schema({
  item_id: SchemaTypes.ObjectId,
  item_name: {
    type: String,
    required: true,
  },
  item_category: {
    type: String,
    required: true,
  },
  item_weight: {
    type: Number,
    required: false,
  },
  weight_unit: {
    type: String,
    required: false,
  },
  base_price: {
    type: Number,
    required: true,
  },
  current_price: {
    type: Number,
    required: true,
  },
  on_hand: {
    type: Number,
    required: true,
  },
  qty_ordered: {
    type: Number,
    required: true,
  },
  shipment_ordered: {
    type: Boolean,
    required: false,
  },
  last_shipment_date: {
    type: Date,
    required: false,
  },
  vendor_id: {
    type: String,
    required: false,
  },
});

module.exports = models.Item || mongoose.model("Item", itemSchema);
