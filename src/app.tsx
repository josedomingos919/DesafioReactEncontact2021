import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import EnHome from "./views/home";
import { typeOfFilters } from "./views/home/types";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={() => <Redirect to="/todos" />} />
        <Route
          path="/todos"
          exact
          component={() => <EnHome defaultFilter={typeOfFilters.ALL} />}
        />
        <Route
          path="/ativos"
          exact
          component={() => <EnHome defaultFilter={typeOfFilters.ALL} />}
        />
        <Route
          path="/completos"
          exact
          component={() => <EnHome defaultFilter={typeOfFilters.ALL} />}
        />
      </Switch>
    </Router>
  );
}
