import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Header } from "./components";
import { Main, About, Login, Dictionary } from "./pages";
import siteMap from "./siteMap/config.json";
import "./App.css";
import "antd/dist/antd.css";

const App = () => (
  <BrowserRouter>
    <div className="container">
      <div className="wrapper">
        <Header />
        <section className="body">
          <Route exact path={siteMap.mainPage.path} render={() => <Main />} />
          <Route path={siteMap.login.path} render={() => <Login />} />
          <Route path={siteMap.dictionary.path} render={() => <Dictionary />} />
          <Route path={siteMap.about.path} render={() => <About />} />
        </section>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
