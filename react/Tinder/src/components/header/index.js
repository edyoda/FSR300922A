import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {  userSignOut } from "../../redux/actions/userActions";
import LikeRouteButton from "../LikeButton";

export default function Header() {
  const navigate = useNavigate();
  const {pathname} = useLocation();


  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);

  const onSignUpBtn = () => {
    navigate("/signup");
  };
  const onSignOut = () => {
    dispatch(userSignOut());
    navigate("/signup");
  };
  const onDashboard =()=>{
    navigate("/dashboard");
  }
  const onHome = ()=>{
    navigate("/");
  }

  const isLoggedIn = !!userInfo;
  const isDashboardPage = pathname.includes('/dashboard');

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <AcUnitIcon sx={{ marginRight: 4, fontSize: 32 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tinder
          </Typography>

          {
            isLoggedIn && <LikeRouteButton/>
          }
          {isLoggedIn && !isDashboardPage&& (
            <Button onClick={onDashboard} color="inherit">
              Dashboard
            </Button>
          )}
          {isLoggedIn && isDashboardPage&& (
            <Button onClick={onHome} color="inherit">
              Home
            </Button>
          )}
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
