import React, { useState } from "react";
import '../css/level.css';

export default function LevelMemo() {
    const [selectedLevel, setSelectedLevel] = useState(16);

    const handleLevelChange = (event) => {
        let level = parseInt(event.target.value);
        setSelectedLevel(level);//every Change on Input Radio update the React state
        window.$cardsTotal = parseInt(level);
    }

    return (
        <div className="div-level">
                <input  type="radio" name="level" value="52" data-icon='Hard'
                        onChange={handleLevelChange}  
                        checked ={selectedLevel === 52}
                />
                <input  type="radio" name="level" value="16" data-icon='Easy'
                        onChange={handleLevelChange}  
                        checked ={selectedLevel === 16}
                />
        </div>
    )
} 