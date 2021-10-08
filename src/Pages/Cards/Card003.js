import React from "react";
import styled from "styled-components";
import { ReactComponent as CallIcon } from "./Icons/call.svg";
import { ReactComponent as ArrowIcon } from "./Icons/arrow.svg";

function Card002(props) {
  return (
    <React.Fragment>
      <Container image={props.image}>
        <StickTop>
          <CallIcon style={{ width: "32px", height: "32px" }} />
          <StickTopRight>
            <ArrowIcon
              style={{
                width: "24px",
                height: "24px",
                transform: "rotate(180deg",
              }}
            />
            <Avatar src={props.image} />
            <ArrowIcon
              style={{
                width: "24px",
                height: "24px",
              }}
            />
          </StickTopRight>
        </StickTop>
        <StickBottom>
          <CallIcon style={{ width: "32px", height: "32px" }} />
        </StickBottom>
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
  justify-content: space-between;
  height: 250px;
  width: 400px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
`;

const StickTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StickBottom = styled.div`
  width: 100%;
`;

const StickTopRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Avatar = styled.div`
  background: ${(props) => `url(${props.src})`};
  width: 32px;
  height: 32px;
  border: 2px solid #fff;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
`;

export default Card002;
