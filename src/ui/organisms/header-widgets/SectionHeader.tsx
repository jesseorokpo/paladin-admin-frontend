import { Divider, Box, Text, Group, Stack } from "@mantine/core";
import {} from "iconsax-react";

type SectionHeaderProps = {
  title: string;
  right?: React.ReactNode;
  showBorder?: boolean;
};
export function SectionHeader({
  title,
  right,
  showBorder,
}: SectionHeaderProps) {
  return (
    <Stack spacing={"sm"}>
      <Group position="apart" align={"center"}>
        <Text sx={{ fontWeight: "bold" }}>{title.toUpperCase()}</Text>
        {right}
      </Group>
      {showBorder !== false ? <Divider /> : null}
    </Stack>
  );
}
