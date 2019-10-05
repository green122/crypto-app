import get from "lodash/get";

export function mapFetchedData(config) {
  return data =>
    Object.keys(config).reduce((result, key) => {
      result[key] = get(data, config[key].getter);
      return result;
    }, {});
}

export function mapFetchedDataToView(config) {
  return data =>
    Object.keys(config).reduce((result, key) => {
      const { label, formatter } = config[key];
      const value = formatter ? formatter(data[key]) : data[key];
      result[key] = { label, value };
      return result;
    }, {});
}
