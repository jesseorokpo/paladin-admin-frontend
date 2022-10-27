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
} from "@mantine/core";
import { SectionHeader } from "../header-widgets/SectionHeader";

export function NewLockerProcess() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Create Locker"
      >
        <SectionHeader title="Owner Profile" showBorder={false} />
        <Grid>
          <Grid.Col md={6}>
            <TextInput label="First Name" />
          </Grid.Col>
          <Grid.Col md={6}>
            <TextInput label="Last Name" />
          </Grid.Col>
          <Grid.Col md={6}>
            <TextInput label="Middle Name" />
          </Grid.Col>
          <Grid.Col md={6}>
            <Select label="Gender" data={[]} />
          </Grid.Col>
          <Grid.Col span={12}>
            <TextInput label="School" />
          </Grid.Col>
        </Grid>

        <Box sx={{ height: 24 }} />
        <SectionHeader title="Locker Profile" showBorder={false} />
        <Grid>
          <Grid.Col span={12}>
            <TextInput label="handle" />
          </Grid.Col>
          <Grid.Col span={12}>
            <TextInput label="Pin" />
          </Grid.Col>
        </Grid>

        <Button fullWidth>Create</Button>
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Create Locker</Button>
      </Group>
    </>
  );
}
