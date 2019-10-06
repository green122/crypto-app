import { mapFetchedData } from "./mapping";

const fakeConfig = {
  rank: { label: "Rank", getter: "cmc_rank" },
  slug: { getter: "slug" },
  name: { label: "Name", getter: "name" },
  priceUSD: {
    label: "Price",
    getter: ["quote", "USD", "price"],
    formatter: () => "fakeprice"
  },
  priceChange24: {
    label: "Price Change (24h)",
    getter: ["quote", "USD", "percent_change_24h"],
    formatter: value => value && `${value.toFixed(2)}%`
  },
  marketCAP: {
    label: "Market CAP",
    getter: ["quote", "USD", "market_cap"],
    formatter: () => "fakeCap"
  },
  volume24: {
    label: "Volume (24h)",
    getter: ["quote", "USD", "volume_24h"],
    formatter: () => "fakevol"
  }
};

describe("mapper", () => {
  const mapper = mapFetchedData({ mapConfig: fakeConfig });
  it("should convert data", () => {
    const fakeData = {
      id: 1,
      name: "Bitcoin",
      symbol: "BTC",
      slug: "bitcoin",
      num_market_pairs: 7919,
      date_added: "2013-04-28T00:00:00.000Z",
      tags: ["mineable"],
      max_supply: 21000000,
      circulating_supply: 17906012,
      total_supply: 17906012,
      platform: null,
      cmc_rank: 1,
      last_updated: "2019-08-30T18:51:28.000Z",
      quote: {
        USD: {
          price: 10000,
          volume_24h: 1000000000,
          percent_change_1h: -0.127291,
          percent_change_24h: 0.328918,
          percent_change_7d: -8.00576,
          market_cap: 171155540318.86005,
          last_updated: "2019-08-30T18:51:28.000Z"
        }
      }
    };

    expect(mapper(fakeData)).toEqual({
      marketCAP: 171155540318.86005,
      name: "Bitcoin",
      slug: "bitcoin",
      priceChange24: 0.328918,
      priceUSD: 10000,
      rank: 1,
      volume24: 1000000000
    });
  });
});
