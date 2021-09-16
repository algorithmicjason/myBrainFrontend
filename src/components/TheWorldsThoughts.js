import React, { Component } from 'react'
import RenderAllThoughts from './RenderAllThoughts'

const URL = "http://localhost:3000/folders"


export default class TheWorldsThoughts extends Component {

    state= {
        trans: []
      }
          //!!!!!!!!!!GET THIS TO WORK!!!!!!!!!!!!
    
          componentDidMount = async () => {
            const res = await fetch(URL)
            const trans = await res.json()
            this.setState({trans})
            
          }

    render() {
        return (
            <div>
                <h1 id={"worldlyWrinkles"}>Worldy Wrinkles</h1>
                {console.log(this.state.trans.folders)}
                {console.log("^ all folders")}
                {/* {this.state.trans === 'nine' ? null : this.state.trans.folders.reverse().map(folder => <RenderAllThoughts userData={this.props.userData} username={this.props.username} folder={folder} key={folder.id} /> )} */}
                {this.state.trans.reverse().map(folder => <RenderAllThoughts userData={this.props.userData} username={this.props.username} folder={folder} key={folder.id} /> )}
            </div>
        )
    }
}
