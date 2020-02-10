import React, { Component } from 'react'



class Players extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                {this.props.players.map((player, index) => {
                    return (
                        <div className={(this.props.selectedPlayer.lname === player.lname) ? "selected" : ''}
                            onClick={() => this.props.onPlayerSelect(player)}
                            key={index}>
                            <div>{player.displayName}  </div>
                        </div>
                    )
                })}
        
            </div>
        )
    }
}

export default Players