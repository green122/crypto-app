import React from "react";
import { connect } from "react-redux";
import TableListings from "../../components/Table/TableListings";
import { getListingsToView } from "../../store/selectors";
import {injectConfig} from '../../HOC/injectConfig';

export function Overview({ listings, config }) {
  const configKeys = Object.keys(config.mapConfig);
  return <TableListings listings={listings} configKeys={configKeys} />;
}

const mapStateToProps = (state, props) => ({
  listings: getListingsToView(state, props)
});

export default injectConfig(connect(mapStateToProps)(Overview));
