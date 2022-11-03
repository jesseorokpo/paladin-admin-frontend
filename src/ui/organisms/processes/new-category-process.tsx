import { useState } from "react";
import {
  Modal,
  Button,
  Group,
  TextInput,
  Text,
  Grid,
  Select,
  Box,
  PasswordInput,
  Avatar,
} from "@mantine/core";
import { SectionHeader } from "../header-widgets/SectionHeader";

export function NewCategoryProcess() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Create Category"
      >
        <Grid>
          <Grid.Col md={12}>
            <Avatar
              size={"xl"}
              src={
                "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              }
            />
          </Grid.Col>
          <Grid.Col md={12}>
            <TextInput label="Category Name" />
          </Grid.Col>
          <Grid.Col md={12}>
            <Select label="Type" data={[]} />
          </Grid.Col>
        </Grid>

        <Box sx={{ height: 24 }} />
        <Grid>
          <Grid.Col span={12}>
            <Button fullWidth>Create</Button>
          </Grid.Col>
        </Grid>
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Create Category</Button>
      </Group>
    </>
  );
}
