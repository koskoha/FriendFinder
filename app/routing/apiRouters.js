const express = require("express");
//importing friends object;
var friends = require('../data/friends.js');

var router = express.Router();

//declaring our api/friends rout for getting data
router.get('/', (req, res) => {
    return res.send(friends.getFriends());
});

//declaring our api/friends rout for posting data 
router.post('/', (req, res) => {
    //getting user inputs
    var newFriend = req.body;
    //saving to the server and returning best matched friend 
    return res.send(friends.findMatch(newFriend));
});

//exporting routs
module.exports = router;