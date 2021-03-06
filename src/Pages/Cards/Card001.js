import React from "react";
import styled from "styled-components";

function Card001(props) {
  return (
    <React.Fragment>
      <Container>
        <CardImage src={props.image} alt="cover" />
        <CardContent>
          <CardTitle>{props.title}</CardTitle>
          <CardDesc>{props.desc}</CardDesc>
          <CardButton>{props.button}</CardButton>
        </CardContent>
      </Container>
    </React.Fragment>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 32px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h5`
  font-size: 20px;
`;

const CardDesc = styled.p`
  margin-top: 8px;
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardButton = styled.button`
  padding: 12px;
  font-size: 16px;
  background-color: #333333;
  color: #fff;
  border: none;
  border-radius: 4px;
  margin-top: 16px;
  width: 100%;
`;

export default Card001;
