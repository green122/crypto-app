import React from "react";
import { connect } from "react-redux";
import {
  Pagination as SemanticPagination,
  Segment,
  Responsive
} from "semantic-ui-react";
import {
  getAllListings,
  getTotalOnPage,
  getCurrentPage
} from "../../store/selectors";
import { setPage } from "../../store/filters";

export function Pagination({
  listingsAmount,
  setPage,
  totalOnPage,
  currentPage
}) {
  const totalPages = Math.ceil(listingsAmount / totalOnPage);
  const options = {
    defaultActivePage: currentPage + 1,
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
  listingsAmount: getAllListings(state).length,
  totalOnPage: getTotalOnPage(state),
  currentPage: getCurrentPage(state)
});

export default connect(
  mapStateToProps,
  { setPage }
)(Pagination);
