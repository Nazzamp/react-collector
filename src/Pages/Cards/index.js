import React from "react";
import styled from "styled-components";
import Card001 from "./Card001";

function Cards() {
  return (
    <Container>
      <Card001 />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default Cards;
