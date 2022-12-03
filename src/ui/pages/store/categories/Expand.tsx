import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Group,
  Stack,
  Title,
} from "@mantine/core";
import { taxonomyManager } from "@store/catalog/taxonomy";
import {
  HorizontalKeyValuePair,
  VerticalKeyValuePair,
} from "@ui/molecules/text";
import { Product, Taxonomy } from "../../../../sdk/catalog";

export const Expand = ({ taxonomy }: { taxonomy: Taxonomy }) => {
  return (
    <Stack p="md">
      <Grid>
        <Grid.Col md={12}>
          <Grid justify={"space-between"} align="center">
            <Grid.Col md={6}>
              <Group>
                <Avatar src={taxonomy.image ?? ""}></Avatar>
                <Title size={"xl"}>Details</Title>
              </Group>
            </Grid.Col>
            <Grid.Col md={6}>
              <Group position="right">
                <Button color={"red"}>Edit</Button>
                <Button
                  color={"green"}
                  onClick={() => {
                    //@ts-ignore
                    taxonomyManager.deleteItem(taxonomy._id);
                  }}
                >
                  Delete
                </Button>
              </Group>
            </Grid.Col>
          </Grid>
        </Grid.Col>
        <Grid.Col md={12}>
          <Divider />
        </Grid.Col>
        <Grid.Col md={6}>
          <Stack>
            <HorizontalKeyValuePair label="Title" value={taxonomy.name} />
            <HorizontalKeyValuePair label="Type" value={"Collection"} />
            <HorizontalKeyValuePair
              label="Description"
              value={taxonomy.description}
            />
          </Stack>
        </Grid.Col>
        <Grid.Col md={6}>
          <Stack>
            <HorizontalKeyValuePair label="Created At" value="" />
            <HorizontalKeyValuePair label="Updated At" value="N/A" />
          </Stack>
        </Grid.Col>
      </Grid>
    </Stack>
  );
};
