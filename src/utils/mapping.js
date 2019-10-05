import get from "lodash/get";

export function mapFetchedData({ mapConfig }) {
  return data =>
    Object.keys(mapConfig).reduce((result, key) => {
      result[key] = get(data, mapConfig[key].getter);
      return result;
    }, {});
}

export function mapFetchedDataToView({ mapConfig }) {
  return data =>
    Object.keys(mapConfig).reduce((result, key) => {
      const { label, formatter } = mapConfig[key];
      const value = formatter ? formatter(data[key]) : data[key];
      result[key] = { label, value };
      return result;
    }, {});
}
