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
} from "@mantine/core";
import { SectionHeader } from "../header-widgets/SectionHeader";

export function NewUserProcess() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Create Account"
      >
        <SectionHeader title="User Profile" showBorder={false} />
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
          <Grid.Col md={12}>
            <Select label="Role" data={[]} />
          </Grid.Col>
        </Grid>

        <Box sx={{ height: 24 }} />
        <SectionHeader title="Security" showBorder={false} />
        <Grid>
          <Grid.Col span={12}>
            <PasswordInput label="Password" />
          </Grid.Col>
          <Grid.Col span={12}>
            <Button fullWidth>Create</Button>
          </Grid.Col>
        </Grid>
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Add User</Button>
      </Group>
    </>
  );
}
