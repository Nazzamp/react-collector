import React from "react";
import styled from "styled-components";
import SidebarTabs from "./SidebarTabs";

function Sidebar() {
  return (
    <React.Fragment>
      <Container>
        <SidebarTabs />
      </Container>
    </React.Fragment>
  );
}

const Container = styled.div`
  background: #1c1957;
  height: 100vh;
  width: 200px;
  position: absolute;
  top: 0;
  left: 0;
  padding: 16px;
`;

export default Sidebar;
