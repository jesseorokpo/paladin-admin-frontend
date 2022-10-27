import { useState } from 'react';
import {
  AppShell,
  useMantineTheme,
} from '@mantine/core';
import MarketplaceFooter from '@ui/organisms/marketplace-widgets/MarketplaceFooter';

type MainAppShellProps = {
  children?: any;
  Navbar?: React.FC<{ setOpened: (data: any) => void, opened: boolean }>;
  ShellHeader: React.FC<{ setOpened: (data: any) => void, opened: boolean }>;
}

export const MarketplaceShell: React.FC<MainAppShellProps> = ({ children, Navbar, ShellHeader }) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          minHeight: "50vh",
          paddingLeft: 0,
          paddingRight: 0,
          margin: 0,
          paddingTop: 60
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      header={
        <ShellHeader opened={opened} setOpened={setOpened} />
      }
      footer={<MarketplaceFooter />}
    >
      {children}

    </AppShell>
  );
}


export default MarketplaceShell