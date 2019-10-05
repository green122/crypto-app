import React, { useContext } from "react";
import { ConfigContext } from "../";

export function injectConfig(Component) {
  return props => {
    const config = useContext(ConfigContext);
    return <Component {...props} {...config} />;
  };
}
