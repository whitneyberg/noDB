



module.exports = {
    getFFTs: (req, res) =>  {
        res.status(200).send(teams)
    },

    addPlayerToTeam: (req, res) => {
        const { team, player } = req.body;
        console.log(team, player)

        const teamIndex = teams.findIndex((fantasyTeam) => {
            return fantasyTeam.name === team
        })
        console.log(teamIndex, team);
        teams[teamIndex].players.push(player);
        res.status(200).send(teams)
    },

    deletePlayerFromTeam: (req, res) => {
        const { team, player } = req.body;
        const teamIndex = teams.findIndex((fantasyTeam) => {
            return fantasyTeam.name === team
        })

        const playerIndex = teams[teamIndex].players.findIndex((fantasyPlayer) => {
            return fantasyPlayer.name === player
        })
        console.log(playerIndex)

        teams[teamIndex].players.splice(playerIndex, 1)
        res.status(200).send(teams[teamIndex])

    },

    editTeamName: (req, res) => {
        console.log("here")
        const { name } = req.params
        const { newTeamName } = req.body;

        const teamIndex = teams.findIndex((fantasyTeam) => {
            return fantasyTeam.name === name
        })
        console.log(name)
        teams[teamIndex].name = newTeamName;
        res.status(200).send(teams[teamIndex])
    }
}

const teams = [
    {name: 'BabyGotDak', players:[]},
    {name: 'Deshaun of the dead', players: []},
    {name: 'Mahomes Alone', players:[]}
]
