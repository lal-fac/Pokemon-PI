import { useHistory } from "react-router-dom";
import './landing.css';

export default function Landing(){
    
    const history = useHistory();

    
    function handleStart(e) {
        e.preventDefault();

        history.push('/pokemon');
    }

    return(
        <div id="landing1">
            <div id="landing2">
                <button id="start" onClick={handleStart} onKeyDown={handleStart} />
            </div>
        </div>
    )
}