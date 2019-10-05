import React from "react";
import { connect } from "react-redux";
import TableListings from "../../components/Table/TableListings";
import { getListings } from "../../store/selectors";

export function Overview({ listings }) {
  return (
    <div>
      <TableListings listings={listings} />
    </div>
  );
}

const mapStateToProps = state => ({
  listings: getListings(state)
});

export default connect(mapStateToProps)(Overview);
