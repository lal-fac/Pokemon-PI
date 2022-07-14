import { useHistory } from "react-router-dom";

export default function Order() {

    return(
        <form onSubmit={e => e.preventDefault()}>            
                <input type="radio" name="orderCriteria" value="id"/>
                <label htmlFor="id">ID</label>
                <input type="radio" name="orderCriteria" value="attack" />
                <label htmlFor="attack">attack</label>
                <button value='ASC' type='submit'>↑</button>
        </form>
    )
};