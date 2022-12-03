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
import { Product } from "../../../../sdk/catalog";

export const RenderProducts = ({ items }: { items: Product[] }) => {
  const rows = items.map((element, index) => (
    <tr key={index} style={{ border: "0px solid black" }}>
      <td>
        <Avatar />
      </td>
      <td>{"Product Name"}</td>
      <td>{"Caption"}</td>
      <td>{"Category"}</td>
      <td>{"N1,000"}</td>
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
            <th>Product Name</th>
            <th>Caption</th>
            <th>Category</th>
            <th>Amount (N)</th>
            <th style={{ textAlign: "center" }}>Active</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Box>
  );
};
