import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default function Navigation() {
  return (
    <Menu>
      <Menu.Item header exact as={NavLink} to="./">
        Overview
      </Menu.Item>
      <Menu.Item header as={NavLink} to="./liquidity" >
        Liquidity
      </Menu.Item>
    </Menu>
  );
}
