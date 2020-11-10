import { BiEnvelope } from 'react-icons/bi';
import { MdContactMail } from 'react-icons/md';

const Header = () => {
  return (
    <div className="header_buttons" >       
      <button>
        <BiEnvelope class="iconBtn" >
        </BiEnvelope>
        <span>new massage</span>
      </button>
     
     
      <button>
      <MdContactMail class="iconBtn"></MdContactMail>new contact</button>
    </div>
  );
};

export default Header;
