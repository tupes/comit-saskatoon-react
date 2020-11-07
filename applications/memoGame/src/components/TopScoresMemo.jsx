
import React, { useState } from 'react'
import { writeToDatabase } from '../accessFirebase';
import { scoreToClock } from '../js/score';

function updateTopScoresOnFirebase() {
   if (!window.$isTimerStart && window.$isGameFinish){
        let i = 1;
        window.$topScores.forEach(userInfor => {  
            writeToDatabase(i,userInfor,window.$fbDatabase);
            i++;
        }) 
   }
}

export default function TopScoresMemo() {
    const [isUpdated, setIsUpdated] = useState(false);
        
    //Assign this function to call it from eventsProcess.js
    window.$forceUpdateTopScores = () => {
        setIsUpdated(!isUpdated)
    }

    return(
        <div className="divTopScores">
            <h4>Top scores</h4>
            {window.$topScores.map((element) => (
                <div className="divUserTopScore">
                    <p className="topname">{element.name}</p>
                    <p className="topscore">{scoreToClock(element.score)}</p>
                </div> 
            ))} 
            <button className="updateFirebaseButton" onClick={updateTopScoresOnFirebase} type="button">Update to Firebase</button>
        </div> 
    )
} 

