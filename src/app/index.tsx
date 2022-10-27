import React from "react";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import { observer } from "mobx-react";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import MainAppRoutes from "./router/MainAppRoutes";
import { MaintineThemeConfig } from "../styles/mantine-config";
import { useUtilsLoader } from "../hooks/loader";
import axios from "axios";
import { dataManager } from "@store/data";

export default observer(function () {
  let [appState, setAppState] = React.useState("loaded");
  let checkAuthStatus;

  React.useEffect(() => {
    dataManager.loadCategories();
    dataManager.loadProducts();
  },[]);
  // return <div>I AM WORKING</div>;

  return (
    <React.Fragment>
      <BrowserRouter>
        <MantineProvider
          theme={MaintineThemeConfig}
          withGlobalStyles
          withNormalizeCSS
        >
          <NotificationsProvider>
            <MainAppRoutes />
          </NotificationsProvider>
        </MantineProvider>
      </BrowserRouter>
    </React.Fragment>
  );
});
