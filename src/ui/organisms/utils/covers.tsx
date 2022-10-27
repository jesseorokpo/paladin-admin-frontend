import { Box, Title, Text, Container } from "@mantine/core";

export const RenderPlatformBanner = () => {
  return (
    <Box sx={{ background: "#482919", marginBottom: 24 }}>
      <Container>
        <Box py={32} sx={{ textAlign: "center", color: "white" }}>
          <Title>Paladin Ecommerce</Title>
          <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
        </Box>
      </Container>
    </Box>
  );
};
