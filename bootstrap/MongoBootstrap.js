var mongoose = require('mongoose');

const mongoUri = process.env.MONGO_URI;
const mongoOptions = {};
const port = process.env.PORT || 3000;

function connectToMongo(app) {
  return mongoose.connect(mongoUri, mongoOptions).then(
    () => {
      app.listen(port, function() {
        console.log('listening on port ' + port);
      });
    },
    err => {
      console.log(err);
    }
  );
}

module.exports = connectToMongo;
