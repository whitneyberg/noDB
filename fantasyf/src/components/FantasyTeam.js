import React from "react";

function FantasyTeam(props){
  return(
    <div>
      { props.players.map((player) => {
          console.log(player)
          return <div> player</div>
        })
      }
    </div>
  )

}

export default FantasyTeam
    

  
