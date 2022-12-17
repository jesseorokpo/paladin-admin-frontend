import {
  Box,
  Group,
  Paper,
  Stack,
  Title,
  Text,
  Tabs,
  ActionIcon,
  Center,
  Loader,
} from "@mantine/core";
import {
  startNavigationProgress,
  resetNavigationProgress,
} from "@mantine/nprogress";
import { usersManager } from "@store/users";
import { CardEdit, Edit, EyeSlash } from "iconsax-react";
import { observer } from "mobx-react";
import { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { lockerApiController, orgControllerApi } from "../../../config/sdk";
import { AgentDetailedDto, Locker } from "../../../sdk/catalog";
import { AgentDetails } from "./AgentDetails";

export default observer(function AgentScreen() {
  let params = useParams();

  let [agentProfile, setProfile] = useState<AgentDetailedDto>();

  //@ts-ignore
  let agent = usersManager.agents.find((e) => e._id == params.agent);

  if (agent == undefined) {
    Navigate({ to: "", replace: true });
  }

  console.log(params);
  async function loadProfile() {
    try {
      startNavigationProgress();
      let response = await orgControllerApi.orgControllerGetOrg(
        params.agent ?? ""
      );
      setProfile(response.data);
      resetNavigationProgress();
    } catch (err) {
      resetNavigationProgress();
    }
  }

  useEffect(() => {
    loadProfile();
  }, []);

  if (agentProfile == undefined) {
    return (
      <Center my={42}>
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
                <Title sx={{ fontSize: 24 }}>Agent Profile</Title>
              </Box>
            </Group>

            <AgentDetails
              //@ts-ignore
              agent={agent}
              profile={agentProfile}
            />
          </Stack>
        </Paper>
      </Stack>
    </Box>
  );
});
