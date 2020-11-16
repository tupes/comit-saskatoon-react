import { soundGame } from '../js/sound';


export default function HeaderMemo(props) {
    const onSignOutClick = () => {
        soundGame("Sign out");
        setTimeout(function () { window.location.reload(false) }, 1200);
    }
    return (
        <header className="main-header">
            <img src={props.logo} className="main-header_logo" alt="logo" />
            <h1>Memo Game</h1>
            <p className="guide-text">Click any card to start!. Try your best to memorize the positions of these pair on the deck - likes this pair </p>
            <img className="guide-image" src="../images/pairofcard.png" alt="pairofcard" />
            <div className="div-name-signout">
                <p>{props.playerName}</p>
                <button type="button" onClick={onSignOutClick}>Sign Out</button>
            </div>
        </header>

    )
}


