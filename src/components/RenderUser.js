import { Component } from "react"

console.log("RenderUser")
// const API = "https://zenquotes.io/api/today"
// debugger

export default class RenderUser extends Component{


// const RenderUser = ({ tran, username }) => {
    // const { image } = tran

    state= {
        quote: '“The capacity to learn is a gift; The ability to learn is a skill; The willingness to learn is a choice.” —— Brian Herbert'
      }
          //!!!!!!!!!!GET THIS TO WORK!!!!!!!!!!!!
    
        //   componentDidMount = async () => {
        //     const res = await fetch(API)
        //     const quote = await res.json()
        //     this.setState({quote})
        //   }
    
  render(){
    return (
        <div>
        {this.props.username === this.props.user.username  ? //&& this.state.quote !== 'none'
        <div className="RenderUser" >
            <div  className="welcomePic" >
                <img src={this.props.user.image} className="brain" alt="..." />
            </div>
            <div className={'quoteForWelcome'}>
                {this.state.quote}
            </div>

        </div> 
        : null}
       
        </div>
    )
  }

}
