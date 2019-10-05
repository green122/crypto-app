import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend
} from "../../vendor/recharts";
import { connect } from "react-redux";
import { getListings, getListingsToView } from "../../store/selectors";
import { injectConfig } from "../../HOC/injectConfig";
import { mapFetchedDataToView } from "../../utils/mapping";

export function Liquidity({ listings }) {
  return (
    <ResponsiveContainer width="90%" height={400}>
      <ScatterChart>
        <CartesianGrid />
        <XAxis type="number" dataKey="marketCAP" name="stature" unit="cm" />
        <YAxis type="number" dataKey="volume24" name="weight" unit="kg" />
        <ZAxis
          type="number"
          dataKey="priceChange24"
          range={[60, 400]}
          name="score"
          unit="km"
        />
        <Tooltip
          active
          cursor={{ strokeDasharray: "3 3" }}
          content={<TooltipContent />}
        />
        <Legend />
        <Scatter name="A school" data={listings} fill="#8884d8" shape="star" />
      </ScatterChart>
    </ResponsiveContainer>
  );
}

export function TooltipView({ payload, config }) {
  if (!payload[0]) {
    return null;
  }
  const data = mapFetchedDataToView(config)(payload[0].payload);  
  return (
    <div className="tooltip-container">
      {config.tooltipFields.map(field => (
        <div key={field}>
          <p className="tooltip-label">{data[field].label}</p>
          <p className="tooltip-value">{data[field].value}</p>
        </div>
      ))}
    </div>
  );
}
export const TooltipContent = injectConfig(TooltipView);

const mapStateToProps = (state, props) => ({
  listings: getListings(state)
  // listingsToView: getListingsToView(state, props)
});

export default injectConfig(connect(mapStateToProps)(Liquidity));
