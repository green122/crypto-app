import React, { createContext } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { getStore } from "./store";
import Axios from "axios";
import { coinDataMarket } from "./config/configMapping";
import { mapFetchedData } from "./utils/mapping";

const configMapper = mapFetchedData(coinDataMarket);
export const ConfigContext = createContext({ config: coinDataMarket });
console.disableYellowBox = true

ReactDOM.render(
  <Provider
    store={getStore({
      client: Axios,
      config: configMapper
    })}
  >
    <ConfigContext.Provider value={{ config: coinDataMarket }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigContext.Provider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
