import React, { useEffect } from "react";
import { loadListings } from "./store/listings";
import { connect } from "react-redux";

import Axios from "axios";

function App({ listings, loadListings }) {
  useEffect(() => {
    loadListings();
  }, []);

  return <div className="App"></div>;
}

const mapStateToProps = ({listings}) => ({
  listings
})


export default connect(
  mapStateToProps,
  { loadListings }
)(App);
