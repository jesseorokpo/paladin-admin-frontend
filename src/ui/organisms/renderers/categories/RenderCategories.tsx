import {
  ActionIcon,
  Avatar,
  Box,
  Button,
  Center,
  Grid,
  Group,
  Table,
  Text,
} from "@mantine/core";
import { Edit } from "iconsax-react";

export const RenderCategories = ({ items }: { items: any[] }) => {
  const rows = items.map((element) => (
    <tr key={element} style={{ border: "0px solid black" }}>
      <td>
        <Avatar />
      </td>
      <td>{"Category Name"}</td>
      <td>{"Type"}</td>
      <td>{"10 Items"}</td>
      <td>
        <Center>
          <Button variant="outline" size="sm">
            EDIT
          </Button>
        </Center>
      </td>
    </tr>
  ));

  return (
    <Box>
      <Table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Category Name</th>
            <th>Type</th>
            <th>Items</th>
            <th style={{ textAlign: "center" }}>Active</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Box>
  );
};
