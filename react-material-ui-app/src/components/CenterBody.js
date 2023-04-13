import { Box } from "@mui/material";
import React from "react";
import Item from "./Item";

export default function CenterBody() {
  return (
    <Box flex={3} p={2}>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </Box>
  );
}
