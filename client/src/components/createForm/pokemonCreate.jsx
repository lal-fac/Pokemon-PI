import { useState } from 'react';

function validate(input){
}


export default function PokemonCreate () {
    
    const [input, setInput] = useState({
        name: '',
        hp: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        height: 0,
        weight: 0
    });
    
    const [errors, setErrors] = useState({});
    
    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        console.log(e.target.value);
    }

    return (
        <form>
            <div name="basicInfo">
                <label htmlFor='name'>name:</label>
                <input type="text" name="name" onChange={handleChange}></input>
            </div>
        </form>
    )
}