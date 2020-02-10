const express = require('express');
const cors = require('cors');
const playersCtrl = require('./controllers/playersController');
const fantasyCtrl = require('./controllers/fantasyTeamsController');

const app = express()
let PORT = 5050

app.use(express.json())
app.use(cors())

// app.get('/api/allPlayers', playersCtrl)

app.get('/api/players/QBs', playersCtrl.getQBs)
app.get('/api/players/RBs', playersCtrl.getRBs)
app.get('/api/players/WRs', playersCtrl.getWRs)
app.get('/api/players/TEs', playersCtrl.getTEs)
app.get('/api/players/Ks', playersCtrl.getKs)

app.get('/api/teams', fantasyCtrl.getFFTs)
app.post('/api/teams', fantasyCtrl.addPlayerToTeam)
app.delete("/api/teams", fantasyCtrl.deletePlayerFromTeam)
app.put('/api/teams/:name', fantasyCtrl.editTeamName)


// app.post('/api/players', playersCtrl.draftPlayers)
// app.put('/api/players/:id', playersCtrl.editPlayersName)
// app.delete('/api/players/:id', playersCtrl.deletePlayers)

app.listen(PORT, () => console.log(`server listening on ${PORT}`))