export function scoreToClock (count){
    //count in (second) convert to minutes:seconds format  
    let minutes = parseInt(count / 60, 10);//to integer in Decimal
    let seconds = parseInt(count % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;//add "0" before (0..9) 
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return minutes + ":" + seconds;
}

export function updateTopScores (playerName,playerScore,topScores){
    let last = topScores.length-1;
    //Check playerScore is better than the last score in the topScores
    if (playerScore < topScores[last].score){
        let foundPlayerIndex = topScores.findIndex(element => element.name === playerName);
        if (foundPlayerIndex===-1){
            //New player will add to TopScores
            //and replace the last player in TopScores
            topScores.splice(last,1,{name:playerName, score:playerScore});
        }else{
            //Player is already in TopScores --> replace score only if it is better
            if (playerScore < topScores[foundPlayerIndex].score){
                //Update score of the player in topScores
                topScores.splice(foundPlayerIndex,1,{name:playerName, score:playerScore});
            }
        }
        //re-sort topScores after relapcing 
        topScores.sort ((a, b) => a.score - b.score);
    }    

}