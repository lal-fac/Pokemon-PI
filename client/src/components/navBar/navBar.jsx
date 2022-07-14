import { NavLink } from "react-router-dom";
import Search from "../search/search";

export default function NavBar() {
    
    return (
        <div>
            <NavLink to='/pokemon'>Home</NavLink>
            <NavLink to='/create'>Create</NavLink>
            <Search />
        </div>
    );
}