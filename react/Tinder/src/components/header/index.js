import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AcUnitIcon from "@mui/icons-material/AcUnit";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <AcUnitIcon sx={{ marginRight: 4,fontSize:32 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tinder
          </Typography>
          <Button color="inherit">Signup</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
