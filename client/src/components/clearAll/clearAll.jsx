import { useHistory } from "react-router-dom";

export default function ClearAll({ setSort, setFilterCreated, setFilterType, setActivePage }){
    
    const history = useHistory();

    function handleClick(e){
        e.preventDefault();

        setSort({
            order: "asc",
            orderBy: "id"
        })

        setFilterCreated(null);

        setFilterType('');

        setActivePage(1);

        history.push({pathname: '/pokemon'});

        const inputs = ["typesFilter", "createdFilter"];
        inputs.forEach(i => {
            return document.getElementById(i).value = '';
        })
        document.getElementById("order").value = 'asc';
        document.getElementById("orderBy").value = 'id';
    }
    
    return(
        <button className="navButton" onClick={handleClick}>Clear All</button>
    )
};