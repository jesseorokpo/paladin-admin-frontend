import React, { useState } from "react";
import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Text,
  Button,
  Title,
  Stack,
  Box,
  Container,
  Grid,
  Select,
} from "@mantine/core";
import { registerationManager } from "../../../store/account/registerationManager";
import { AuthenticationTemplate } from "../../template/authentication";
import { Link } from "react-router-dom";
import { RenderPlatformBanner } from "@ui/organisms/utils/covers";

export function RegisterationScreen(props: any) {
  let [submitting, setSubmitting] = useState(false);
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      gender: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  return (
    <Box>
      <RenderPlatformBanner />
      <Container py="42px">
        <Stack spacing={"xl"}>
          <Title>Create New Account</Title>
          <form
            onSubmit={form.onSubmit(async (values) => {
              try {
                setSubmitting(true);
                await registerationManager.createAccount({
                  ...values,
                  countryCode: "NG",
                  gender: "MALE",
                  platform: "BRAND_SELLER",
                });
                setSubmitting(false);
              } catch (e) {
                setSubmitting(false);
              }
            })}
          >
            <Stack spacing={"xl"}>
              <Grid>
                <Grid.Col md={6}>
                  <TextInput
                    label="First Name"
                    placeholder="Type Here"
                    size="lg"
                    {...form.getInputProps("first_name")}
                  />
                </Grid.Col>
                <Grid.Col md={6}>
                  <TextInput
                    label="Last Name"
                    placeholder="Type here"
                    size="lg"
                    {...form.getInputProps("last_name")}
                  />
                </Grid.Col>
                <Grid.Col md={12}>
                  <Grid>
                    <Grid.Col md={3}>
                      <TextInput
                        label="Phone Number"
                        placeholder="Your name"
                        size="lg"
                        {...form.getInputProps("phone")}
                      />
                    </Grid.Col>
                    <Grid.Col md={3}>
                      <Select
                        label="Gender"
                        placeholder="Your name"
                        data={[
                          { value: "MALE", label: "Male" },
                          { value: "FEMALE", label: "Female" },
                        ]}
                        size="lg"
                        {...form.getInputProps("gender")}
                      />
                    </Grid.Col>
                    <Grid.Col md={6}>
                      <TextInput
                        label="Email"
                        placeholder="Your name"
                        size="lg"
                        {...form.getInputProps("email")}
                      />
                    </Grid.Col>
                  </Grid>
                </Grid.Col>
                <Grid.Col md={6}>
                  <PasswordInput
                    label="Password"
                    placeholder="Type Here"
                    size="lg"
                    {...form.getInputProps("password")}
                  />
                </Grid.Col>
                <Grid.Col md={6}>
                  <PasswordInput
                    label="Confirm Password"
                    placeholder="Type here"
                    size="lg"
                    {...form.getInputProps("confirm_password")}
                  />
                </Grid.Col>
              </Grid>

              <Button fullWidth size="lg">
                Continue
              </Button>
            </Stack>
          </form>

          <Text sx={{ textAlign: "center" }}>
            Already have a seller account?{" "}
            <span style={{ fontWeight: "bold" }}>Signin</span>
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
