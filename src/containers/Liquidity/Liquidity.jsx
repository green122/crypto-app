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
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Legend />
        <Scatter name="A school" data={listings} fill="#8884d8" shape="star" />
      </ScatterChart>
    </ResponsiveContainer>
  );
}

const mapStateToProps = ({ listings }) => ({
  listings: listings.entries
});

export default connect(mapStateToProps)(Liquidity);
