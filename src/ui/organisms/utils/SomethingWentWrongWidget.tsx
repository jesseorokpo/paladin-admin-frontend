import { Center, Stack, Box, Text } from "@mantine/core";
import { CloseCircle } from "iconsax-react";

export const SomethingWentWrongWidget = () => {
  return (
    <Box>
      <Center sx={{ paddingTop: 200 }}>
        <Stack>
          <CloseCircle variant="Bold" size={100} />
          <Text sx={{ textAlign: "center" }}>Something Went Wrong</Text>
        </Stack>
      </Center>
    </Box>
  );
};
