const axios = require('axios');

const gotPlayers = []

let id = 0

module.exports = {
    getQBs: (req, res) => {
        res.status(200).send(quarterBacks)
    },

    getRBs: (req, res) => {
        res.status(200).send(runningBacks)
    },

    getWRs: (req, res) => {
        res.status(200).send(wideReceivers)
    },

    getTEs: (req, res) => {
        res.status(200).send(tightEnds)
    },

    getKs: (req, res) => {
        res.status(200).send(kickers)

    },

}

const kickers = [{
    "playerId": "747",
    "active": "1",
    "jersey": "2",
    "lname": "Crosby",
    "fname": "Mason",
    "displayName": "Mason Crosby",
    "team": "GB",
    "position": "K",
    "height": "6-1",
    "weight": "207",
    "dob": "1984-09-03",
    "college": "Colorado"
},
{
    "playerId": "1685",
    "active": "1",
    "jersey": "5",
    "lname": "Bailey",
    "fname": "Dan",
    "displayName": "Dan Bailey",
    "team": "MIN",
    "position": "K",
    "height": "6-0",
    "weight": "190",
    "dob": "1988-01-26",
    "college": "Oklahoma State"
},
{
    "playerId": "2617",
    "active": "1",
    "jersey": "9",
    "lname": "Boswell",
    "fname": "Chris",
    "displayName": "Chris Boswell",
    "team": "PIT",
    "position": "K",
    "height": "6-2",
    "weight": "185",
    "dob": "1991-03-16",
    "college": "Rice"
},
{
    "playerId": "769",
    "active": "1",
    "jersey": "5",
    "lname": "Prater",
    "fname": "Matt",
    "displayName": "Matt Prater",
    "team": "DET",
    "position": "K",
    "height": "5-10",
    "weight": "201",
    "dob": "1984-08-10",
    "college": "UCF"
},
{
    "playerId": "3383",
    "active": "1",
    "jersey": "7",
    "lname": "Butker",
    "fname": "Harrison",
    "displayName": "Harrison Butker",
    "team": "KC",
    "position": "K",
    "height": "6-4",
    "weight": "205",
    "dob": "1995-07-14",
    "college": "Georgia Tech"
},
{
    "playerId": "3664",
    "active": "1",
    "jersey": "8",
    "lname": "Carlson",
    "fname": "Daniel",
    "displayName": "Daniel Carlson",
    "team": "OAK",
    "position": "K",
    "height": "6-5",
    "weight": "215",
    "dob": "1995-01-23",
    "college": "Auburn"
}]

const tightEnds = [
    {
        "playerId": "2776",
        "active": "1",
        "jersey": "86",
        "lname": "Boyle",
        "fname": "Nick",
        "displayName": "Nick Boyle",
        "team": "BAL",
        "position": "TE",
        "height": "6-4",
        "weight": "270",
        "dob": "1993-02-17",
        "college": "Delaware"
    },
    {
        "playerId": "872",
        "active": "1",
        "jersey": "87",
        "lname": "Cook",
        "fname": "Jared",
        "displayName": "Jared Cook",
        "team": "NO",
        "position": "TE",
        "height": "6-5",
        "weight": "254",
        "dob": "1987-04-07",
        "college": "South Carolina"
    },
    {
        "playerId": "3615",
        "active": "1",
        "jersey": "89",
        "lname": "Andrews",
        "fname": "Mark",
        "displayName": "Mark Andrews",
        "team": "BAL",
        "position": "TE",
        "height": "6-4",
        "weight": "256",
        "dob": "1995-09-06",
        "college": "Oklahoma"
    },
    {
        "playerId": "3566",
        "active": "1",
        "jersey": "85",
        "lname": "Arnold",
        "fname": "Dan",
        "displayName": "Dan Arnold",
        "team": "ARI",
        "position": "TE",
        "height": "6-6",
        "weight": "220",
        "dob": "1995-03-15",
        "college": "Wisconsin-Platteville"
    },
    {
        "playerId": "2173",
        "active": "1",
        "jersey": "86",
        "lname": "Ertz",
        "fname": "Zach",
        "displayName": "Zach Ertz",
        "team": "PHI",
        "position": "TE",
        "height": "6-5",
        "weight": "250",
        "dob": "1990-11-10",
        "college": "Stanford"
    },

    {
        "playerId": "1187",
        "active": "1",
        "jersey": "80",
        "lname": "Graham",
        "fname": "Jimmy",
        "displayName": "Jimmy Graham",
        "team": "GB",
        "position": "TE",
        "height": "6-7",
        "weight": "265",
        "dob": "1986-11-24",
        "college": "Miami (FL)"
    },

    {
        "playerId": "2198",
        "active": "1",
        "jersey": "87",
        "lname": "Kelce",
        "fname": "Travis",
        "displayName": "Travis Kelce",
        "team": "KC",
        "position": "TE",
        "height": "6-5",
        "weight": "260",
        "dob": "1989-10-05",
        "college": "Cincinnati"
    },

    {
        "playerId": "3324",
        "active": "1",
        "jersey": "85",
        "lname": "Kittle",
        "fname": "George",
        "displayName": "George Kittle",
        "team": "SF",
        "position": "TE",
        "height": "6-4",
        "weight": "250",
        "dob": "1993-10-09",
        "college": "Iowa"
    },

    {
        "playerId": "733",
        "active": "1",
        "jersey": "82",
        "lname": "Witten",
        "fname": "Jason",
        "displayName": "Jason Witten",
        "team": "DAL",
        "position": "TE",
        "height": "6-6",
        "weight": "263",
        "dob": "1982-05-06",
        "college": "Tennessee"
    },
]

