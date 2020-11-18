import '../css/start.css';
import LevelMemo from '../components/LevelMemo.jsx';
import FormMemo  from '../components/FormMemo.jsx';

export default function StartMemo(props) {
    return (
        <div className="start-container">
            <header className="start-header">
                <img className="start-logo" src={props.logo} alt="logo" />
                <h1>Memo Game</h1>
                <p> Le Dung - ComIT 2020 </p>
            </header>
            <div className="login-div">
                <LevelMemo />
                <FormMemo handleButtonClick={props.handleButtonClick}/>
            </div>
        </div>
    )
}