
import React, { useState } from 'react'
import { writeToDatabase } from '../js/accessFirebase';
import { scoreToClock } from '../js/score';



export default function TopScoresMemo() {
    const [isUpdated, setIsUpdated] = useState(false);
    
    const updateTopScoresOnFirebase = async (topScoresArray) => {
        if (!window.$isTimerStart && window.$isGameFinish){
             let i = 1;
             await topScoresArray.forEach(userInfor => {  
                 window.$cardsTotal ===16 ? writeToDatabase(i,userInfor,'/topscoreseasy/',window.$fbDatabase)
                                          : writeToDatabase(i,userInfor,'/topscores/',window.$fbDatabase);
                 i++;
             }) 
        }
        window.$isTopScoresChanged = false;
        setIsUpdated(!isUpdated);
    }

    //Assign this function to call it from eventsProcess.js
    window.$forceUpdateTopScores = () => {
        setIsUpdated(!isUpdated)
    }
    
    let topScoresArray =[];
    window.$cardsTotal === 16 ? topScoresArray = window.$topScoresEasy
                              : topScoresArray = window.$topScores;

    return(
        <div className="div-topscores-container">
            <h4>TOP SCORES</h4>
            {window.$cardsTotal === 16 ? <h5>- Easy Level -</h5>
                                       : <h5>- Hard Level -</h5>
            }
            <div className="div-scroll-topscores">
                {topScoresArray.map((element) => (
                    <div>
                        <p className="top-name">{element.name}</p>
                        <p className="top-score">{scoreToClock(element.score)}~{element.clicks} clicks</p>
                    </div> 
                ))} 
            </div>
            {window.$isTopScoresChanged ? <button id="button_update_firebase" onClick={() => updateTopScoresOnFirebase(topScoresArray)} type="button">Update to Firebase</button>
                                        : <p id="updated_firebase">- Updated from Firebase -</p>
            }
        
        </div> 
    )
} 

