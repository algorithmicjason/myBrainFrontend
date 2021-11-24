// import { Component } from "react";
import React, { useState } from "react";


// export default class SingleWrinklePage extends Component {
    
    const SingleWrinklePage = (props) => { 
        const [display, updateDisplay] = useState("SingleWrinklePage")
        const [wrinkleNumber, updateWrinkleNumber] = useState(props.wrinkleNumber)
        // console.log(wrinkleNumber)
    

    // render(){
        const updateDisplayFunc = () => {
            // debugger
            // e.preventDefault

            // updateDisplay("display-none")
            // updateWrinkleNumber("")
            props.handleChangeDropdown()
           
            
            // updateDisplay("SingleWrinklePage")
            //you have to clear the current wrinkle
            //props.wrinkleNumber
        }
        
        return(
            <div >
            {props.onlyMyFolders.map(folder => folder.thoughts.map(wrinkle => wrinkle.id === +wrinkleNumber ? 
                // {props.onlyMyFolders.map(folder => folder.thoughts.map(wrinkle => wrinkle.id === +props.wrinkleNumber ? 
            // <div className={display}>
                    <div className={display}>
                        <button className={"close"} onClick={() => updateDisplayFunc(props)}>X</button>
                        {/* <button className={display} onClick={console.log("trying to figure it out")}>X</button> */}
                        <h1 className={"SingleWrinklePageTitle"}>{wrinkle.title}</h1>
                        <p className={"SingleWrinklePageDescription"}><b>Wrinkle:</b> {wrinkle.description}</p>
                        <p className={"SingleWrinklePageCreatedAt"}><b>Created At:</b> {wrinkle.created_at.slice(0, 10)}</p>
                    </div>
                    //  : updateDisplay("SingleWrinklePage")))}
                     : null))}
            </div>
        )
    } 
    export default SingleWrinklePage
// }
