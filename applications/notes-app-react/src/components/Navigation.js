import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AccountContext } from "../contexts/AccountProvider";

const Nav = styled.nav`
  padding: 1em;
  background: #f5f4f0;

  @media (max-width: 700px) {
    padding-top: 64px;
  }
  @media (min-width: 700px) {
    position: fixed;
    width: 220px;
    height: calc(100% - 64px);
    overflow-y: scroll;
  }
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 2;
  /* We can nest styles in styled-components */
  /* The following styles will apply to links within the NavList component */
  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1em;
    color: #333;
  }

  a:visited {
    color: #333;
  }

  a:hover,
  a:focus {
    color: #0077cc;
  }
`;

export default function Navigation() {
  const { user } = useContext(AccountContext);

  return (
    <Nav>
      <NavList>
        <li>Home</li>
        {user && (
          <>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/new">Create Note</Link>
            </li>
            <li>Notes</li>
          </>
        )}
      </NavList>
    </Nav>
  );
}
