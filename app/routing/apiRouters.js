const express = require("express");
const path = require('path');

var friends = require('../data/friends.js');

var router = express.Router();

router.get('/friends', (req, res) => {
    friends.getFriends((data) => {
        return res.send(data);
    })
});

router.post('/friends', (req, res) => {
    var newFriend = req.body;
    friends.addFriend("kosty", "dsfadfadf", ["tip"]);
    return res.send(friends.getFriends());
});

module.exports = router;