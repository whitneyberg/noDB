import React, { Component } from "react";
import Header from "./components/Header";
import "./App.css";
import Players from "./components/Players";
import axios from "axios";
import Draft from "./components/Draft"
import FantasyTeam from "./components/FantasyTeam"

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentViewablePosition: "quarterbacks",
      selectedPlayer: "",
      selectedTeam: {players:[]},
      deletePlayerFromTeam: "",
      quarterBacks: [],
      runningBacks: [],
      tightEnds: [],
      kickers: [],
      wideReceivers: [],
      fantasyTeams: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:5050/api/players/Ks`).then(res => {
      this.setState({
        kickers: res.data
      })
    });

    axios.get(`http://localhost:5050/api/players/QBs`).then(res => {
      this.setState({
        quarterBacks: res.data
      });
    });

    axios.get(`http://localhost:5050/api/players/WRs`).then(res => {
      this.setState({
        wideReceivers: res.data
      })
    });

    axios.get(`http://localhost:5050/api/players/TEs`).then(res => {
      this.setState({
        tightEnds: res.data
      });
    });

    axios.get(`http://localhost:5050/api/players/RBs`).then(res => {
      this.setState({
        runningBacks: res.data
      });
    });

    axios.get(`http://localhost:5050/api/teams`).then(res => {
      this.setState({
        fantasyTeams: res.data
      });
    });
  }

  setCurrentViewablePosition = (position) => {
    this.setState({
      currentViewablePosition: position
    })
  }

  setSelectedPLayer = (player) => {
    this.setState({
      selectedPlayer: player
    })
  }

  addPlayerToTeam = () => {
    const { selectedPlayer, selectedTeam } = this.state
    axios.post(`http://localhost:5050/api/teams`, { team: selectedTeam.name, player: selectedPlayer }).then((success) => {
      const index = success.data.findIndex(team => team.name === this.state.selectedTeam.name)
      this.setState({
        fantasyTeams: success.data,
        selectedTeam: success.data[index]
      })
    })
  }

  onTeamSelect = (team) => {
    this.setState({
      selectedTeam: team
    })
  }

  // // //  deletePlayerFromTeam = () => {
  // // //    const {selectedPlayer} = this.state
  // // //    axios.delete(`http://localhost:5050/api/teams`, {team: selectedTeam.name, player: selected player}).then((success)=>{
  // //   const index= success.data.findIndex(team => team.name === this.state.selectedTeam.name)
  //       this.setState({
  // fantasyTeams: success.data,
  // selectedTeam: succes.data[index]

  //       })
  // // })
  // // //        

  render() {
    return (
      <div className="App">

        <Header />

        {this.state.currentViewablePosition === "quarterbacks" &&
          <Players selectedPlayer={this.state.selectedPlayer} onPlayerSelect={this.setSelectedPLayer} players={this.state.quarterBacks} title='Quarter Backs' />
        }
        {this.state.currentViewablePosition === "runningBacks" &&
          <Players selectedPlayer={this.state.selectedPlayer} onPlayerSelect={this.setSelectedPLayer} players={this.state.runningBacks} title='Running Backs' />
        }
        {this.state.currentViewablePosition === "wideReceivers" &&
          <Players selectedPlayer={this.state.selectedPlayer} onPlayerSelect={this.setSelectedPLayer} players={this.state.wideReceivers} title='Wide Receivers' />
        }
        {this.state.currentViewablePosition === "tightEnds" &&
          <Players selectedPlayer={this.state.selectedPlayer} onPlayerSelect={this.setSelectedPLayer} players={this.state.tightEnds} title='Tight Ends' />
        }
        {this.state.currentViewablePosition === "kickers" &&
          <Players selectedPlayer={this.state.selectedPlayer} onPlayerSelect={this.setSelectedPLayer} players={this.state.kickers} title='Kickers' />
        }

        <button className='button' onClick={() => this.setCurrentViewablePosition("quarterbacks")}> Get QBs</button>
        <button className='button' onClick={() => this.setCurrentViewablePosition('runningBacks')}>Get RBs</button>
        <button className='button' onClick={() => this.setCurrentViewablePosition('wideReceivers')}>Get WRs</button>
        <button className='button' onClick={() => this.setCurrentViewablePosition('tightEnds')}>Get TEs</button>
        <button className='button' onClick={() => this.setCurrentViewablePosition('kickers')}>Get Ks</button>

        <Draft selectedTeam={this.state.selectedTeam} teams={this.state.fantasyTeams} onTeamSelect={this.onTeamSelect} />
        {this.state.fantasyTeams.map(fantasyTeam => {
          return (
            < FantasyTeam onTeamSelect={this.onTeamSelect} team={fantasyTeam}/>
            
            )
          })}


          
                  <button className='addPlayer' onClick={this.addPlayerToTeam}>Add Player</button>




      </div>
    );
  }
}

export default App;
