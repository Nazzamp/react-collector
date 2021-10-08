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
        <WrapBody>
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
        </WrapBody>
      </Router>
    </div>
  );
}

const MainContainer = styled.div`
  padding: 16px;
`;

const WrapBody = styled.div`
  display: flex;
  flex-direction: row;
`;

export default App;
