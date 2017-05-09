const fs = require('fs');

function Friends() {

    var friends = [{
            "name": "Ahmed",
            "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
            "scores": [5, 1, 4, 4, 3, 1, 2, 4, 5, 3]
        },
        {
            "name": "Jacob Deming",
            "photo": "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
            "scores": [3, 4, 2, 5, 2, 2, 1, 4, 3, 5]
        },
        {
            "name": "Jeremiah Scanlon",
            "photo": "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
            "scores": [4, 5, 2, 3, 5, 5, 1, 4, 3, 2]
        }
    ];

    this.getFriends = function() {
        return friends;
    };

    this.findMatch = function(current) {
        var match = {
            'name': "",
            'photo': "",
            'score': 60
        };

        console.log(current);
        var myScore = current['scores[]'].reduce((a, b) => parseInt(a) + parseInt(b), 0);
        console.log('my score', myScore);
        friends.forEach(function(friend) {
            var friendScore = friend.scores.reduce((a, b) => a + b, 0);
            console.log('Friend score', friendScore);
            var totalDifference = myScore - friendScore;
            console.log('totalDif', totalDifference);
            if (totalDifference < 0) {
                totalDifference *= (-1);
            }
            console.log('after total dif', totalDifference);
            if (totalDifference < match.score) {
                console.log('im in', friend.name);
                match.name = friend.name;
                match.photo = friend.photo;
                match.score = totalDifference;
            }
        });
        friends.push(current);
        return match;
    };
}

var friends = new Friends();

module.exports = friends;