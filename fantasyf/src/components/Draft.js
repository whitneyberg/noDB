import React, { Component } from "react";
// import axios from "axios";
// import Players from './Players'

class Draft extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: [],
    };
  }

  


  render() {
    return (
      <div>
        <h2>Selected Team's Players</h2>
        {this.props.selectedTeam.players.map((element)=>{
        return <p>{element.displayName}</p>
        })}
        <h2>Fantasy Teams</h2>
        {this.state.teams.map((team, index) => {
          console.log(team)
          console.log(this.props.selectedTeam)
          return (
            <div  onClick={this.props.onTeamSelect} key={index}>
              <div>{team.name}</div>
            </div>

            
          );
        })}
      </div>
    );

    
  }
}
export default Draft;
