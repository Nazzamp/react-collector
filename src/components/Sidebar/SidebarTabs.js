import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const tabData = ["Cards", "Buttons"];

function SidebarTab(props) {
  return (
    <React.Fragment>
      <Tab to={"/" + props.title.toLowerCase()}>{props.title}</Tab>
    </React.Fragment>
  );
}

function SidebarTabs() {
  return (
    <Container>
      {tabData.map((title, idx) => (
        <SidebarTab key={idx} title={title} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Tab = styled(NavLink)`
  color: #ffffff;
  background: gray;
  margin-bottom: 12px;
  padding: 12px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export default SidebarTabs;
