import React from "react";
import { connect } from "react-redux";
import { setListingsMaximum } from "../../store/filters";

export function Overview() {
  return <div></div>;
}

const mapStateToProps = ({ listings }) => ({
  listings
});

export default connect(
  mapStateToProps,
  { setListingsMaximum }
)(Overview);
