import { useState } from "react";
import { AppShell, useMantineTheme } from "@mantine/core";
import MarketplaceFooter from "@ui/organisms/marketplace-widgets/MarketplaceFooter";

type MainAppShellProps = {
  children: any;
  Navbar?: React.FC<{ setOpened: (data: any) => void; opened: boolean }>;
  ShellHeader: React.FC<{ setOpened: (data: any) => void; opened: boolean }>;
};

export const MainAppShell: React.FC<MainAppShellProps> = ({
  children,
  Navbar,
  ShellHeader,
}) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.darkBlue[5]
              : theme.colors.gray[0],
          paddingLeft: Navbar == undefined ? 0 : undefined,
          paddingRight: Navbar == undefined ? 0 : undefined,
          marginTop: 0,
          paddingTop: 60,
        },
      }}
      // navbarOffsetBreakpoint="sm"
      // // asideOffsetBreakpoint="sm"
      navbar={
        Navbar == undefined ? undefined : (
          <Navbar setOpened={setOpened} opened={opened} />
        )
      }
      header={<ShellHeader opened={opened} setOpened={setOpened} />}
      footer={Navbar == undefined ? <MarketplaceFooter /> : undefined}
    >
      <div>{children}</div>
    </AppShell>
  );
};

export default MainAppShell;
