import Register from "./Components/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <Switch>
      <Route exact  path= '/' component={Home}  />
      <Route exact component={Register} path= '/register'   />

      </Switch>
    </Router>
  );
}

export default App;
