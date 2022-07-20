import { useRef } from 'react';
import { useHistory } from 'react-router-dom';

import './search.css'

export default function Search(){
    
    const searchInputRef = useRef();
    const history = useHistory();
    
    const handleSubmit = e => {
        e.preventDefault()

        const query = {
            name: searchInputRef.current.value
          }
          const queryString = new URLSearchParams(query).toString();
      
          history.push({ pathname: '/pokemon', search: queryString})

          document.getElementById("nameSearch").value = '';
    }
    
    return (
            <form id="searchBox" onSubmit={handleSubmit}>
            <input id="nameSearch" type="text" placeholder="pokemon" ref={searchInputRef}/>
                <input className="navButton" type="submit" value="Search"/>
            </form>
    );
}