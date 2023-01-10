import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUserInfo, userSignOut } from "../../redux/actions/userActions";

export default function Header() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state);

  const onSignUpBtn = () => {
    navigate("/signup");
  };
  const onSignOut = () => {
    dispatch(userSignOut());
    navigate("/signup");
  };

  const isLoggedIn = !!userInfo;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <AcUnitIcon sx={{ marginRight: 4, fontSize: 32 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tinder
          </Typography>
          {!isLoggedIn && (
            <Button onClick={onSignUpBtn} color="inherit">
              Signup
            </Button>
          )}
          {isLoggedIn && (
            <Button onClick={onSignOut} color="inherit">
              Signout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
