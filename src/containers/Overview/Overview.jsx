import React, { memo } from "react";
import { connect } from "react-redux";
import TableListings from "../../components/Table/TableListings";
import { getListingsToView, getLoadingStatuses } from "../../store/selectors";
import { injectConfig } from "../../HOC/injectConfig";
import { Loader } from "semantic-ui-react";
import { compose } from "redux";

export function Overview({ listings, loadingStatuses, config }) {
  const configKeys = Object.keys(config.mapConfig);
  return loadingStatuses.loading ? (
    <Loader active={loadingStatuses.loading} />
  ) : (
    <TableListings listings={listings} configKeys={configKeys} />
  );
}

const mapStateToProps = (state, props) => ({
  listings: getListingsToView(state, props),
  loadingStatuses: getLoadingStatuses(state)
});

export default compose(
  memo,
  injectConfig,
  connect(mapStateToProps)
)(Overview);
