import ClockMemo from "../components/ClockMemo.jsx"
import TopScoreMemo from "../components/TopScoreMemo.jsx"

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
