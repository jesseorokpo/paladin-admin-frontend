import { Center, Stack, Box, Text } from "@mantine/core";
import MarketplaceHeader from "@ui/organisms/marketplace-widgets/MarketplaceHeader";
import { SomethingWentWrongWidget } from "@ui/organisms/utils/SomethingWentWrongWidget";
import React from "react";
import { Outlet } from "react-router-dom";
import MainAppShell from "@ui/template/MainAppShell";

export class PlatformNavigationShell extends React.Component<
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
    // if (this.state.error) {
    //   return <SomethingWentWrongWidget />;
    // }
    return (
      <MainAppShell ShellHeader={MarketplaceHeader}>
        {this.state.error ? <SomethingWentWrongWidget /> : <Outlet />}
      </MainAppShell>
    );
  }
}
