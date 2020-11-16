export function scoreToClock (count){
    //count in (second) convert to minutes:seconds format  
    let minutes = parseInt(count / 60, 10);//to integer in Decimal
    let seconds = parseInt(count % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;//add "0" before (0..9) 
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return minutes + ":" + seconds;
}

export function updateTopScores (playerName,playerScore,playerClicks,topScores){
    let last = topScores.length-1;
    //Comparing playerScore and playerClicks with the last player in the topScores
    if  (playerScore < topScores[last].score || 
        (playerScore === topScores[last].score && playerClicks < topScores[last].clicks))
    {
        let foundPlayerIndex = topScores.findIndex(element => element.name === playerName);
        if (foundPlayerIndex===-1){
            //New player will add to TopScores and replace the last player in TopScores
            topScores.splice(last,1,{name:playerName, score:playerScore, clicks:playerClicks});
        }else{
            //Player is already in TopScores --> replace score and clicks only if they are better
            if  (playerScore < topScores[foundPlayerIndex].score ||
                (playerScore === topScores[foundPlayerIndex].score && playerClicks < topScores[foundPlayerIndex].clicks))
            {
                //Update score of the player in topScores
                topScores.splice(foundPlayerIndex,1,{name:playerName, score:playerScore, clicks:playerClicks});
            }
        }
        //Re-sort topScores after relapcing 
        //sort by score first, then by clicks
        topScores.sort(function(a, b) {
            if (a.score < b.score) {
                return -1;//a with lower ID than b
            }else{
                if (a.score === b.score && a.clicks < b.clicks){
                    return -1;//a with lower ID than b
                }else
                    {
                        return 1;//a with lower ID than b
                    }
            }
        });
    }    
}