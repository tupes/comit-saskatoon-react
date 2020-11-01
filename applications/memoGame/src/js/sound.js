export function soundGame(eventname) {
    const scr = [
        { 
            eventname:"Shuffle cards",
            soundscr:"../sounds/shufflecards.mp3"
        },
        {   
            eventname:"Flip a card",
            soundscr:"../sounds/flipcard.mp3"
        },
        {   
            eventname:"Correct card",
            soundscr:"../sounds/correctcard.mp3"
        },
        {   
            eventname:"Wrong card",
            soundscr:"../sounds/wrongcard.mp3"
        },
        {   
            eventname:"Well done",
            soundscr:"../sounds/welldone.mp3"
        },
        {   
            eventname:"Game over",
            soundscr:"../sounds/gameover.mp3"
        },
        {   
            eventname:"On top score",
            soundscr:"../sounds/topscore.mp3"
        },
        {   
            eventname:"Sign out",
            soundscr:"../sounds/signout.mp3"
        },
    ]
    let obj = scr.find(element => element.eventname===eventname);
    if (obj){
        let s = document.createElement("audio");
        s.src = obj.soundscr;
        s.setAttribute("preload", "auto");
        s.setAttribute("controls", "none");
        s.style.display = "none";
        document.body.appendChild(s);
        s.play();
    }    
}
