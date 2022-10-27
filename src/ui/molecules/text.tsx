import { Box, Group, Text } from "@mantine/core";

export function VerticalKeyValuePair({
  label,
  value,
  textAlign,
}: {
  label: string;
  value: string;
  textAlign?: string;
}) {
  return (
    <Box
      //@ts-ignore
      sx={{}}
    >
      <Text sx={{ color: "gray" }}>{label}</Text>
      <Text sx={{ }}>{value}</Text>
    </Box>
  );
}

export function HorizontalKeyValuePair({
  label,
  value,
  textAlign,
}: {
  label: string;
  value: string;
  textAlign?: string;
}) {
  return (
    <Group>
      <Text sx={{}}>{label}</Text>
      <Text sx={{ fontWeight: 700 }}>{value}</Text>
    </Group>
  );
}
