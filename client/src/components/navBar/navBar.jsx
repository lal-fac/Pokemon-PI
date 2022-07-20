import { NavLink } from "react-router-dom";
import Search from "../search/search";

import './navBar.css'

export default function NavBar() {
    
    return (
        <div id="navBar">
            <div id="navLinkDiv">
                <NavLink className="navLinks" to='/pokemon'>Home</NavLink>
                <NavLink className="navLinks" to='/catch'>Catch a pokemon!</NavLink>
            </div>
            <Search />
        </div>
    );
}