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
import { authController } from "../../../config/sdk";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";

export function NewAdminProcess() {
  const [opened, setOpened] = useState(false);

  let [submitting, setSubmitting] = useState(false);
  const form = useForm({
    initialValues: {
      email: "",
      first_name: "",
      last_name: "",
      password: "",
      phone: "",
    },
  });

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Create Admin Account"
      >
        <form
          onSubmit={form.onSubmit(async (values) => {
            try {
              setSubmitting(true);
              await authController.authControllerSignupAdmin({
                ...values,
                account_type:"admin"
              });
              showNotification({
                message: "Creating agent account in  background",
              });
              form.reset();
              setOpened(false);
              setSubmitting(false);
            } catch (e) {
              setSubmitting(false);
            }
          })}
        >
          <SectionHeader title="User Profile" showBorder={false} />
          <Grid>
            <Grid.Col md={6}>
              <TextInput
                label="First Name"
                {...form.getInputProps("first_name")}
              />
            </Grid.Col>
            <Grid.Col md={6}>
              <TextInput
                label="Last Name"
                {...form.getInputProps("last_name")}
              />
            </Grid.Col>

            <Grid.Col md={6}>
              <TextInput label="Email" {...form.getInputProps("email")} />
            </Grid.Col>
            <Grid.Col md={6}>
              <TextInput label="Phone" {...form.getInputProps("phone")} />
            </Grid.Col>
          </Grid>

          <Box sx={{ height: 24 }} />
          <SectionHeader title="Security" showBorder={false} />
          <Grid>
            <Grid.Col span={12}>
              <PasswordInput
                label="Password"
                {...form.getInputProps("password")}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <Button fullWidth type="submit" loading={submitting}>
                Create
              </Button>
            </Grid.Col>
          </Grid>
        </form>
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>New Staff</Button>
      </Group>
    </>
  );
}
