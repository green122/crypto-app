import { formatter } from "../utils/currencyFormatter";

export const coinDataMarket = {
  mapConfig: {
    rank: { label: "Rank", getter: "cmc_rank" },
    slug: { getter: "slug"},
    name: { label: "Name", getter: "name" },
    priceUSD: { label: "Price", getter: ["quote", "USD", "price"], formatter },
    priceChange24: {
      label: "Price Change (24h)",
      getter: ["quote", "USD", "percent_change_24h"],
      formatter: value => value && `${value.toFixed(2)}%`
    },
    marketCAP: {
      label: "Market CAP",
      getter: ["quote", "USD", "market_cap"],
      formatter
    },
    volume24: {
      label: "Volume (24h)",
      getter: ["quote", "USD", "volume_24h"],
      formatter
    }
  },
  tooltipFields: ["name", "marketCAP", "volume24", "priceChange24"]
};
