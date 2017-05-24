/**
 * Created by afaren on 2/10/17.
 */
const items = require('./fixture/item');
const Item = require('../model/item');


const rawData = {
  Item: items,
};

const modelMap = {
  Item
};


module.exports = function refresh(done) {
  let docs = Object.keys(rawData);

  Object.keys(rawData)
    .forEach(v => {
      modelMap[v].remove(()=> {
        modelMap[v].create(rawData[v], ()=> {
          docs = docs.filter(doc => doc !== v);
          // console.log(`The data of ${v} created`);
          if (docs.length === 0) {
            // console.log('All data refreshed');
            done();
          }
        });
      });
    });
};


