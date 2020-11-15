import ClockMemo from "../components/ClockMemo.jsx"
import TopScoresMemo from "../components/TopScoresMemo.jsx"

function SidebarMemo(props) {
    return(
        <div className="divSidebar">
           <ClockMemo /> 
           <div>
               <button id="buttonRestartGame" onClick={props.function} type="button">Restart Game</button>
            </div> 
            <TopScoresMemo />
        </div>
    )
    
} 

export default SidebarMemo;
