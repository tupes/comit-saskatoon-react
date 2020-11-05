export function writeToDatabase (position,newUserScore,fbDatabase){
    let name = newUserScore.name;
    let score = newUserScore.score;
    //Using set() overwrites data at the specified location, including any child nodes.
    fbDatabase.ref('topscores/' + position).set({name, score});
}

export function readFromDatabase (fromID, toID, topScores, fbDatabase){
    for (let i = fromID;i <= toID; i++){
        fbDatabase.ref('/topscores/' + i).once('value').then(function(snapshot) 
            {
                let name = (snapshot.val() && snapshot.val().name) || "null";
                let score = (snapshot.val() && snapshot.val().score) || null;
                topScores.push({name, score});
            });
    }
    
}