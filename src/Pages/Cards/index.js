import React from "react";
import styled from "styled-components";
import Card001 from "./Card001";
import Card002 from "./Card002";
import Card003 from "./Card003";
import data from "./data";

function Cards() {
  return (
    <Container>
      <Title>Simple Card</Title>
      <List>
        <Card001
          image={data[1].image}
          title={data[1].title}
          desc={data[1].desc}
          button={data[1].button}
        />
        <Card002
          image={data[2].image}
          title={data[2].title}
          desc={data[2].desc}
          link={data[2].link}
        />
        <Card003
          image={data[3].image}
          title={data[3].title}
          desc={data[3].desc}
          link={data[3].link}
        />
      </List>
    </Container>
  );
}

const Container = styled.div`
  margin: 16px 32px;
`;

const List = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Title = styled.h4`
  font-size: 32px;
  margin-bottom: 32px;
`;

export default Cards;
