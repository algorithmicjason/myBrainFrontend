import { Component } from "react";


export default class SingleWrinklePage extends Component {

    render(){
        
        return(
            <div>

                {this.props.onlyMyFolders.map(folder => folder.thoughts.map(wrinkle => wrinkle.id === +this.props.wrinkleNumber ? 
                    <div className={"SingleWrinklePage"}>
                        <button className={"close"} onClick={console.log('trying to close this')}>X</button>
                        <h1 className={"SingleWrinklePageTitle"}>{wrinkle.title}</h1>
                        <p className={"SingleWrinklePageDescription"}><b>Wrinkle:</b> {wrinkle.description}</p>
                        <p className={"SingleWrinklePageCreatedAt"}><b>Created At:</b> {wrinkle.created_at.slice(0, 10)}</p>
                    </div>
                     : null ))}
            </div>
        )
    }
}