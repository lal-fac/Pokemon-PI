import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import TypeTag from '../typeTag/typeTag';

function validate(input){
    let errors= {};
    if (input.name && (!/^[^A-Z]/g.test(input.name))) {
        errors.name = 'use lower case. It\'s a species, not a name!';
    } else if (input.name && (!/^([^0-9]*)$/g.test(input.name))) {
        errors.name = 'name can\'t contain numbers';
    } 
    
    else if (input.hp && (parseInt(input.hp) > 100 || parseInt(input.hp) < 1)) {
        errors.hp = 'health points exist between 1 and 100';
    } else if (input.hp && (!/^([0-9]*)$/g.test(input.hp))) {
        errors.hp = 'health points are numbers'
    } 
    
    else if (input.attack && (parseInt(input.attack) > 100 || parseInt(input.attack) < 1)) {
        errors.attack = 'attack exists between 1 and 100';
    } else if (input.attack && (!/^([0-9]*)$/g.test(input.attack))) {
        errors.attack = 'attack is a number'
    }

    else if (input.defense && (parseInt(input.defense) > 100 || parseInt(input.defense) < 1)) {
        errors.defense = 'defense exists between 1 and 100';
    } else if (!/^([0-9]*)$/g.test(input.defense)) {
        errors.defense = 'defense is a number'
    }

    else if (input.specialAttack && (parseInt(input.specialAttack) > 100 || parseInt(input.specialAttack) < 1)) {
        errors.specialAttack = 'special attack exists between 1 and 100';
    } else if (input.specialAttack && (!/^([0-9]*)$/g.test(input.specialAttack))) {
        errors.specialAttack = 'special attack is a number'
    }

    else if (input.specialDefense && (parseInt(input.specialDefense) > 100 || parseInt(input.specialDefense) < 1)) {
        errors.specialDefense = 'special defense exists between 1 and 100';
    } else if (!/^([0-9]*)$/g.test(input.specialDefense)) {
        errors.specialDefense = 'special defense is a number'
    }

    else if (input.speed && (parseInt(input.speed) > 100 || parseInt(input.speed) < 1)) {
        errors.speed = 'speed exists between 1 and 100';
    } else if (input.speed && (!/^([0-9]*)$/g.test(input.speed))) {
        errors.speed = 'speed is a number'
    }

    else if (input.heighy && (parseInt(input.height) > 65 || parseInt(input.height) < 1)) {
        errors.height = 'height exists between 1 and 65';
    } else if (input.height && (!/^([0-9]*)$/g.test(input.height))) {
        errors.height = 'height is a number'
    }

    else if (input.weight && (parseInt(input.weight) > 1000 || parseInt(input.weight) < 1)) {
        errors.weight = 'weight exists between 1 and 1000';
    } else if (input.weight && (!/^([0-9]*)$/g.test(input.weight))) {
        errors.weight = 'weight is a number'
    }

    return errors;
}

