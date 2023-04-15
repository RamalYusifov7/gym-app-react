import { Box, Container } from "@mui/material";
import React from "react";

function Loading() {
  return (
    <Box sx={{ textAlign: "center", fontSize: "24px" }}>
      <Container><span class="loader"></span></Container>
    </Box>
  );
}

export default Loading;
