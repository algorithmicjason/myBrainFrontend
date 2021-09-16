const Navbar = (props) => {
    return (
        <nav>
            <div className="Navbar">
                {/* <h4 onClick={changeToHome} className="navbar-brand">Hogwartsr</h4> */}
                <h4 onClick={props.changeToHome}>My Brain</h4>
                
                <h4 onClick={props.changeToTheWorldsThoughts}>Worldly Wrinkles</h4>
                
                {/* <h4 >Sign out</h4> */}
                <h4 onClick={props.handleLogout}>Sign out</h4>
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