import React, { useState } from "react";
import '../css/level.css';

export default function LevelMemo() {
    const [selectedLevel, setSelectedLevel] = useState(16);

    const handleLevelChange = (event) => {
        let level = parseInt(event.target.value);
        setSelectedLevel(level);//every Change on Input Radio update the React state
        window.$cardsTotal = level;
    }

    return (
        <div className="div-level">
                <input  id="hard_level" className="toggle-left"
                        type="radio" name="level" value="52" 
                        onChange={handleLevelChange}  
                        checked ={selectedLevel === 52}
                />
                <label htmlFor="hard_level" className="label-button">Hard</label>

                <input  id="easy_level" className="toggle-right"
                        type="radio" name="level" value="16" 
                        onChange={handleLevelChange}  
                        checked ={selectedLevel === 16}
                />
                <label htmlFor="easy_level" className="label-button">Easy</label>
        </div>
    )
} 