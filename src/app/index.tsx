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
import AppAuthRoutes from "./router/AppAuthRoutes";
import { authManager } from "@store/account/auth";

export default observer(function () {
  let [appState, setAppState] = React.useState("loaded");
  let checkAuthStatus;

  React.useEffect(() => {
    dataManager.loadCategories();
    dataManager.loadProducts();
  }, []);
  // return <div>I AM WORKING</div>;

  let authStatus = "";
  authStatus = authManager.status;

  return (
    <React.Fragment>
      <BrowserRouter>
        <MantineProvider
          theme={MaintineThemeConfig}
          withGlobalStyles
          withNormalizeCSS
        >
          <NotificationsProvider>
            {appState == "loaded" ? (
              authStatus == "AUTHENTICATED" ? (
                <React.Fragment>
                  <MainAppRoutes />
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <AppAuthRoutes />
                </React.Fragment>
              )
            ) : (
              <React.Fragment>
                <div>Initializing</div>
              </React.Fragment>
            )}
          </NotificationsProvider>
        </MantineProvider>
      </BrowserRouter>
    </React.Fragment>
  );
});
