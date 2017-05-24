/**
 * Created by tian on 2017/5/24.
 */
const Item = require('./../model/item');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/supermarket');


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




