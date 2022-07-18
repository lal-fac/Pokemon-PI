import { NavLink } from "react-router-dom";
import Search from "../search/search";

export default function NavBar() {
    
    return (
        <div>
            <NavLink to='/pokemon'>Home</NavLink>
            <NavLink to='/catch'>Catch a pokemon!</NavLink>
            <Search />
        </div>
    );
}