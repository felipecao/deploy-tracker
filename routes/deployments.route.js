var express = require('express');
var router = express.Router();
var Deployment = require('../model/Deployment');

router.get('/', function(req, res, next) {
  Deployment.find((err, deployments) => {
    if (err) {
      console.log(err);
      res.send(err);
    }

    res.json(deployments);
  });
});

router.post('/', function(req, res, next) {
  let deployment = {
    service: req.body.service,
    branch: req.body.branch,
    timestamp: req.body.timestamp,
  };

  Deployment.create(deployment, (err, newDeployment) => {
    if (err) {
      res.send(err);
    }

    return res.status(201).send(newDeployment);
  });
});


module.exports = router;
