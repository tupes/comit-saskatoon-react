import { useState } from 'react';

import clientsData from '../Clients/clientsData';
import ClientsList from '../Clients/ClientsList';
import lettersData from '../InBox/lettersData';
import NavSideMenu from './../NavSideMenu';
import TableList from './Table';

const Container = () => {

  const [ clients] = useState(clientsData);
  const [ letters, setLetters] = useState(lettersData);

  return (
    <div className="container">
     <NavSideMenu />

      <div className="section">
         <TableList  letters={letters}/>

          <div>
              <p>ID105757</p>
              <p>Mon, 9 Dec 2019</p>
              <div className="from">
                  <input type="text" value="Do not replay..."></input>
                  {/* <!-- <span><label>From</label></span> --> */}
              </div>
              <div className="subject">
                  <input type="text" value="Millitary report"></input>
                  {/* <!-- <span>Subject</span> --> */}
              </div>
              <div>
                  <textarea>fghfghfghfghfghfghfghfghfghfhfghfghfghfghfghfghfghfghfghfghfghfghfghfgh</textarea>
              </div>
          </div>
          <div>
              <button>REPLY</button>
              <button>DELETE</button>
          </div>
      </div>

      <ClientsList  clients={clients}/> 
      {/* <button onClick={() => setClients([])}></button> */}
  
    </div>
  )
}
        


export default Container;