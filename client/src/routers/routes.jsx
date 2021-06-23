import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../App";
import Login from "../pages/Login";
import Navbar from "../components/Navbar";

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
