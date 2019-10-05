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
import { getListings } from "../../store/selectors";

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

export function TooltipContent({ payload }) {
    if (!payload[0]) {
      return null;
    }
    const data = payload[0].payload;
  return (
    <div className="tooltip-container">
      <div>
        <p className="tooltip-label">Name</p>
        <p className="tooltip-value">{data.name}</p>
      </div>
      <div>
        <p className="tooltip-label">Market Cap</p>
        <p className="tooltip-value">{data.marketCAP}</p>
      </div>
      <div>
        <p className="tooltip-label">Volume (24h)</p>
        <p className="tooltip-value">{data.volume24}</p>
      </div>
      <div>
        <p className="tooltip-label">Price Change (24h)</p>
        <p className="tooltip-value">{data.priceChange24}</p>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  listings: getListings(state)
});

export default connect(mapStateToProps)(Liquidity);
