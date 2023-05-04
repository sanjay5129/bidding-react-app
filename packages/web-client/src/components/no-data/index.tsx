import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import MoodBadIcon from "@mui/icons-material/MoodBad";

const NoData = () => {
  return (
    <Box
      sx={{
        height: "75vh",
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "95%",
        margin: "0 auto",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      }}
    >
      <MoodBadIcon color="primary" sx={{ height: 100, width: 100 }} />
      <Typography variant="h3" color="primary">
        Data not found
      </Typography>
    </Box>
  );
};
export default NoData;
