import ClockMemo from "../components/ClockMemo.jsx"
import TopScoresMemo from "../components/TopScoresMemo.jsx"

function SidebarMemo({func}) {
    return(
        <div className="divSidebar">
           <ClockMemo /> 
           <div>
               <button id="buttonRestartGame" onClick={func} type="button">Restart Game</button>
            </div> 
            <TopScoresMemo />
        </div>
    )
    
} 

export default SidebarMemo;
