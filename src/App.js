import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/home/home";
import ErrorNotFound from "./components/error404";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route component={ErrorNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
