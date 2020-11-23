import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavPanel = styled.nav`
  grid-area: nav;

  padding-left: var(--med-size);
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--med-size);
`;

const NavItem = styled.li`
  background-color: var(--primary-button);

  width: 100%;
  min-height: var(--huge-size);
  border-radius: var(--med-border-radius);
  color: var(--white);
`;

export default function Nav() {
  return (
    <NavPanel>
      <NavList>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/notes">My Notes</Link>
        </NavItem>
        <NavItem>
          <Link to="/favorites">Favorites</Link>
        </NavItem>
      </NavList>
    </NavPanel>
  );
}
