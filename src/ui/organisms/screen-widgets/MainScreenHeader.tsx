import { Group, Title, Text } from "@mantine/core";
import { } from "chart.js";


type MainScreenHeaderProps = {
    title: string;
}

export default function MainScreenHeader({ title }: MainScreenHeaderProps) {
    return <Group position="apart">
        <Text sx={{fontSize: 24, fontWeight: 'bold' }}>
            {title}
        </Text>

        <Group>
          
        </Group>
    </Group>
}