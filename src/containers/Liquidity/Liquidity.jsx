import React from "react";
import {
  ScatterChart,
  Scatter,
  Cell,
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

function abbreviateNumber(value) {
  var newValue = value;
  if (value >= 1000) {
    const suffixes = ["", "k", "mln", "bln", "trl"];
    const suffixNum = Math.floor(("" + value).length / 3);
    let shortValue = "";
    for (let precision = 2; precision >= 1; precision--) {
      shortValue = parseFloat(
        (suffixNum != 0
          ? value / Math.pow(1000, suffixNum)
          : value
        ).toPrecision(precision)
      );
      const dotLessShortValue = (shortValue + "").replace(
        /[^a-zA-Z 0-9]+/g,
        ""
      );
      if (dotLessShortValue.length <= 2) {
        break;
      }
    }
    if (shortValue % 1 != 0) shortValue = shortValue.toFixed(1);
    newValue = "$" + shortValue + suffixes[suffixNum];
  }
  return newValue;
}

const renderLegend = () => {
  return (
    <div className="legend">
      <div className="wrapper">
        <div className="positive" />
        <p>Positive Price Change (24h)</p>
      </div>
      <div className="wrapper">
        <div className="negative" />
        <p>Negative Price Change (24h)</p>
      </div>
    </div>
  );
};

export function Liquidity({ listings }) {
  const mappedListings = listings.map(listing => ({
    ...listing,
    zValue: Math.abs(listing.priceChange24) * 100
  }));
  return (
    <ResponsiveContainer width="90%" height={400}>
      <ScatterChart>
        <CartesianGrid />
        <XAxis
          domain={["auto", "auto"]}
          tickFormatter={abbreviateNumber}
          type="number"
          dataKey="marketCAP"
          name="market Cap"
        />
        <YAxis
          domain={["auto", "auto"]}
          tickFormatter={abbreviateNumber}
          type="number"
          dataKey="volume24"
          name="Volume (24h)"
        />
        <ZAxis
          type="number"
          dataKey="zValue"
          domain={["dataMin", "dataMax"]}
          range={[100, 700]}
          name="score"
          unit="km"
        />
        <Tooltip
          active
          cursor={{ strokeDasharray: "3 3" }}
          content={<TooltipContent />}
        />
        <Legend content={renderLegend} />
        <Scatter name="Price Change (24h)" data={mappedListings} shape="circle">
          {mappedListings.map((listing, index) => {
            return (
              <Cell
                key={`cell-${index}`}
                fill={listing.priceChange24 > 0 ? "green" : "red"}
              />
            );
          })}
        </Scatter>
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
