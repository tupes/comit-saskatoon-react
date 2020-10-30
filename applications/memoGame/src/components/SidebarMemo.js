
function SidebarMemo({func}) {
    return(
        <div className="divSidebar">
           <div>
               <p>Your time:</p>
                <span id="clockGame">0:00</span>
           </div> 
           <div><button id="buttonShuffleCards" onClick={func} type="button">Restart Game</button></div> 
           <div><p>Top scores</p>
                <span className="topscore">3:15</span><br/>
                <span className="topscore">4:20</span><br/>
                <span className="topscore">4:35</span><br/>
            </div> 
        </div>
    )
    
} 

export default SidebarMemo;
