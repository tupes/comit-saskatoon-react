import ClockMemo from "../components/ClockMemo.js"
import TopScoreMemo from "../components/TopScoreMemo.js"

function SidebarMemo({func}) {
    return(
        <div className="divSidebar">
           <ClockMemo /> 
           <div>
               <button id="buttonRestartGame" onClick={func} type="button">Restart Game</button>
            </div> 
            <TopScoreMemo />
        </div>
    )
    
} 

export default SidebarMemo;
