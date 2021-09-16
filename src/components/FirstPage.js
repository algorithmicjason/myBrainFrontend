import { Component } from "react";
import {Link} from 'react-router-dom'



export default class FirstPage extends Component{

    state= {
        link: 'none'
    }
    render(){
        return (
            <div className={'firstpage'}>
                <div className={'firstpageDiv'}>
                <button className={"loginButton"}><Link to='/login' style={{ textDecoration: 'none' }} >LOG INTO BRAIN</Link></button>
                {/* <Link to='/login' style={{ textDecoration: 'none' }} >LOG INTO BRAIN</Link> */}
                {/* <Login component={Link} to={'/login'} >LOG INTO BRAIN</Login> */}
                <button className={"signupButton"}><Link to='/signUp' style={{ textDecoration: 'none' }}>ACTIVATE BRAIN</Link></button>
                </div>
                <img src={'https://clipart.world/wp-content/uploads/2020/09/cartoon-strong-brain-clipart.png'} alt={"strong brain"} className={'imgFirst'} />
            </div>
        )
    }
}
