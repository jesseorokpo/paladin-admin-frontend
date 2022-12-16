import {
  Navbar,
  Group,
  ScrollArea,
  createStyles,
  Button,
  Text,
  Stack,
} from "@mantine/core";
import { navigationLinks } from "./links";
import { Logout, MessageQuestion } from "iconsax-react";
import { NavigationLinks } from "./NavigationLinks";
import { useStyles } from "./style";


const MainAppNavigation: React.FC<{
  setOpened: (data: any) => void;
  opened: boolean;
}> = ({ opened, setOpened }) => {
  const { classes } = useStyles();

  return (
    <Navbar
      height={"calc(100vh - 70px)"}
      width={{ sm: 200 }}
      p="md"
      className={classes.navbar}
      hidden={opened}
    >
      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>
          <NavigationLinks />
        </div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <Stack pl="4px">
          <Group>
            <Logout size={18} variant="Bold" /> <Text size={"sm"}>Log out</Text>
          </Group>
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
};

export default MainAppNavigation;
