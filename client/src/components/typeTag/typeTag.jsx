import './typeTag.css';

export default function TypeTag({name}) {
    return (
        <h6 id={name}>
            {name}
        </h6>
    )
};