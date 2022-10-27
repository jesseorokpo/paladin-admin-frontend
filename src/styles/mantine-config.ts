import { MantineTheme, MantineThemeOverride } from "@mantine/core";

export const MaintineThemeConfig: MantineThemeOverride = {
  colorScheme: "light",
  fontFamily: "'AppRegularFont', sans-serif",
  fontFamilyMonospace: "'AppRegularFont', sans-serif",
  headings: { fontFamily: "'AppRegularFont', sans-serif" },
  colors: {
    brown: [
      "#E5D4C3",
      "#E5C9AE",
      "#DEBEA2",
      "#D6AB7D",
      "#B3895D",
      "#9B744A",
      "#81583A",
      "#734F38",
      "#553725",
      "#482919",
    ],
  },
  primaryColor: "brown",
  components: {
    Button: {
      defaultProps: {
        color: "brown",
      },
      styles(theme, params) {
        return {
          root: {
            ":disabled": {
              background: theme.colors.gray[6],
              color: theme.colors.gray[3],
            },
            borderRadius: 8,
          },
        };
      },
    },
    Paper: {
      styles(theme, params) {
        return {
          root: {},
        };
      },
    },
    Tabs: {
      defaultProps: {
        color: "blue",
      },
      styles(theme, params) {
        return {
          tab: {
            ":hover": {
              background: "transparent",
              borderColor: "transparent",
            },
          },
        };
      },
    },
    TextInput: {
      defaultProps: {
        color: "orange",
      },
      styles(theme, params) {
        return {
          input: {
            // background: theme.fn.darken(theme.colors.darkBlue[5], .2),
          },
        };
      },
    },
    Select: {
      styles(theme, params) {
        return {};
      },
    },
    Modal: {
      styles(theme, params) {
        return {
          modal: {
            // background: theme.colors.darkBlue[5],
            borderColor: "transparent",
            alignSelf: "center",
          },
        };
      },
    },
  },
};
