import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { appRoutes } from "./routes";
import GlobalStyle from "./styles/global";

export default function App() {
  const { notFound, routes } = appRoutes;

  return (
    <section>
      <GlobalStyle appMode={true} />
      <Router>
        <Switch>
          {routes.map(({ initial, path, component }) =>
            initial ? (
              [
                <Route
                  path="/"
                  exact
                  component={() => <Redirect to={path} />}
                />,
                <Route path={path} component={() => component} />,
              ]
            ) : (
              <Route path={path} component={() => component} />
            )
          )}

          <Route path="*" exact={true} component={() => notFound.component} />
        </Switch>
      </Router>
    </section>
  );
}
