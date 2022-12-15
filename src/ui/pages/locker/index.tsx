import {
  Box,
  Group,
  Paper,
  Stack,
  Title,
  Text,
  Tabs,
  ActionIcon,
  Loader,
  Center,
} from "@mantine/core";
import {
  resetNavigationProgress,
  startNavigationProgress,
} from "@mantine/nprogress";
import { CardEdit, Edit, EyeSlash } from "iconsax-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { lockerApiController } from "../../../config/sdk";
import { Locker } from "../../../sdk/catalog";
import { LockerAssets } from "./LockerAssets";
import { LockerDetails } from "./LockerDetails";
import { LockerHistory } from "./LockerHistory";

export default function LockerScreen() {
  let [locker, setLocker] = useState<Locker>();
  let params = useParams();
  async function loadLocker() {
    try {
      startNavigationProgress();
      let response = await lockerApiController.lockerControllerGetById(
        params.locker ?? ""
      );
      setLocker(response.data);
      resetNavigationProgress();
    } catch (err) {
      resetNavigationProgress();
    }
  }

  useEffect(() => {
    loadLocker();
  }, []);

  if (locker == undefined) {
    return (
      <Center>
        <Loader />
      </Center>
    );
  }

  return (
    <Box style={{ overflow: "hidden !important" }} mt="xl">
      <Stack>
        <Paper
          p={"18px"}
          sx={(theme) => {
            return { width: "100%", background: "white" };
          }}
          shadow="md"
        >
          <Stack>
            <Group position="apart">
              <Box>
                <Title sx={{ fontSize: 24 }}>Locker</Title>
                <Text>{locker.pid}</Text>
              </Box>

              <Group>
                <ActionIcon>
                  <EyeSlash />
                </ActionIcon>
                <ActionIcon>
                  <CardEdit />
                </ActionIcon>
              </Group>
            </Group>

            <Tabs defaultValue="profile" variant="pills">
              <Tabs.List>
                <Tabs.Tab value="profile">Details</Tabs.Tab>
                <Tabs.Tab value="items">Assets</Tabs.Tab>
                <Tabs.Tab value="history">History</Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="profile" pt="xs">
                <LockerDetails locker={locker} />
              </Tabs.Panel>

              <Tabs.Panel value="items" pt="xs">
                <LockerAssets locker={locker} />
              </Tabs.Panel>

              <Tabs.Panel value="history" pt="xs">
                <LockerHistory locker={locker} />
              </Tabs.Panel>
            </Tabs>
          </Stack>
        </Paper>
      </Stack>
    </Box>
  );
}
