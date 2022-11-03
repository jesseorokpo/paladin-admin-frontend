import React, { useState } from "react";

import { navigationLinks, storeNavigationPathConfig } from "./links";
import { useNavigate, useRoutes } from "react-router-dom";
import { LinksGroup } from "./components";

export function NavigationLinks() {
  let [activeKey, setActiveKey] = useState("/");
  let navigate = useNavigate();

  const links = navigationLinks
    .map((element) => {
      element.isActive = activeKey == element.link;
      element.onChangePath = (path: any) => {
        setActiveKey(path);
      };

      return element;
    })
    .map((item) => <LinksGroup {...item} key={item.label} />);

  return <React.Fragment>{links}</React.Fragment>;
}

export function StoreNavigationLinks() {
  let [activeKey, setActiveKey] = useState("/");
  let navigate = useNavigate();

  const links = storeNavigationPathConfig
    .map((element) => {
      element.isActive = activeKey == element.link;
      element.onChangePath = (path: any) => {
        setActiveKey(path);
      };

      return element;
    })
    .map((item) => <LinksGroup {...item} key={item.label} />);

  return <React.Fragment>{links}</React.Fragment>;
}
