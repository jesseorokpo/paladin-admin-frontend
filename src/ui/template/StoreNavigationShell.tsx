import { Center, Stack, Box, Text } from "@mantine/core";
import { SomethingWentWrongWidget } from "@ui/organisms/utils/SomethingWentWrongWidget";
import React from "react";
import { Outlet } from "react-router-dom";
import MainAppShell from "@ui/template/MainAppShell";
import MainAppNavigation from "@ui/organisms/main-navigation/MainNavigation";
import MainHeader from "@ui/organisms/main-header/MainHeader";
import StoreNavigation from "@ui/organisms/main-navigation/StoreNavigation";

export class StoreNavigationShell extends React.Component<
  {},
  { error: null | undefined | boolean | any; errorInfo: any }
> {
  constructor(props: any) {
    super(props);
    this.state = { error: null, errorInfo: "" };
  }
  componentDidCatch(error: any, errorInfo: any) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    return (
      <MainAppShell ShellHeader={MainHeader} Navbar={StoreNavigation}>
        {this.state.error ? <SomethingWentWrongWidget /> : <Outlet />}
      </MainAppShell>
    );
  }
}
