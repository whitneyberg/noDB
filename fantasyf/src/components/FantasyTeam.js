import React from "react";

function FantasyTeam(props){
  return(
    <div>
      <p  onClick={()=> props.onTeamSelect(props.team) }>{props.team.name}</p>
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
    

  
