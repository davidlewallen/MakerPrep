var players = [{ 
    "name": "Stephen Curry",
    "team": "GS",
    "gamesPlayed":   40,
    "minutesPerGame": 34.3,
    "trueShootingPercentage": .679,
    "assistRatio": 19.9,
    "turnoverRatio": 10.7,
    "usageRate": 31.4,
    "offsensiveReboundRate": 2.5,
    "defensiveReboundRate":  13.5,
    "reboundRate": 8.3,
    "playerEfficiencyRating": 32.26,
    "valueAdded": 429.6,
    "estimatedWinAverage": 14.3 
},
{ 
    "name": "Russell Westbrook",
    "team": "OKC",
    "gamesPlayed":   43,
    "minutesPerGame": 33.9,
    "trueShootingPercentage": .554,
    "assistRatio": 27.1,
    "turnoverRatio": 11.8,
    "usageRate": 34.2,
    "offsensiveReboundRate": 5.7,
    "defensiveReboundRate":  16.7,
    "reboundRate": 11.5,
    "playerEfficiencyRating": 29.30,
    "valueAdded": 398.2,
    "estimatedWinAverage": 13.3 
},
{ 
    "name": "Kevin Durant",
    "team": "OKC",
    "gamesPlayed": 36,
    "minutesPerGame": 35.6,
    "trueShootingPercentage": .638,
    "assistRatio": 15.6,
    "turnoverRatio": 10.5,
    "usageRate": 28.0,
    "offsensiveReboundRate": 1.4,
    "defensiveReboundRate":  21.8,
    "reboundRate": 12.1,
    "playerEfficiencyRating": 28.35,
    "valueAdded": 341.5,
    "estimatedWinAverage": 11.4
},
{ 
    "name": "Lebron James",
    "team": "CLE",
    "gamesPlayed":  39,
    "minutesPerGame": 35.7,
    "trueShootingPercentage": .572,
    "assistRatio": 19.2,
    "turnoverRatio": 10.7,
    "usageRate": 31.5,
    "offsensiveReboundRate": 3.8,
    "defensiveReboundRate":  18.9,
    "reboundRate": 11.4,
    "playerEfficiencyRating": 26.51,
    "valueAdded": 332.4,
    "estimatedWinAverage": 11.1
},
{ 
    "name": "Kawhi Leonard",
    "team": "SA",
    "gamesPlayed":   40,
    "minutesPerGame": 33.2,
    "trueShootingPercentage": .615,
    "assistRatio": 12.7,
    "turnoverRatio": 6.9,
    "usageRate": 22.9,
    "offsensiveReboundRate": 4.7,
    "defensiveReboundRate":  18.6,
    "reboundRate": 12.0,
    "playerEfficiencyRating": 25.73,
    "valueAdded": 301.4,
    "estimatedWinAverage": 10.0
},
{
   "name": "Anthony Davis",
    "team": "NO",
    "gamesPlayed":   36,
    "minutesPerGame": 35.7,
    "trueShootingPercentage": .557,
    "assistRatio": 6.9,
    "turnoverRatio": 8.7,
    "usageRate": 26.1,
    "offsensiveReboundRate": 26.1,
    "defensiveReboundRate":  6.2,
    "reboundRate": 26.4,
    "playerEfficiencyRating": 24.74,
    "valueAdded": 254.0,
    "estimatedWinAverage": 8.5
},
{ 
    "name": "Chris Paul",
    "team": "LAC",
    "gamesPlayed":  36,
    "minutesPerGame": 32.4,
    "trueShootingPercentage": .557,
    "assistRatio": 33.4,
    "turnoverRatio": 9.6,
    "usageRate": 27.4,
    "offsensiveReboundRate": 2.0,
    "defensiveReboundRate":  10.8,
    "reboundRate": 6.4,
    "playerEfficiencyRating": 24.41,
    "valueAdded": 233.6,
    "estimatedWinAverage": 7.8
},
{ 
    "name": "DeMarcus Cousins",
    "team": "SAC",
    "gamesPlayed":   33,
    "minutesPerGame": 33.4,
    "trueShootingPercentage": .541,
    "assistRatio":  8.9,
    "turnoverRatio": 11.2,
    "usageRate": 32.8,
    "offsensiveReboundRate": 8.2,
    "defensiveReboundRate":  28.0,
    "reboundRate": 18.2,
    "playerEfficiencyRating": 24.15,
    "valueAdded": 222.7,
    "estimatedWinAverage": 7.4 
},
{
    "name": "James Harden",
    "team": "HOU",
    "gamesPlayed":   44,
    "minutesPerGame": 37.5,
    "trueShootingPercentage": .580,
    "assistRatio": 19.5,
    "turnoverRatio": 13.2,
    "usageRate": 32.3,
    "offsensiveReboundRate": 2.4,
    "defensiveReboundRate":  15.5,
    "reboundRate": 9.0,
    "playerEfficiencyRating": 24.06,
    "valueAdded": 334.0,
    "estimatedWinAverage": 11.1
},
{ 
    "name": "Paul Millsap",
    "team": "ATL",
    "gamesPlayed":  43,
    "minutesPerGame": 32.8,
    "trueShootingPercentage": .585,
    "assistRatio": 16.2,
    "turnoverRatio": 10.5,
    "usageRate": 23.2,
    "offsensiveReboundRate": 8.6,
    "defensiveReboundRate": 20.9,
    "reboundRate": 14.8,
    "playerEfficiencyRating": 23.73,
    "valueAdded": 257.3,
    "estimatedWinAverage": 8.6
},
];

//playerNameEff takes an array and returns a two dimensional array that has the players name and their efficiency rating (Uses Map)
function playerNameEff(playerArray) {
    return playerArray.map(function(player) {
        return [player.name, player.playerEfficiencyRating]
    })
}

console.log(playerNameEff(players));

//Applies filter to the player array. Checks to see which player has at least 35 minutes in each game and returns an array of all player objects.
function playerMin35(playerArray) {
    return playerArray.filter(function(player) {
        return player.minutesPerGame >= 35;
    })
}

console.log(playerMin35(players));

function trueShootingPercentage(playerArray) {
    return playerArray.map(function(player) {
        return player.trueShootingPercentage;
    }).reduce(function(a, b) {
        return a + b;
    }) / playerArray.length * 100 + "%";
}

console.log(trueShootingPercentage(players));

// function trueShootingPercentage(playerArray) {
//     return playerArray.reduce(function(a, b) {
//         return a + b.trueShootingPercentage;
//     }) / players.length * 100;
// }

function getLowestEWI(playerArray) {
    return playerArray.reduce(function(player1, player2) {
        if(player1.estimatedWinAverage > player2.estimatedWinAverage) {
            player1 = player2
        }
        return player1;
    }).name

}

console.log(getLowestEWI(players));