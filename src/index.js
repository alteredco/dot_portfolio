import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Portfolio} />
        <Route path="/about" component={About} />
        <Route path="/app" component={App} />
        <Route path="/index.html" component={App} />
        <Route path="/" component={App} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
