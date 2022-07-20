import './filtering.css';

export default function Filtering({ setFilterType, setFilterCreated, types }){
    
    const handleSubmit = e => {
        e.preventDefault()

        const typeFilter = document.getElementById("typesFilter").value;
        setFilterType(typeFilter);

        const createdFilter = document.getElementById("createdFilter").value;
        setFilterCreated(createdFilter); 

    }
    
    
    return (
        <form id="filtering" onSubmit={handleSubmit}>

            <label htmlFor="types">type:</label>
            <select id="typesFilter" name="types">
                <option value={null}></option>
                {types && types.map(t => {
                    return (
                        <option key={t.name} value={t.name}>{t.name}</option>
                    )
                })}
            </select>

            <label htmlFor="created">source:</label>
            <select id="createdFilter" name="created">
                <option value={null}></option>
                <option value={false}>Original</option>
                <option value={true}>Created</option>
            </select>

            <input className="navButton" id="filterButton" type="submit" value="Filter pokemon"/>
        </form>
    );
}