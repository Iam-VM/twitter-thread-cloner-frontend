import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/home/home";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