const wideReceivers = [{
    "playerId": "2596",
    "active": "1",
    "jersey": "17",
    "lname": "Adams",
    "fname": "Davante",
    "displayName": "Davante Adams",
    "team": "GB",
    "position": "WR",
    "height": "6-1",
    "weight": "215",
    "dob": "1992-12-24",
    "college": "Fresno State"
},
{
    "playerId": "1437",
    "active": "1",
    "jersey": "18",
    "lname": "Cobb",
    "fname": "Randall",
    "displayName": "Randall Cobb",
    "team": "DAL",
    "position": "WR",
    "height": "5-10",
    "weight": "195",
    "dob": "1990-08-22",
    "college": "Kentucky"
},
{
    "playerId": "2744",
    "active": "1",
    "jersey": "13",
    "lname": "Agholor",
    "fname": "Nelson",
    "displayName": "Nelson Agholor",
    "team": "PHI",
    "position": "WR",
    "height": "6-0",
    "weight": "198",
    "dob": "1993-05-24",
    "college": "USC"
},
{
    "playerId": "2669",
    "active": "1",
    "jersey": "12",
    "lname": "Cooks",
    "fname": "Brandin",
    "displayName": "Brandin Cooks",
    "team": "LAR",
    "position": "WR",
    "height": "5-10",
    "weight": "183",
    "dob": "1993-09-25",
    "college": "Oregon State"
},
{
    "playerId": "832",
    "active": "1",
    "jersey": "11",
    "lname": "Edelman",
    "fname": "Julian",
    "displayName": "Julian Edelman",
    "team": "NE",
    "position": "WR",
    "height": "5-10",
    "weight": "198",
    "dob": "1986-05-22",
    "college": "Kent State"
},
{
    "playerId": "2756",
    "active": "1",
    "jersey": "19",
    "lname": "Cooper",
    "fname": "Amari",
    "displayName": "Amari Cooper",
    "team": "DAL",
    "position": "WR",
    "height": "6-1",
    "weight": "225",
    "dob": "1994-06-17",
    "college": "Alabama"
},

{
    "playerId": "2338",
    "active": "1",
    "jersey": "10",
    "lname": "Hopkins",
    "fname": "DeAndre",
    "displayName": "DeAndre Hopkins",
    "team": "HOU",
    "position": "WR",
    "height": "6-1",
    "weight": "212",
    "dob": "1992-06-06",
    "college": "Clemson"
},]

