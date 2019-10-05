import React, { createContext } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { getStore } from "./store";
import Axios from "axios";
import { mapDataCoinMarket } from "./config/configMapping";
import { mapFetchedData } from "./utils/mapping";

const config = mapFetchedData(mapDataCoinMarket);
export const ConfigContext = createContext({ config: mapDataCoinMarket });

ReactDOM.render(
  <Provider
    store={getStore({
      client: Axios,
      config
    })}
  >
    <ConfigContext.Provider value={{ config: mapDataCoinMarket }}>
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
