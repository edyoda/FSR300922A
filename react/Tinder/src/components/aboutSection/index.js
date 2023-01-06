import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

const AboutSection = () => {
  return (
    <Box sx={{ pt: 8, pb: 6 }}>
      <Typography variant="h4" align="center" gutterBottom mb={10} component={"h4"}>
        We’re not just for dating anymore
      </Typography>

      <Box sx={{ height: 450 }}>
        <img
          style={{ height: "100%", width: "100%" }}
          src="https://www.androidauthority.com/wp-content/uploads/2017/03/Tinder-screenshot-2017-2.jpg"
        />
      </Box>
    </Box>
  );
};
export default AboutSection;
