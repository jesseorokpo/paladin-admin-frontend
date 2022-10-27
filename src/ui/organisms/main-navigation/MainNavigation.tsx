import { Navbar, Group, Code, ScrollArea, createStyles, Button, Text, Stack } from '@mantine/core';
import { navigationLinks } from './links';
import { Logout, MessageQuestion } from "iconsax-react"
import { NavigationLinks } from './NavigationLinks';

const useStyles = createStyles((theme) => ({
    navbar: {
        background: "white",
        paddingBottom: 0,
        paddingTop: 0,
        borderRight: "0px solid gray",
        boxShadow: theme.shadows.md,
        // zIndex:0
    },
    header: {
        padding: theme.spacing.md,
        paddingTop: 0,
        paddingBottom: 0,
        marginLeft: -theme.spacing.md,
        marginRight: -theme.spacing.md,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
            }`,
    },

    links: {
        marginLeft: -theme.spacing.md,
        marginRight: -theme.spacing.md,
    },

    linksInner: {
        paddingTop: 0,
        paddingBottom: theme.spacing.xl,
    },

    footer: {
        marginLeft: -theme.spacing.md,
        marginRight: -theme.spacing.md,
        paddingTop: 18,
        paddingBottom: 18,
        paddingLeft: theme.spacing.xl,
    },
}));

const MainAppNavigation: React.FC<{ setOpened: (data: any) => void, opened: boolean }> = ({ opened, setOpened }) => {
    const { classes } = useStyles();


    return (
        <Navbar height={"calc(100vh - 70px)"} width={{ sm: 250 }} p="md" className={classes.navbar} hidden={opened}>
            <Navbar.Section grow className={classes.links} component={ScrollArea}>
                <div className={classes.linksInner}>
                    <NavigationLinks />
                </div>
            </Navbar.Section>

            <Navbar.Section className={classes.footer}>
                <Stack pl="4px">
                    <Group>
                        <MessageQuestion size={18} variant="Bold" /> <Text size={"sm"}>Support</Text>
                    </Group>
                    <Group>
                        <Logout size={18} variant="Bold" /> <Text size={"sm"}>Log out</Text>
                    </Group>
                </Stack>
            </Navbar.Section>
        </Navbar>
    );
}


export default MainAppNavigation;