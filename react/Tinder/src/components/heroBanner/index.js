import React from "react";
import { Typography, Box, Container } from "@mui/material";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 8,
        pb: 6,
        backgroundImage: `url('https://cutewallpaper.org/cdn-cgi/mirage/dd19f2d06ebc24f541f142b37b4289ffa7de722a7607e39984c5c6dd4ce8defd/1280/21/animal-crossing-desktop-background/Animal-Crossing-New-Leaf-Animal-Crossing-New-Leaf-Logo-.jpg')`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover'
    }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Welcome to Tinder
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don&apos;t simply skip over it entirely.
        </Typography>
      </Container>
    </Box>
  );
};

export default HeroBanner;
