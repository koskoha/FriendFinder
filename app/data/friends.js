const fs = require('fs');

function Friends() {

    var friendsArray = ["hello", "byu"];
    this.addFriend = function(name, photo, scores) {
        friendsArray.push({ name, photo, scores });
    }
    this.getFriends = function(response) {
        console.log(response);
        fs.readFile("app/data/friends.txt", 'utf-8', (err, data) => {
            if (err) {
                console.log('Cant read file');
                throw err;
            }
            var friendsArr = JSON.parse(data);
            response(friendsArr);
        })
    }
}

var friends = new Friends();

module.exports = friends;