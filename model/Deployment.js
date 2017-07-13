var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DeploymentSchema = new Schema({
    service: {
      type: String,
      required: true
    },
    branch: {
      type: String,
      required: true
    },
    timestamp: {
      type: Date,
      required: true,
      default: Date.now
    }
});

module.exports = mongoose.model('Deployment', DeploymentSchema);
