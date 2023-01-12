import React from "react";
import { useSelector } from "react-redux";
import UserCard from "./userCard";
import styles from "./userDetails.module.css";
import NoLikeImg from "../../assets/images/no-like.svg";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const LikeList = () => {
  const list = useSelector((state) => state.utils.likesUsers);

  return (
    <div className={styles.userDetailsWrapper}>
      {list && !!list.length && (
        <div className={styles.userList}>
          {list.map((item) => (
            <UserCard userDetails={item} key={item.id} />
          ))}
        </div>
      )}
      {list && list.length == 0 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            flexDirection:'column',
            margin: 8,
          }}
        >
          <img src={NoLikeImg} style={{ height: 300, width: "50%" }} />
          <Typography mt={4} color={"gray"}>No Liked User</Typography>
        </Box>
      )}
    </div>
  );
};

export default LikeList;