const quarterBacks = [{
    "playerId": "2441",
    "active": "1",
    "jersey": "10",
    "lname": "Garoppolo",
    "fname": "Jimmy",
    "displayName": "Jimmy Garoppolo",
    "team": "SF",
    "position": "QB",
    "height": "6-2",
    "weight": "225",
    "dob": "1991-11-02",
    "college": "Eastern Illinois"
},
{
    "playerId": "3596",
    "active": "1",
    "jersey": "8",
    "lname": "Jackson",
    "fname": "Lamar",
    "displayName": "Lamar Jackson",
    "team": "BAL",
    "position": "QB",
    "height": "6-2",
    "weight": "212",
    "dob": "1997-01-07",
    "college": "Louisville"
},
{
    "playerId": "3311",
    "active": "1",
    "jersey": "15",
    "lname": "Mahomes",
    "fname": "Patrick",
    "displayName": "Patrick Mahomes",
    "team": "KC",
    "position": "QB",
    "height": "6-3",
    "weight": "230",
    "dob": "1995-09-17",
    "college": "Texas Tech"
},
{
    "playerId": "3036",
    "active": "1",
    "jersey": "4",
    "lname": "Prescott",
    "fname": "Dak",
    "displayName": "Dak Prescott",
    "team": "DAL",
    "position": "QB",
    "height": "6-2",
    "weight": "235",
    "dob": "1993-07-29",
    "college": "Mississippi State"
},
{
    "playerId": "87",
    "active": "1",
    "jersey": "12",
    "lname": "Rodgers",
    "fname": "Aaron",
    "displayName": "Aaron Rodgers",
    "team": "GB",
    "position": "QB",
    "height": "6-2",
    "weight": "225",
    "dob": "1983-12-02",
    "college": "California"
},
{
    "playerId": "3360",
    "active": "1",
    "jersey": "4",
    "lname": "Watson",
    "fname": "Deshaun",
    "displayName": "Deshaun Watson",
    "team": "HOU",
    "position": "QB",
    "height": "6-2",
    "weight": "215",
    "dob": "1995-09-14",
    "college": "Clemson"
},
{
    "playerId": "1847",
    "active": "1",
    "jersey": "3",
    "lname": "Wilson",
    "fname": "Russell",
    "displayName": "Russell Wilson",
    "team": "SEA",
    "position": "QB",
    "height": "5-11",
    "weight": "215",
    "dob": "1988-11-29",
    "college": "Wisconsin"
},
{
    "playerId": "3342",
    "active": "1",
    "jersey": "10",
    "lname": "Trubisky",
    "fname": "Mitchell",
    "displayName": "Mitchell Trubisky",
    "team": "CHI",
    "position": "QB",
    "height": "6-3",
    "weight": "222",
    "dob": "1994-08-20",
    "college": "North Carolina"
},
{
    "playerId": "93",
    "active": "1",
    "jersey": "2",
    "lname": "Ryan",
    "fname": "Matt",
    "displayName": "Matt Ryan",
    "team": "ATL",
    "position": "QB",
    "height": "6-4",
    "weight": "217",
    "dob": "1985-05-17",
    "college": "Boston College"
},
{
    "playerId": "13",
    "active": "1",
    "jersey": "12",
    "lname": "Brady",
    "fname": "Tom",
    "displayName": "Tom Brady",
    "team": "NE",
    "position": "QB",
    "height": "6-4",
    "weight": "225",
    "dob": "1977-08-03",
    "college": "Michigan"
},
{
    "playerId": "14",
    "active": "1",
    "jersey": "9",
    "lname": "Brees",
    "fname": "Drew",
    "displayName": "Drew Brees",
    "team": "NO",
    "position": "QB",
    "height": "6-0",
    "weight": "209",
    "dob": "1979-01-15",
    "college": "Purdue"
}]

const runningBacks = [{
    "playerId": "3037",
    "active": "1",
    "jersey": "21",
    "lname": "Elliott",
    "fname": "Ezekiel",
    "displayName": "Ezekiel Elliott",
    "team": "DAL",
    "position": "RB",
    "height": "6-0",
    "weight": "228",
    "dob": "1995-07-22",
    "college": "Ohio State"
},
{
    "playerId": "2771",
    "active": "1",
    "jersey": "30",
    "lname": "Gurley",
    "fname": "Todd",
    "displayName": "Todd Gurley",
    "team": "LAR",
    "position": "RB",
    "height": "6-1",
    "weight": "224",
    "dob": "1994-08-03",
    "college": "Georgia"
},
{
    "playerId": "3112",
    "active": "1",
    "jersey": "22",
    "lname": "Henry",
    "fname": "Derrick",
    "displayName": "Derrick Henry",
    "team": "TEN",
    "position": "RB",
    "height": "6-3",
    "weight": "247",
    "dob": "1994-01-04",
    "college": "Alabama"
},
{
    "playerId": "1415",
    "active": "1",
    "jersey": "21",
    "lname": "Ingram",
    "fname": "Mark",
    "displayName": "Mark Ingram",
    "team": "BAL",
    "position": "RB",
    "height": "5-9",
    "weight": "210",
    "dob": "1989-12-21",
    "college": "Alabama"
},
{
    "playerId": "3349",
    "active": "1",
    "jersey": "33",
    "lname": "Jones",
    "fname": "Aaron",
    "displayName": "Aaron Jones",
    "team": "GB",
    "position": "RB",
    "height": "5-9",
    "weight": "208",
    "dob": "1994-12-02",
    "college": "UTEP"
},
{
    "playerId": "3582",
    "active": "1",
    "jersey": "26",
    "lname": "Barkley",
    "fname": "Saquon",
    "displayName": "Saquon Barkley",
    "team": "NYG",
    "position": "RB",
    "height": "6-0",
    "weight": "233",
    "dob": "1997-02-07",
    "college": "Penn State"
},
{
    "playerId": "3384",
    "active": "1",
    "jersey": "41",
    "lname": "Kamara",
    "fname": "Alvin",
    "displayName": "Alvin Kamara",
    "team": "NO",
    "position": "RB",
    "height": "5-10",
    "weight": "215",
    "dob": "1995-07-25",
    "college": "Tennessee"
},

{
    "playerId": "3037",
    "active": "1",
    "jersey": "21",
    "lname": "Elliott",
    "fname": "Ezekiel",
    "displayName": "Ezekiel Elliott",
    "team": "DAL",
    "position": "RB",
    "height": "6-0",
    "weight": "228",
    "dob": "1995-07-22",
    "college": "Ohio State"
},
]
