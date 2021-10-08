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
  background-image: linear-gradient(270deg, #2e2085 0%, #5d50b3 100%),
    linear-gradient(270deg, #5d50b3 0%, #ffffff 100%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  border-image-slice: 1;
  border: double 1px transparent;
  margin-bottom: 12px;
  padding: 12px;
  border-radius: 4px;
  text-decoration: none;
  transition: background-image 0.2s ease-in;
  -webkit-transition: background-image 0.2s ease-in-out;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    background-image: linear-gradient(270deg, #5d50b3 0%, #5d50b3 100%),
      linear-gradient(270deg, #ffffff 0%, #ffffff 100%);
  }
`;

export default SidebarTabs;
