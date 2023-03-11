import { Link } from "react-router-dom"
import * as userService from "../../utilities/users-service"
import './NavBar.css'

export default function NavBar({user, setUser}) {
    function handleLogOut() {
        // we should delegate the actual loggin out to the users service
        userService.logOut()
        setUser(null)
    }
    return (
        <nav className="Nav">
            <Link to="/home">Home</Link>
            {/* &nbsp; | &nbsp; */}
            <Link to="/income">Income Tracker</Link>
            {/* &nbsp; */}
            <Link to="/expenses">Expense Tracker</Link>
            {/* &nbsp; */}
            <span>Welcome {user && user.username}</span>
            {/* &nbsp;&nbsp; */}
            <Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
}