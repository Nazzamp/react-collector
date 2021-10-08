import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Buttons from "./Pages/Buttons";
import Cards from "./Pages/Cards";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <MainContainer>
          <Switch>
            <Route path="/buttons">
              <Buttons />
            </Route>
            <Route path="/cards">
              <Cards />
            </Route>
          </Switch>
        </MainContainer>
      </Router>
    </div>
  );
}

const MainContainer = styled.div`
  margin-left: 240px;
  padding: 16px;
`;

export default App;
