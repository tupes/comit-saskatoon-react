import React from 'react'
import NavItems from "./NavItems";
import { Link, useLocation } from "react-router-dom";

export default function Nav(props) {
    const {navitems,currentPage}=props;
    const location=useLocation();
    return (
        <nav>
          {/* <NavItems navitems={props.navitems}/> */}
          <ul>
            {navitems.map((item) => (
              <li key={item.name}>
              <span aria-hidden="true" role="img">
                    {((location.pathname=== "/signup" || location.pathname==="/login" ) && item.icon==='➕')?'':item.icon}
                  </span>
                <button onClick={() => props.handleNavItemClick(item.name)}>{((location.pathname=== "/signup" || location.pathname==="/login" ) && item.name==='New')?'':item.name}</button>
              </li>          
            )
            )} 
          </ul>
        </nav>
    )
}
