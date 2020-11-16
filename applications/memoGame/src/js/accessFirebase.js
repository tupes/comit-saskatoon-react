export function writeToDatabase (position,newUserScore, refName, fbDatabase){
    let name = newUserScore.name;
    let score = newUserScore.score;
    let clicks = newUserScore.clicks;
    //Using set() overwrites data at the specified location, including any child nodes.
    fbDatabase.ref(refName + position).set({name, score, clicks});
}

export async function readFromDatabase (fromID, toID, topScores, refName, fbDatabase){
    for (let i = fromID;i <= toID; i++){
        await fbDatabase.ref(refName + i).once('value').then(function(snapshot) 
            {
                let name = (snapshot.val() && snapshot.val().name) || "null";
                let score = (snapshot.val() && snapshot.val().score) || null;
                let clicks = (snapshot.val() && snapshot.val().clicks) || null;
                topScores.push({name, score, clicks});
            });
    }
}