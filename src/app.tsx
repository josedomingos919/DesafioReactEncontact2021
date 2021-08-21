import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { appRoutes } from "./routes";

export default function App() {
  const { notFound, routes } = appRoutes;

  return (
    <Router>
      <Switch>
        {routes.map(({ initial, path, component }) =>
          initial ? (
            [
              <Route path="/" exact component={() => <Redirect to={path} />} />,
              <Route path={path} component={() => component} />,
            ]
          ) : (
            <Route path={path} component={() => component} />
          )
        )}

        <Route path="*" exact={true} component={() => notFound.component} />
      </Switch>
    </Router>
  );
}
