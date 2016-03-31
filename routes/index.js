var express = require('express');
var router = express.Router();
var rp = require('request-promise');

router.get('/stream/:id', function (req, res, next) {
    if(isNaN(parseInt(req.params.id))) {
        throw new RangeError("ID should be a number");
    }
    // https://api.soundcloud.com/i1/tracks/238016893/streams?client_id=02gUJC0hH2ct1EGOcYXQIzRFU91c72Ea
    var uri = "https://api.soundcloud.com/i1/tracks/" + req.params.id + "/streams?client_id=02gUJC0hH2ct1EGOcYXQIzRFU91c72Ea";
    rp({
        uri: uri,
        json: true
    })
        .then(function (response) {
            res.send(response);
        }).catch(function (err) {
            res.sendStatus(500);
        })
});

router.get('/policy/:id', function (req, res, next) {
    if(isNaN(parseInt(req.params.id))) {
        throw new RangeError("ID should be a number");
    }
    // https://api.soundcloud.com/tracks/238016893?client_id=02gUJC0hH2ct1EGOcYXQIzRFU91c72Ea
    var uri = "https://api.soundcloud.com/tracks/" + req.params.id + "?client_id=02gUJC0hH2ct1EGOcYXQIzRFU91c72Ea";
    rp({
        uri: uri,
        json: true
    })
        .then(function (response) {
            
            res.send({
                policy: response.policy 
            });
        }).catch(function (err) {
            res.sendStatus(500);
        })
});

module.exports = router;
