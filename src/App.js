import Register from "./Components/Register";
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import Header from './Components/Header'
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <Switch>
      <Route exact  path= '/' component={withRouter(Home) }  />
      <Route exact component={withRouter(Register)} path= '/register'   />

      </Switch>
    </Router>
  );
}

export default App;
