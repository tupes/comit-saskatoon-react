import React from 'react'
import NavItems from "./NavItems";

export default function Nav(props) {
    const {navitems,currentPage}=props;
    return (
        <nav>
          {/* <NavItems navitems={props.navitems}/> */}
          <ul>
            {navitems.map((item) => (
              <li key={item.name}>
              <span aria-hidden="true" role="img">
                    {((currentPage=== "signup" || currentPage==="login" )&&item.icon==='➕')?'':item.icon}
                  </span>
                <button onClick={() => props.handleNavItemClick(item.name)}>{((currentPage=== "signup" || currentPage==="login" ) && item.name==='New')?'':item.name}</button>
              </li>          
            )
            )} 
          </ul>
        </nav>
    )
}
