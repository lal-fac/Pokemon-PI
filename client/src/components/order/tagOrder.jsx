export function orderTags(filteredTags, sort){
    if(sort.order === 'asc'){
        filteredTags.sort((a, b) => {
            return a[sort.orderBy] - b[sort.orderBy];
        }) 
    } else {
        filteredTags.sort((a, b) => {
            return b[sort.orderBy] - a[sort.orderBy];
        })
    }
}



export default function Order({ setSort, sort }) {

    const handleChange = e => {
        e.preventDefault();

        setSort({
            ...sort,
            [e.target.name]: e.target.value
        })
    }

    return(
        <form onChange={handleChange}>            
            <select id="orderBy" name="orderBy">
                <option value="id">ID</option>
                <option value="attack">attack</option>
            </select>
            <select id="order" name="order">
                <option value="asc">low to high</option>
                <option value="desc">high to low</option>
            </select>
        </form>
    )
};