export default function PokemonCreate () {

    let lastId = useSelector(state => state.lastId);
    const types = useSelector(state => state.types);
    
    const [input, setInput] = useState({
        id: parseInt(lastId),
        name: '',
        hp: 0,
        attack: 0,
        defense: 0,
        specialAttack: 0,
        specialDefense: 0,
        speed: 0,
        height: 0,
        weight: 0
    });

    const [typeState, setTypeState] = useState([]);
    
    const [errors, setErrors] = useState({});


    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.name === 'name' ? e.target.value : parseInt(e.target.value)
        });
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
          }));

        let submit = document.getElementById("submit");
        (!input.name || !input.hp || !input.specialAttack || !input.specialDefense|| !input.attack || !input.defense || !input.speed || !input.height || !input.weight) ? submit.disabled = true : submit.disabled = false
    }

    function handleSubmit(e){
        e.preventDefault();
        let pokemon = {
            name: input.name,
            id: input.id,
            bigImg: undefined,
            img: undefined,
            pokemonTypes: [typeState[0], typeState[1]],
            hp: input.hp,
            attack: input.attack,
            defense: input.defense,
            specialAttack: input.specialAttack,
            specialDefense: input.specialDefense,
            speed: input.speed,
            height: input.height,
            weight: input.weight
        }

        axios.post(`http://localhost:3001/pokemon`, pokemon);
    }

    function addType(e){
        e.preventDefault();

        let chosenType = () => e.target.outerText

        setTypeState(prevState => [...prevState, chosenType()]);

        if(typeState.length >= 1){
            let typeButtons = types.map(t => document.getElementById(`${t.name}`));
            typeButtons.forEach(b => b.disabled = true);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div name="basicInfo">
                    <h5>ID: {lastId}</h5>
                    <label htmlFor='name'>name:</label>
                    <input type="text" name="name" onChange={handleChange} />
                    {errors.name && <p>{errors.name}</p>}
                    <br/>
                    <label htmlFor='img'>species image:</label>
                    <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
                </div>
                <div>
                    <p>Choose two types: </p>
                    {types 
                    && types.map(t => {
                        return(
                            <button onClick={addType} key={t.id} id={t.name}>
                                <TypeTag name={t.name} />
                            </button>
                        )
                    })}
                </div>
                <div name="stats">
                    <p>Stats:</p>
                    <br/>
                    <label htmlFor='hp'>health points:</label>
                    <input type="text" name="hp" onChange={handleChange} />
                    {errors.hp && <p>{errors.hp}</p>}
                    <br/>
                    <label htmlFor='attack'>attack:</label>
                    <input type="text" name="attack" onChange={handleChange} />
                    {errors.attack && <p>{errors.attack}</p>}
                    <br/>
                    <label htmlFor='defense'>defense:</label>
                    <input type="text" name="defense" onChange={handleChange} />
                    {errors.defense && <p>{errors.defense}</p>}
                    <br/>
                    <label htmlFor='specialAttack'>special-attack:</label>
                    <input type="text" name="specialAttack" onChange={handleChange} />
                    {errors.specialAttack && <p>{errors.specialAttack}</p>}
                    <br/>
                    <label htmlFor='specialDefense'>special-defense:</label>
                    <input type="text" name="specialDefense" onChange={handleChange} />
                    {errors.specialDefense && <p>{errors.specialDefense}</p>}
                    <br/>
                    <label htmlFor='speed'>speed:</label>
                    <input type="text" name="speed" onChange={handleChange} />
                    {errors.speed && <p>{errors.speed}</p>}
                    <br/>
                    <label htmlFor='height'>height:</label>
                    <input type="text" name="height" onChange={handleChange} />
                    {errors.height && <p>{errors.height}</p>}
                    <br/>
                    <label htmlFor='weight'>weight:</label>
                    <input type="text" name="weight" onChange={handleChange} />
                    {errors.weight && <p>{errors.weight}</p>}
                    <br/>
                </div>
                <input type="submit" id="submit" value="Catch pokemon!" disabled/>
            </form>
        </div>
    )
}

// let pokemon = {
//     name: input.name,
//     id: input.id,
//     bigImg: undefined,
//     img: undefined,
//     types: [typeState[0], typeState[1]],
//     stats: [
//         {base_stat: input.hp, 
//         stat:
//             {name: "hp"}
//         },
//         {base_stat: input.attack, 
//         stat:
//             {name: "attack"}
//         },
//         {base_stat: input.defense, 
//         stat:
//             {name: "defense"}
//         },
//         {base_stat: input.specialAttack, 
//         stat:
//             {name: "special-attack"}
//         },
//         {base_stat: input.specialDefense, 
//         stat:
//             {name: "special-defense"}
//         },
//         {base_stat: input.speed, 
//         stat:
//             {name: "speed"}
//         }
//     ],
//     height: input.height,
//     weight: input.weight
// }