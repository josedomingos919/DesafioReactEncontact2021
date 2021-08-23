import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { appRoutes } from "./routes";
import GlobalStyle from "./styles/global";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Dispatch } from "redux";
import { AppProps } from "./types";
import { FC } from "react";

const App: FC<AppProps> = ({ mode }) => {
  const { notFound, routes } = appRoutes;

  return (
    <section>
      <GlobalStyle appMode={mode} />
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
};

const mapStateToProps = (store: any) => ({
  mode: store.listState.mode,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
