import React from "react";


function FantasyTeam(props){
  return(
    <div>
      <p className={(props.selectedTeam.name === props.team.name) ? "selected" : ""}  onClick={()=> props.onTeamSelect(props.team) }>{props.team.name} </p>
    {/* <div>
      { props.team.players.map((player) => {
          return <div> {player.displayName}</div>
        })
      }
    </div> */}
    </div>
  )

}

export default FantasyTeam
    

  
