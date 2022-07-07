import { TypeTag } from "../typeTag";


export function PokemonTag ({ name, img, types, id }) {
    return (
        <div>
            <p>{name}</p>
            <img src={img} alt={name}/>
            <ul>
            {types && types.map(t => {
                return(
                    <TypeTag 
                        key={`${id}.${t.slot}`}
                        slot={`${id}.${t.slot}`}
                        name={t.type.name} 
                    />
                );
            })}
            </ul>
        </div>
    )
}