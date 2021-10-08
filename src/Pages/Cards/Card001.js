import React from "react";
import styled from "styled-components";

function Card001() {
  return (
    <React.Fragment>
      <Container>
        <Image
          src="https://images.unsplash.com/photo-1633629023348-666e76d9dd13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2073&q=80"
          alt="cover"
        />
        <div>
          <h5></h5>
          <h6></h6>
          <button>Read more</button>
        </div>
      </Container>
    </React.Fragment>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

export default Card001;
