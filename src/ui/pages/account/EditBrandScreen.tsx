import React from "react";
import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Text,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Title,
  Stack,
  Box,
  Container,
  Grid,
  Group,
  Avatar,
  Select,
} from "@mantine/core";
import { AuthenticationTemplate } from "../../template/authentication";
import { Link } from "react-router-dom";

export function BrandRegisterationScreen(props: any) {
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true,
    },
  });

  return (
    <Container py="42px">
      <Stack spacing={"xl"}>
        <Title>Create Brand Account</Title>
        <Text>Personal Details</Text>
        <Grid>
          <Grid.Col md={6}>
            <TextInput label="First Name" placeholder="Type Here" size="md" />
          </Grid.Col>
          <Grid.Col md={6}>
            <TextInput label="Last Name" placeholder="Type here" size="md" />
          </Grid.Col>
          <Grid.Col md={12}>
            <Grid>
              <Grid.Col md={3}>
                <TextInput
                  label="Phone Number"
                  placeholder="Your name"
                  size="md"
                />
              </Grid.Col>
              <Grid.Col md={3}>
                <Select
                  label="Gender"
                  placeholder="Your name"
                  data={[]}
                  size="md"
                />
              </Grid.Col>
              <Grid.Col md={6}>
                <TextInput label="Email" placeholder="Your name" size="md" />
              </Grid.Col>
            </Grid>
          </Grid.Col>
          <Grid.Col md={6}>
            <PasswordInput label="Password" placeholder="Type Here" size="md" />
          </Grid.Col>
          <Grid.Col md={6}>
            <PasswordInput
              label="Confirm Password"
              placeholder="Type here"
              size="md"
            />
          </Grid.Col>
        </Grid>

        <Text sx={{ textAlign: "center" }}>OR REGISTER WITH</Text>

        <Grid>
          <Grid.Col md={6}>
            <Button fullWidth variant="subtle">
              Facebook
            </Button>
          </Grid.Col>
          <Grid.Col md={6}>
            <Button fullWidth variant="subtle">
              Google
            </Button>
          </Grid.Col>
        </Grid>

        <Button fullWidth>Continue</Button>

        <Text sx={{ textAlign: "center" }}>
          Already have a seller account?{" "}
          <span style={{ fontWeight: "bold" }}>Signin</span>
        </Text>
      </Stack>
    </Container>
  );
}
