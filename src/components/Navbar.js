// import { Route } from 'react-router-dom'

const Navbar = (props) => {

    // const [signout, updateSignout] = useState()

    const Signout = () => {
        window.location.reload(true)
    }

    return (
        <nav>
            <div className="Navbar">
                {/* <h4 onClick={changeToHome} className="navbar-brand">Hogwartsr</h4> */}
                <h4 onClick={props.changeToHome}>My Brain</h4>
                
                <h4 onClick={props.changeToTheWorldsThoughts}>Worldly Wrinkles</h4>
                
                {/* <h4 >Sign out</h4> */}
                {/* <h4 onClick={props.handleLogout}>Sign out</h4> */}
                {/* <Route render({history}) onClick={window.history.push('/')}>Sign out</h4> */}
                {/* <Route render={({ history}) => ( */}
                    {/* // <h4 onClick={() => history.push('/')}>Logout </h4>)}> */}
                    {/* )}> */}
                {/* </Route> */}
                    <h4 onClick={Signout}>Logout </h4>
            </div>
        </nav>
    )
}

export default Navbar

/* <Navbar handleLogout={this.props.handleLogout}/>

 this.state.view === "Home" ? <Home changeToSearch={this.changeToSearch} /> : null } 
 this.state.view === "Search Container" ? <SearchContainer />: null} 
  
 
  this.props.loggedInStatus ? 
  <Link to='/logout' onClick={handleClick}>Log Out</Link> : 
  null
} */