import React from "react";
import { connect } from "react-redux";
import { setListingsMaximum } from "../../store/filters";
import TableListings from "../../components/Table/TableListings";

export function Overview({ listings }) {
  return (
    <div>
      <TableListings listings={listings} />
    </div>
  );
}

const mapStateToProps = ({ listings }) => ({
  listings: listings.entries
});

export default connect(
  mapStateToProps,
  { setListingsMaximum }
)(Overview);
