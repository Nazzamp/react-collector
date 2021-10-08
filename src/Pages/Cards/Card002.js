import React from "react";
import styled from "styled-components";

function Card002(props) {
  return (
    <React.Fragment>
      <Container image={props.image}>
        <CardContent>
          <CardTitle>{props.title}</CardTitle>
          <CardDesc>{props.desc}</CardDesc>
          <CardLink>{props.link}</CardLink>
        </CardContent>
      </Container>
    </React.Fragment>
  );
}

const Container = styled.div`
  background: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 300px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 32px;
`;

const CardContent = styled.div`
  padding: 16px;
  background: rgba(18, 18, 18, 0.8);
  backdrop-filter: blur(8px);
`;

const CardTitle = styled.h5`
  font-size: 20px;
  color: #fff;
`;

const CardDesc = styled.p`
  margin-top: 8px;
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #ccc;
`;

const CardLink = styled.a`
  display: block;
  font-size: 16px;
  color: #87b5ff;
  margin-top: 12px;
  width: 100%;
`;

export default Card002;
