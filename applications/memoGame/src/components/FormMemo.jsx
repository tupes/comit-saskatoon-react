import React, { useState } from "react";

export default function FormMemo(props) {
    const [playerName, setPlayerName] = useState("");

    const handlePlayerNameChange = (event) => {
        setPlayerName(event.target.value);//every keystroke to update the React Form state
        if (playerName === "") {
            //to setCustomValidity message of <input ... required> 
            document.getElementById("input_name").setCustomValidity("You have to enter a name to start Memo Game");
        } else {
            document.getElementById("input_name").setCustomValidity("");
        }
    }

    return (
        <div className="login-form">
            <form>
                <input id="input_name" type="text" required
                       value={playerName}
                        onChange={handlePlayerNameChange}
                        placeholder="Your name hear ..."
                        title="Click and type your name less than 20 characters"
                        maxLength="20"
                />
                <button className="start-button" type="submit"
                    onClick={(event) => props.handleButtonClick(event, playerName)}>
                    Start game
                </button>
            </form>
        </div>
    )
}
