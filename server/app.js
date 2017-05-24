/**
 * Created by tian on 2017/5/24.
 */
const mongoose = require('mongoose');
const Item = require('./model/item');

mongoose.connect('mongodb://localhost/env_listener');


const data = {
  value: 'environment',
  LineCoordinateArrays: 'environment',
  pieCoordinateArrays: 'environment'
};

function create() {
  Item.create(data, (err, doc) => {
    if (err) {
      return next(err);
    }
    console.log('create successfully');
  });
}


function find() {
  Item.find({}, (err, docs) => {
    console.log('---------------------')
    console.log(docs);
    console.log('---------------------')
  });
}

create();
find();




