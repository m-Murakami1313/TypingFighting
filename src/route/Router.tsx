import { Route, Switch } from "react-router-dom";

import { Home } from "../components/pages/Home";
import { Beginner } from "../components/pages/Beginner";
import { Expert } from "../components/pages/Expert";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/page1">
        <Beginner />
      </Route>
      <Route path="/page2">
        <Expert />
      </Route>
    </Switch>
  );
};
