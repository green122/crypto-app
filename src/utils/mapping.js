import get from "lodash/get";

export const mapDataCoinMarket = {
  rank: "cmc_rank",
  name: "name",
  priceUSD: ["quote", "USD", "price"],
  priceChange24: ["quote", "USD", "percent_change_24h"],
  marketCAP: ["quote", "USD", "market_cap"],
  volume24: ["quote", "USD", "volume_24h"]
};

export function mapFetchedData(mapper) {
  return data =>
    Object.keys(mapper).reduce((result, key) => {
      result[key] = get(data, mapper[key]);
      return result;
    }, {});
}

export default mapFetchedData(mapDataCoinMarket);
