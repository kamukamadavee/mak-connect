import { Link } from "react-router-dom"
import Home from "./Home"
import Profile from "./Profile"

const Nav = () =>{

    return(
        <nav>
            <ul className="links">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link to='/create'>Create</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
            <div className="togglebtn">
                <i className="bx bx-menu"></i>

            </div>
            <ul className="dropdown_menu">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link to='/create'>Create</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </nav>
    )
}

export default Nav