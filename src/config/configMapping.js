

export const mapDataCoinMarket = {
  rank: {label: 'Rank', getter: "cmc_rank"},
  name: {label: 'Name', getter: "name"},
  priceUSD: {label: 'Price', getter:["quote", "USD", "price"]},
  priceChange24: {label: 'Price Change (24h)', getter: ["quote", "USD", "percent_change_24h"]},
  marketCAP: {label: 'Market CAP', getter: ["quote", "USD", "market_cap"]},
  volume24: {label: 'Volume (24h)', getter: ["quote", "USD", "volume_24h"]}
};

