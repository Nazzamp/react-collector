import React, { useState } from "react";
import styled, { css } from "styled-components";
import SidebarTabs from "./SidebarTabs";
import NavIcon from "./Icon/NavIcon";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <React.Fragment>
      <Container isOpen={isOpen}>
        <NavIcon setOpen={setIsOpen} />
        <SidebarTabs />
      </Container>
    </React.Fragment>
  );
}

const Container = styled.div`
  background: #161c2a;
  height: 100vh;
  width: 200px;
  padding: 16px;
  max-width: 240px;
  transition: all 0.3s cubic-bezier(0.85, 0, 0.15, 1);

  ${(props) =>
    props.isOpen &&
    css`
      width: 100%;
    `}
`;

export default Sidebar;
