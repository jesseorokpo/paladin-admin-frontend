import { Box, Button, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import { IconCheck } from "@tabler/icons";
import { } from "iconsax-react"


export default function ModalSuccessComp({ caption, onNext }: { caption: string, onNext: () => void }) {
    const theme = useMantineTheme();
    return <Box>
        <Stack justify={"center"} align="center" py="52px">
            <Box sx={{
                borderRadius: 500, border: `2px solid ${theme.colors.orange[7]}`,
                height: 60, width: 60,
                justifyContent: 'center',
                alignContent: "center",
                alignItems: 'center',
                display: 'flex'
            }}>
                <IconCheck size={40} color={theme.colors.orange[7]} />
            </Box>
            <Title>
                Success
            </Title>
            <Text>
                {caption}
            </Text>
            <Button onClick={() => {
                onNext();
            }}>
                Continue
            </Button>
        </Stack>
    </Box>
}