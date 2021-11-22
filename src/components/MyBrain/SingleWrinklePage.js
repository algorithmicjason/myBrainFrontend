// import { Component } from "react";
import React, { useState } from "react";


// export default class SingleWrinklePage extends Component {
    
    const SingleWrinklePage = (props) => { 
        // debugger
        
        const [display, updateDisplay] = useState("SingleWrinklePage")

    // render(){
        const updateDisplayFunc = () => {
            // debugger
            // e.preventDefault
            updateDisplay("display-none")
        }
        
        return(
            <div>
                

                {props.onlyMyFolders.map(folder => folder.thoughts.map(wrinkle => wrinkle.id === +props.wrinkleNumber ? 
                    <div className={display}>
                        <button className={"close"} onClick={updateDisplayFunc}>X</button>
                        {/* <button className={display} onClick={console.log("trying to figure it out")}>X</button> */}
                        <h1 className={"SingleWrinklePageTitle"}>{wrinkle.title}</h1>
                        <p className={"SingleWrinklePageDescription"}><b>Wrinkle:</b> {wrinkle.description}</p>
                        <p className={"SingleWrinklePageCreatedAt"}><b>Created At:</b> {wrinkle.created_at.slice(0, 10)}</p>
                    </div>
                     : null ))}
            </div>
        )
    } 
    export default SingleWrinklePage
// }
