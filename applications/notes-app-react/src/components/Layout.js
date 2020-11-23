import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Nav from "./Nav";

const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;

  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr 3fr;
  grid-template-areas:
    "header header"
    "nav main";
  row-gap: var(--large-size);
  column-gap: var(--large-size);
`;

const Main = styled.main`
  grid-area: main;
`;

export default function Layout(props) {
  return (
    <Container>
      <Header />
      <Nav />
      <Main>{props.children}</Main>
    </Container>
  );
}
