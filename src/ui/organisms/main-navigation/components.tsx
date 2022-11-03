import {
  UnstyledButton,
  Group,
  Collapse,
  createStyles,
  Box,
  Text,
} from "@mantine/core";
import { IconChevronRight, IconChevronLeft } from "@tabler/icons";
import {} from "iconsax-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export interface LinksGroupProps {
    icon: any;
    label: string;
    link?: string;
    onChangePath?: (path: string) => void;
    isActive?: boolean;
    initiallyOpened?: boolean;
    links?: { label: string; link: string }[];
  }
  

  
const useStyles = createStyles((theme) => ({
  control: {
    fontWeight: 500,
    display: "block",
    width: "100%",
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    padding: `${theme.spacing.sm}px ${theme.spacing.sm}px`,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.dark[3],
    fontSize: theme.fontSizes.sm,
    "&:hover": {
      color: theme.colors.dark[2],
    },
  },
  link: {
    fontWeight: 500,
    display: "block",
    textDecoration: "none",
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    paddingLeft: 31,
    marginLeft: 42,
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    borderLeft: `0px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,

    "&:hover": {
      cursor: "pointer",
    },
  },

  chevron: {
    transition: "transform 200ms ease",
  },
}));

export interface LinksGroupProps {
  icon: any;
  label: string;
  link?: string;
  onChangePath?: (path: string) => void;
  isActive?: boolean;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
}

export function LinksGroup({
  icon: Icon,
  label,
  initiallyOpened,
  links,
  link,
  onChangePath,
  isActive,
}: LinksGroupProps) {
  let navigate = useNavigate();
  const { classes, theme } = useStyles();

  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const ChevronIcon = theme.dir === "ltr" ? IconChevronRight : IconChevronLeft;
  const items = (hasLinks ? links : []).map((link) => (
    <Text
      className={classes.link}
      key={link.label}
      onClick={() => {
        //@ts-ignore
        onChangePath(link.link);
        navigate(link.link);
      }}
    >
      {link.label}
    </Text>
  ));

  return (
    <>
      <Box ml={"12px"}>
        <UnstyledButton
          onClick={() => {
            setOpened((o) => !o);
            if (link == undefined) return;
            navigate(link);
            //@ts-ignore
            onChangePath(link ?? "");
          }}
          className={classes.control}
          sx={{
            color: isActive ? "rgb(85, 55, 37)" : undefined,
          }}
        >
          <Group position="apart" spacing={0}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Icon size={24} variant="Bold" />
              <Box ml="md">{label}</Box>
            </Box>
            {hasLinks && (
              <ChevronIcon
                className={classes.chevron}
                size={14}
                stroke={1.5}
                style={{
                  transform: opened
                    ? `rotate(${theme.dir === "rtl" ? -90 : 90}deg)`
                    : "none",
                }}
              />
            )}
          </Group>
        </UnstyledButton>
      </Box>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}
