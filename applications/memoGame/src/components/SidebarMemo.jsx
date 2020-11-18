import '../css/sidebar.css';
import ClockMemo from "../components/ClockMemo.jsx"
import TopScoresMemo from "../components/TopScoresMemo.jsx"

export default function SidebarMemo(props) {
    return(
        <div className="div-sidebar">
           <ClockMemo /> 
            <button id="button-restart" onClick={props.function} type="button">Restart Game</button>
            <TopScoresMemo />
        </div>
    ) 
} 

