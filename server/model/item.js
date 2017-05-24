/**
 * Created by tian on 2017/5/24.
 */
const mongoose = require('mongoose');
const Data = mongoose.model("EnvironmentItem", {
  value: String,
  LineCoordinateArrays: Array,
  pieCoordinateArrays: Array
});

module.exports = Data;

