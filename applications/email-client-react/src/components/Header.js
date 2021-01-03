import { BiEnvelope } from 'react-icons/bi';
import { MdContactMail } from 'react-icons/md';

const Header = () => {
  return (
    <div className="header_buttons" >       
      <button>
        <BiEnvelope className="iconBtn" >
        </BiEnvelope>
        <span>new massage</span>
      </button>
     
     
      <button>
      <MdContactMail className="iconBtn"></MdContactMail >new contact</button>
    </div>
  );
};

export default Header;
