import { Component } from "react"
import RenderCard from './RenderCard'



export default class RenderAllThoughts extends Component{

    state= {
            publicThoughts: [],
            publicFolder: '',
          }
              
      
              //DO I NEED TO EDIT STATE IN HERE?? MAKE A FUNC

              // checkState = () => {
              //     this.setState({validateRenderCard: true})
              //     // this.state.thoughtsJSON
              // }


    render() {
    return (

        <div>
                {this.props.folder.thoughts.map(thought => thought.public === true ? 
                  <RenderCard folder={this.props.folder} userData={this.props.userData} thought={thought} thoughts={this.props.folder.thoughts}/> : null )}
                
                
                
                
                {/* {this.state.thoughtsJSON === "" ? null : this.state.thoughtsJSON.thoughts.find(thought => thought.public === true ?  this.setState({publicThoughts: [...this.state.publicThoughts, thought]}) : null )} */}
                
                {/* {console.log(this.state.thoughtsJSON)} */}
                {/* {console.log('this.state.publicThoughts')} */}
                
                
                
                {/* {this.state.thoughtsJSON === "" ? null : this.state.thoughtsJSON.thoughts.map(thought => thought.public === true ? this.setState({publicFolder:  <RenderCard folder={this.props.folder} userData={this.props.userData} thought={thought} thoughts={this.state.thoughtsJSON}/> : null )} */}
                
                
                
                
                
                
                {/* {this.state.thoughtsJSON.length <1 ? null : this.state.thoughtsJSON.map(thought => thought.public === true ? this.setState({publicThoughts: [thought, ...this.state.publicThoughts]}) : null )}  */}
                {/* {this.state.thoughtsJSON.map(thought => thought.public === true ? this.setState({publicThoughts: [thought, ...this.state.publicThoughts]}) : null )} 
                {this.state.publicThoughts.length <1 ? null : this.state.publicThoughts.map( thought => <RenderCard folder={this.props.folder} userData={this.props.userData} thought={thought} />)} */}
                
                {/* {this.state.thoughtsJSON === "none" ? null : this.state.thoughtsJSON.thoughts.map(thought => thought.public === true ? <RenderCard folder={this.props.folder} userData={this.props.userData} thought={thought} thoughts={this.state.thoughtsJSON}/> : null )} */}
                {/* {this.state.thoughtsJSON === "" ? null : this.checkState} {//this.state.thoughtsJSON.thoughts.map(thought => thought.public === true ? <RenderCard folder={this.props.folder} userData={this.props.userData} thought={thought} thoughts={this.state.thoughtsJSON}/> : null )} */}
                {/* {this.state.validateRenderCard ? this.state.thoughtsJSON.thoughts.map(thought => thought.public === true ? <RenderCard folder={this.props.folder} userData={this.props.userData} thought={thought} thoughts={this.state.thoughtsJSON}/> : null )} */}
        </div>
    )
  }
}
