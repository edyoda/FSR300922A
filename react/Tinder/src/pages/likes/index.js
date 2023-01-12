import { Typography } from "@mui/material";
import React from "react";
import Header from "../../components/header";
import LikeList from "../../components/usersList/likesList";

const Likes = () => {
  

  return (
    <div>
      <Header />
      <Typography variant="h4" component={"h4"} color="secondary" m={4}>
        Likes
      </Typography>
      <LikeList/>
    </div>
  );
};

export default Likes;
