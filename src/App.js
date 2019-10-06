import React, { useEffect } from "react";
import { initApp } from "./store/app";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import { Overview, Liquidity } from "./containers";
import Navigation from "./components/Navigation/Navigation";
import MaximumDropdown from "./components/MaximumDropdown/MaximumDropdown";
import Pagination from "./components/Pagination/Pagination";
import { setListingsMaximum, setTotalOnPage } from "./store/filters";
import './App.scss';
import TotalOnPageInput from "./components/TotalOnPageInput/TotalOnPageInput";

function App({ initApp, setListingsMaximum, setTotalOnPage }) {
  useEffect(() => {
    initApp();
  }, [initApp]);

  return (
    <Container>
      <Navigation>
        <TotalOnPageInput setTotalOnPage={setTotalOnPage} />
        <MaximumDropdown setMaximum={setListingsMaximum} />
      </Navigation>
      <Route path="/" exact component={Overview} />
      <Route path="/liquidity" exact component={Liquidity} />
      <Pagination />
    </Container>
  );
}

export default connect(
  null,
  { initApp, setListingsMaximum, setTotalOnPage }
)(App);
