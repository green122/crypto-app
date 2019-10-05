import React, { useEffect } from "react";
import { loadListings } from "./store/listings";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { Overview, Liquidity } from "./containers";
import Navigation from "./components/Navigation/Navigation";
import MaximumDropdown from "./components/MaximumDropdown/MaximumDropdown";

function App({ loadListings }) {
  useEffect(() => {
    loadListings();
  }, [loadListings]);

  return (
    <div className="App">
      <Navigation>
        <MaximumDropdown setMaximum={console.log} />
      </Navigation>
      <Route path="/" exact component={Overview} />
      <Route path="/liquidity" exact component={Liquidity} />
    </div>
  );
}

export default connect(
  null,
  { loadListings }
)(App);
