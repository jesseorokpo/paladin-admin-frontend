import {
  Badge,
  Box,
  Group,
  Paper,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { IconUser } from "@tabler/icons";

type MainStatsCardProps = {
  label: string;
  value: string;
  caption: string;
  color: string;
  icon: React.ReactNode;
};
export function MainStatsCard({
  caption,
  label,
  value,
  color,
  icon,
}: MainStatsCardProps) {
  let theme = useMantineTheme();
  return (
    <Paper
      p="18px"
      pl={20}
      sx={{
        border: `.5px solid ${color}`,
        background: "ghostwhite",
      }}
    >
      <Box>
        <Stack spacing={4}>
          <Group position="apart" align={"flex-start"}>
            <Box>
              <Text size={"sm"}>{label}</Text>
              <Title sx={{ fontSize: "28px" }}>{value}</Title>
            </Box>
            {icon}
          </Group>
          <Text size={"sm"}>{caption}</Text>
        </Stack>
      </Box>
    </Paper>
  );
}
