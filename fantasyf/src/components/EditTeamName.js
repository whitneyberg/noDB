import React, {Component} from 'react'


class EditTeamName extends Component {
    constructor(props){
        super(props)

        this.state= {
            userInput: ''
        }

    }


handleChange = (e) =>{
    this.setState({
        userInput: e.target.value
    })
}

    render(){
        return (
            <div>
            <input onChange={this.handleChange}/>
            <button  onClick={()=>{this.props.editTeamName(this.props.name, this.state.userInput)}}>Edit Team Name</button>
            </div>
        )
        
    }
}

export default EditTeamName
