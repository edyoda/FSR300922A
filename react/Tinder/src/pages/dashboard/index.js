import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../../components/header";
import UsersList from "../../components/usersList";

const Dashboard = () => {
  const userInfo = useSelector((state) => state.user.userInfo);

  // console.log(userInfo)

  return (
    <div>
      <Header />
      <Typography variant="h4" component={"h4"} color='secondary' m={4}>
        Hello, {userInfo && userInfo.email}
      </Typography>
      <UsersList />
    </div>
  );
};

export default Dashboard;
