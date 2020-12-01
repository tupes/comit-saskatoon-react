import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AccountContext } from "../contexts/AccountProvider";
import { ButtonAsLink } from "./ButtonAsLink";

const HeaderBar = styled.header`
  width: 100%;
  padding: 0.5em 1em;
  display: flex;
  height: 64px;
  position: fixed;
  align-items: center;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  z-index: 1;
  ${(props) =>
    props.backgroundColor &&
    `
    background-color: ${props.backgroundColor};
  `}
`;

const HeaderText = styled.h1`
  margin: 0;
  padding: 0;
  display: inline;
`;

export default function Header(props) {
  const { handleSignOut, user } = useContext(AccountContext);

  return (
    <HeaderBar backgroundColor={props.backgroundColor}>
      <HeaderText>Notes App</HeaderText>
      {user ? (
        <ButtonAsLink onClick={handleSignOut}>Logout</ButtonAsLink>
      ) : (
        <p>
          <Link to={"/login"}>Sign In</Link> or{" "}
          <Link to={"/signup"}>Sign Up</Link>
        </p>
      )}
    </HeaderBar>
  );
}
