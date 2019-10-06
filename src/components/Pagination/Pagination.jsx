import React from "react";
import { connect } from "react-redux";
import {
  Pagination as SemanticPagination,
  Segment,
  Responsive
} from "semantic-ui-react";
import { getAllListings } from "../../store/selectors";
import { setPage } from "../../store/filters";

export function Pagination({ listingsAmount, setPage }) {
  const totalPages = Math.ceil(listingsAmount / 10);
  const options = {
    defaultActivePage: 1,
    totalPages
  };

  if (totalPages < 10) {
    options.firstItem = null;
    options.lastItem = null;
  }
  return (
    <Segment>
      <Responsive
        as={SemanticPagination}
        {...options}
        onPageChange={(_, data) => setPage(data.activePage - 1)}
      ></Responsive>
    </Segment>
  );
}

const mapStateToProps = state => ({
  listingsAmount: getAllListings(state).length
});

export default connect(
  mapStateToProps,
  { setPage }
)(Pagination);
