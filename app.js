/**
 * Created by tian on 2017/5/24.
 */
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Item = require('./server/model/item');

mongoose.connect(require('./server/constants').mongoUrl);


const app = express();

app.use(express.static(__dirname + '/public'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.get('/items', (req, res) => {

    Item.find({}, (err, docs) => {
      if(err) {
        throw new Error();
      }
      res.send(docs);
    });

})


app.listen(3000, () => {
  console.log('server started at 3000 port');
})
