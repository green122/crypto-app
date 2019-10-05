import React, { useEffect } from "react";
import { loadListings } from "./store/listings";
import { connect } from "react-redux";
import { Route } from 'react-router-dom';
import { Overview, Liquidity } from './containers';



function App({ listings, loadListings }) {
  useEffect(() => {
    loadListings();
  }, []);

  return <div className="App">
    <Route path="/" exact component={Overview} />
    <Route path="/liquidity" exact component={Liquidity} />
  </div>;
}




export default connect(
  null,
  { loadListings }
)(App);
