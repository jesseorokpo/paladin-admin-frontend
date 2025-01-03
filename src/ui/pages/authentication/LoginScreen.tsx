import React, { useState } from "react";
import {
  TextInput,
  PasswordInput,
  Text,
  Button,
  Title,
  Stack,
  Container,
  Box,
} from "@mantine/core";

import { useForm } from "@mantine/form";
import { loginManager } from "@store/account/loginManager";
import { RenderPlatformBanner } from "@ui/organisms/utils/covers";

export function LoginScreen(props: any) {
  let [submitting, setSubmitting] = useState(false);
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Box>
      <RenderPlatformBanner />

      <form
        onSubmit={form.onSubmit(async (values) => {
          try {
            setSubmitting(true);
            await loginManager.login({
              email: values.email,
              password: values.password,
            });

            setSubmitting(false);
          } catch (e) {
            setSubmitting(false);
          }
        })}
      >
        <Container size={"xs"}>
          <Title color={"#183B56"}>Sign in.</Title>
          <Stack>
            <TextInput
              placeholder="email"
              label="Email"
              withAsterisk
              size="lg"
              {...form.getInputProps("email")}
            />
            <PasswordInput
              label="Password"
              size="lg"
              {...form.getInputProps("password")}
            />

            <Button size="lg" type="submit" loading={submitting}>
              Authorize
            </Button>
          </Stack>
        </Container>
      </form>
    </Box>
  );
}
