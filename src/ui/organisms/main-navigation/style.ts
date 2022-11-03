import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    navbar: {
      background: "#f4f3ee",
      paddingBottom: 0,
      paddingTop: 0,
      borderRight: "0px solid gray",
      // zIndex:0
    },
    header: {
      padding: theme.spacing.md,
      paddingTop: 0,
      paddingBottom: 0,
      marginLeft: -theme.spacing.md,
      marginRight: -theme.spacing.md,
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
      borderBottom: `1px solid ${
        theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
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