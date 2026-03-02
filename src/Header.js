import { Link } from "react-router-dom"
import Home from "./Home"
import Profile from "./Profile"
const Header = ({ search, setSearch }) =>{

    return(
        <header>
            <h1>MUK CONNECT</h1>
            <div className="search-container">
            <form  onSubmit={(e)=>e.preventDefault()}>
                    <label className="search-icon" htmlFor="search-input">🔎</label>
                    <input 
                       className="search-input"
                       id="search-input"
                       type="text"
                       placeholder="search..."
                       value={search}
                       onChange={(e)=>setSearch(e.target.value)}
                />
            </form>
            </div>
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
        </header>
    )
}

export default Header