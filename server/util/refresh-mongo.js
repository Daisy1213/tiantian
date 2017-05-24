/**
 * Created by afaren on 2/12/17.
 */
const refreshMongo = require('./refresh-util');
const mongoose = require('mongoose');

mongoose.connect(require('../constants').mongoUrl);

refreshMongo(() => {
  process.exit(0);
});
