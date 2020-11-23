import React from "react";
import styled from "styled-components";

const HeaderBar = styled.header`
  grid-area: header;

  padding: var(--med-size);
  border-bottom: var(--tiny-size) solid var(--white);
`;

const AppName = styled.h1`
  display: inline;
`;

export default function Header() {
  return (
    <HeaderBar>
      <AppName>Notedly</AppName>
    </HeaderBar>
  );
}
