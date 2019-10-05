import React, { useEffect } from "react";
import { initApp } from "./store/app";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import { Overview, Liquidity } from "./containers";
import Navigation from "./components/Navigation/Navigation";
import MaximumDropdown from "./components/MaximumDropdown/MaximumDropdown";
import Pagination from "./components/Pagination/Pagination";
import { setListingsMaximum } from "./store/filters";
import './App.css';

function App({ initApp, setListingsMaximum }) {
  useEffect(() => {
    initApp();
  }, [initApp]);

  return (
    <Container fluid>
      <Navigation>
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
  { initApp, setListingsMaximum }
)(App);
