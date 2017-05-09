const express = require("express");
const path = require('path');

var friends = require('../data/friends.js');

var router = express.Router();

router.get('/friends', (req, res) => {
    return res.send(friends.getFriends());
});

router.post('/friends', (req, res) => {
    var newFriend = req.body;
    return res.send(friends.findMatch(newFriend));
});

module.exports = router;